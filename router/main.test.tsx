import { expect, test, describe } from "bun:test";
import { router } from "./main.js";

describe("routing", () => {
	test("simple GET", async () => {
		let app = router();
		app.route("/").get(() => <h1>Hello</h1>);
		let res = await app.fetch(get("/"));
		expect(res.status).toBe(200);
	});
});

function get(path: string, init?: RequestInit) {
	return new Request(`http://localhost${path}`, init);
}

function post(path: string, init: RequestInit) {
	new Request(`http://localhost${path}`, {
		...init,
		method: "POST",
		headers: {
			...init.headers,
			"content-type": "application/x-www-form-urlencoded",
		},
		redirect: "manual",
	});
}
