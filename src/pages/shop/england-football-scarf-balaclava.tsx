import { Root } from "../../ui.tsx";

let meta = {
	title: "England Football Scarf Balaclava - ONSIDE LONDON",
	description:
		"Carefully sourced and upcycled football scarf becomes terrace ready balaclava",
};

export default function Balaclava() {
	return (
		<Root meta={meta} url="/shop/england-football-scarf-balaclava">
			<main class="mt-12  space-y-12 px-6 pb-24 md:px-9 lg:px-12">
				<div class="grid md:grid-cols-2 gap-12">
					<div class="max-w-[500px]">
						<div class="max-md:flex max-md:overflow-x-auto max-md:snap-x max-lg:snap-mandatory scroll-smooth">
							<img
								src="/assets/balaclava-left.png"
								id="image-1"
								width="1080"
								height="1440"
								class="snap-center"
								alt="Left side of the balaclava, showing England flag and text"
							/>
							<img
								src="/assets/balaclava-right.png"
								id="image-2"
								width="1080"
								height="1440"
								class="snap-center"
								alt="Right side of the balaclava, showing more text"
							/>
							<img
								src="/assets/balaclava-product.jpeg"
								id="image-3"
								width="1080"
								height="1440"
								class="snap-center"
								alt="Front view of model wearing the balaclava"
							/>
						</div>
						<nav class="md:hidden mt-6 flex justify-center gap-6">
							<a
								href="#image-1"
								data-active="true"
								class="size-6 bg-white/40 rounded-full data-[active='true']:bg-white"
							></a>
							<a
								href="#image-2"
								class="size-6 bg-white/40 rounded-full data-[active='true']:bg-white"
							></a>
							<a
								href="#image-3"
								class="size-6 bg-white/40 rounded-full data-[active='true']:bg-white"
							></a>
							<script>
								{`
								let as = document.querySelectorAll("[href^='#image']");
								window.onhashchange = () => as.forEach(a => {
									a.dataset.active = a.hash === location.hash;
								})
							`}
							</script>
						</nav>
					</div>
					<div>
						<div class="md:sticky md:top-12 space-y-6 max-w-2xl">
							<header>
								<h1 class="text-5xl">England Football Scarf Balaclava</h1>
								<p class="text-xl mt-4">£65.00</p>
							</header>
							<ul class="text-lg list-disc pl-4 space-y-4">
								<li>
									Carefully sourced and upcycled football scarf becomes terrace
									ready balaclava
								</li>
								<li>Crafted by hand from individual vintage fabrics</li>
								<li>Bold coloured patchwork construction</li>
								<li>
									Every item individual one of a kind with slight variations
									between each piece
								</li>
								<li>
									Item is made from imported, used materials that have been
									disassembled and re-purposed
								</li>
								<li>
									Any damage and stains are consistent with the special
									characteristics of vintage fabrics and are not a manufacturing
									fault
								</li>
								<li>Individual pieces, sizes may vary very slightly</li>
							</ul>
							<a
								href="https://buy.stripe.com/3cs17957QcGn3cI6oo"
								class="block w-full text-center py-4 px-6 text-lg bg-stone-200 text-stone-950 hover:bg-stone-300 transition-colors"
								target="_blank"
							>
								Buy now
							</a>
						</div>
					</div>
				</div>
			</main>
		</Root>
	);
}
