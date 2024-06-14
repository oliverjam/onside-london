import { readdir } from "node:fs/promises";
import { join as j } from "node:path";

try {
	let out = "_site";
	let pages_in = j("src", "pages");

	// recreate output directory
	await Bun.$`rm -rf ${out}`;
	await Bun.$`mkdir -p ${out}`;

	let fs = await readdir(pages_in, { recursive: true, withFileTypes: true });
	let writers = [];

	for (let f of fs) {
		if (!f.isFile()) continue;
		if (!f.name.includes(".tsx")) continue;

		let in_path = j(import.meta.dir, f.path, f.name);
		let html = await import(in_path).then((m) => m.default());
		let out_path = j(
			f.path.replace(pages_in, out),
			f.name.replace(".tsx", ".html")
		);
		writers.push(Bun.write(out_path, "<!doctype html>" + html));
	}

	// copy over assets
	writers.push(Bun.$`cp -r ${j("src", "assets")} ${j(out, "assets")}`);

	// wait for everything to finish
	await Promise.all(writers);
	console.log("⚡ Site built");
} catch (e) {
	console.error(e);
	process.exit(1);
}
