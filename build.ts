import { readdir } from "node:fs/promises";
import { join } from "node:path";

try {
	let config = {
		indir: join("src", "pages"),
		outdir: "_site",
		assetdir: join("src", "assets"),
	};

	await Bun.$`rm -rf ${config.outdir}`;
	await Bun.$`mkdir -p ${config.outdir}`;

	let files = await readdir(config.indir, {
		recursive: true,
		withFileTypes: true,
	});

	for (let f of files) {
		if (!f.isFile()) continue;
		if (!f.name.includes(".tsx")) continue;
		let p = join(import.meta.dir, f.path, f.name);
		let { default: fn } = await import(p);
		let html = fn();
		let outpath = join(
			f.path.replace(config.indir, config.outdir),
			f.name.replace(".tsx", ".html")
		);
		await Bun.write(outpath, html);
	}

	await Bun.$`cp -r ${config.assetdir} ${join(config.outdir, "assets")}`;

	console.log("⚡ Site built");
} catch (e) {
	console.error(e);
	process.exit(1);
}
