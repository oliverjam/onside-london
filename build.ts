import { readdir, rmdir, mkdir } from "node:fs/promises";
import { join } from "node:path";

type PageModule = { default: () => string };

let config = {
	indir: join("src", "pages"),
	outdir: "_site",
	assetdir: join("src", "assets"),
};

await rmdir(config.outdir, { recursive: true });
await mkdir(config.outdir, { recursive: true });

for (let f of await files(config.indir)) {
	if (!f.name.includes(".tsx")) continue;
	let p = join(import.meta.dir, f.path, f.name);
	let { default: fn } = (await import(p)) as PageModule;
	let html = fn();
	let outpath = join(
		f.path.replace(config.indir, config.outdir),
		f.name.replace(".tsx", ".html")
	);
	let file = Bun.file(outpath);
	Bun.write(file, html);
}

for (let f of await files(config.assetdir)) {
	let p = join(f.path, f.name);
	let file = Bun.file(p);
	let outpath = join(
		f.path.replace(config.assetdir, config.outdir),
		"assets",
		f.name
	);
	await Bun.write(outpath, file);
}

async function files(dir: string) {
	let fs = await readdir(dir, { recursive: true, withFileTypes: true });
	return fs.filter((f) => f.isFile());
}
