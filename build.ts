import { readdir } from "node:fs/promises";
import { join as j } from "node:path";

try {
	// recreate output directory
	await Bun.$`rm -rf _site`;
	await Bun.$`mkdir -p _site`;

	let fs = await readdir("src/pages", { recursive: true, withFileTypes: true });
	let writers = [];

	for (let f of fs) {
		if (!f.isFile()) continue;
		if (!f.name.includes(".tsx")) continue;

		let in_path = j(import.meta.dir, f.path, f.name);
		let html = await import(in_path).then((m) => m.default());
		let out_path = j(
			f.path.replace("src/pages", "_site"),
			f.name.replace(".tsx", ".html")
		);
		writers.push(Bun.write(out_path, "<!doctype html>" + html));
	}

	// copy over assets
	writers.push(Bun.$`cp -r src/assets _site/assets`);

	// wait for everything to finish
	await Promise.all(writers);
	// generate CSS
	await Bun.$`bunx tailwindcss --minify -i src/main.css -o _site/assets/main.css`;
	console.log("⚡ Site built");
} catch (e) {
	console.error(e);
	process.exit(1);
}
