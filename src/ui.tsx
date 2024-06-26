type RootProps = {
	url: string;
	meta: {
		title: string;
		description: string;
	};
};

export function Root({ meta, url, children }: JSX.Props<RootProps>) {
	return (
		<html lang="en" class="text-sm md:text-base scroll-smooth">
			<head>
				<title>{meta.title}</title>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="stylesheet" href="/assets/main.css" />
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow" />
				<meta name="description" content={meta.description} />
				<meta property="og:description" content={meta.description} />
				<meta
					property="og:image"
					content="https://onsidelondon.co.uk/assets/og-image.jpeg"
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
			</head>
			<body class="bg-black text-white font-display">
				<header class="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between p-6 md:p-12">
					<a href="/">
						<img
							src="/assets/logo.png"
							alt="Onside London"
							width="174.33"
							height="40"
						/>
					</a>
					<nav class="flex wrap gap-4 md:gap-8 lg:gap-12">
						<NavLink url={url} href="/">
							Lookbook
						</NavLink>
						<NavLink url={url} href="/shop/">
							Shop
						</NavLink>
						<NavLink url={url} href="/about/">
							About
						</NavLink>
						<NavLink url={url} href="/contact/">
							Contact
						</NavLink>
						<a href="https://www.instagram.com/onside.london">Instagram</a>
					</nav>
				</header>
				{children}
				<footer class="min-h-[55vh] p-6 grid items-end bg-[url('/assets/balaclava-together.jpeg')] bg-cover bg-center scrim-b">
					<p>© ONSIDE LONDON. All rights reserved.</p>
				</footer>
			</body>
		</html>
	);
}

type NavLinkProps = { url: string; href: string };

function NavLink({ url, href, children }: JSX.Props<NavLinkProps>) {
	let current = undefined;
	if (href === "/") {
		if (url === "/") current = "page";
	} else if (href === url) {
		current = "page";
	} else if (url.includes(href)) {
		current = "true";
	}
	return (
		<a
			href={href}
			class={current && "underline underline-offset-6"}
			aria-current={current}
		>
			{children}
		</a>
	);
}
