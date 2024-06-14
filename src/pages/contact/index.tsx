import { Root } from "../../ui.tsx";

let meta = {
	title: "Contact - ONSIDE LONDON",
	description: "Contact us",
};

export default function Contact() {
	return (
		<Root meta={meta} url="/contact/">
			<main class="my-48 px-6 md:px-9 lg:px-12">
				<h1 class="text-xl">Contact</h1>
				<a
					class="text-[clamp(1rem,1rem+2vw,5rem)] leading-tight"
					href="mailto:onsidelondoninfo@gmail.com"
				>
					onsidelondoninfo@gmail.com
				</a>
			</main>
		</Root>
	);
}
