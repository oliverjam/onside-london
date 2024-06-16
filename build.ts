import { readdir } from "node:fs/promises";

await Bun.$`rm -rf _site`;
await Bun.$`mkdir -p _site`;

for (let p of await readdir("src/pages", { recursive: true })) {
	if (!p.endsWith(".tsx")) continue;
	let out = "_site/" + p.replace(".tsx", ".html");
	let page = await import("./src/pages/" + p);
	let html = "<!doctype html>" + page.default();
	await Bun.write(out, html);
}

await Bun.$`cp -r src/assets _site/assets`;
await Bun.$`bunx tailwindcss --minify -i src/main.css -o _site/assets/main.css`.quiet();
