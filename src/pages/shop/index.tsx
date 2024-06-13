import { Root } from "../../ui.tsx";

export default function About() {
	return (
		<Root title="Shop - ONSIDE LONDON" url="/shop/">
			<main class="space-y-12 px-6 md:px-9 lg:px-12 text-center">
				<h1 class="text-3xl">Shop</h1>
				<section class="space-y-6">
					<h2>Accessories</h2>
					<hr />
					<article class="max-w-max space-y-4">
						<a class="block" href="/shop/england-football-scarf-balaclava">
							<figure class="grid grid-cols-1 grid-rows-1 group">
								<img
									src="https://picsum.photos/500/600"
									width="500"
									height="600"
									class="col-span-full row-span-full hidden group-hover:block"
									alt="Left side of the balaclava, showing England flag and text"
								/>
								<img
									src="https://picsum.photos/500/600?1"
									width="500"
									height="800"
									class="col-span-full row-span-full block group-hover:hidden"
									alt="Right side of the balaclava, showing more text"
								/>
							</figure>
						</a>
						<div class="text-xl">
							<h3>England Football Scarf Balaclava</h3>
							<p>£65.00</p>
						</div>
					</article>
				</section>
			</main>
		</Root>
	);
}
