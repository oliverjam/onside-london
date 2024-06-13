import { Root } from "../ui.tsx";

export default function Index() {
	return (
		<Root title="ONSIDE LONDON" url="/">
			<main class="px-6 md:px-9 lg:px-12 text-center">
				<h1 class="block my-36 md:my-48 lg:my-48 uppercase text-[clamp(2rem,2rem+2vw,5rem)] leading-tight">
					Spring/Summer 2024
				</h1>
				<div class="grid grid-cols-2 gap-4 md:gap-6 lg:gap-12">
					<img
						class="fade-in-on-scroll"
						src="/assets/balaclava-goal.jpeg"
						alt="Our model wearing our England football scarf balaclava with a classic white England shirt leaning against a football goal"
					/>
					<img
						class="fade-in-on-scroll"
						src="/assets/balaclava-seats.jpeg"
						alt="Our model wearing our England football scarf balaclava sitting in the stands at a football ground"
					/>
					<img
						class="fade-in-on-scroll"
						src="/assets/balaclava-football.jpeg"
						alt="Our model wearing our England football scarf balaclava holding a football"
					/>
					<img
						class="fade-in-on-scroll"
						src="/assets/balaclava-bricks.jpeg"
						alt="Our model wearing our England football scarf balaclava framed against a brick wall"
					/>
				</div>
				<img
					class="fade-in-on-scroll mt-4 md:mt-6 lg:mt-12 w-full h-[660px] object-cover"
					src="/assets/balaclava-bench.jpeg"
					alt="Our model wearing our England football scarf balaclava sitting on a bench with a football"
				/>
				<section class="my-36 md:my-48 max-w-2xl mx-auto space-y-10">
					<p class="text-lg md:text-2xl">
						Crafted from extensively sourced deadstock vintage football scarves,
						this innovatively sustainable handmade collection is available in
						very limited quantities.
					</p>
					<p>
						<a href="/shop/" class="text-3xl underline underline-offset-6">
							Shop Now
						</a>
					</p>
				</section>
			</main>
		</Root>
	);
}
