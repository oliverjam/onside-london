import { Root } from "../../ui.tsx";

let meta = {
	title: "About - ONSIDE LONDON",
	description:
		"Designed by Thomas Brazil and made exclusively made in London, ONSIDE LONDON combines high fashion with streetwear, sportswear with couture.",
};

export default function About() {
	return (
		<Root meta={meta} url="/about/">
			<main class="px-6 md:px-9 lg:px-12">
				<h1 class="sr-only">About</h1>
				<div class="max-w-3xl my-48 space-y-6 leading-relaxed text-lg">
					<p>
						Designed by Thomas Brazil and made exclusively made in London,
						ONSIDE LONDON combines high fashion with streetwear, sportswear with
						couture.
					</p>
					<p>
						The Spring/Summer 2024 drop sees High fashion and Street level
						hooliganism collide head on.
					</p>
					<p>Limited and artisanal for heads in the know.</p>
				</div>
			</main>
		</Root>
	);
}
