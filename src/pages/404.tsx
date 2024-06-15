import { Root } from "../ui.tsx";

let meta = {
	title: "Not found - ONSIDE LONDON",
	description: "This page could not be found",
};

export default function Missing() {
	return (
		<Root meta={meta} url="/404">
			<main class="my-24 p-8 text-4xl text-center">
				<h1>Page not found</h1>
			</main>
		</Root>
	);
}
