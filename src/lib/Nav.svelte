<script lang="ts">
	import { t, lang, type Lang } from '$lib/i18n';

	let { activePage = '' }: { activePage?: string } = $props();

	let open = $state(false);

	const links = [
		{ href: '/#products', labelKey: 'nav.products' },
		{ href: '/#sfwf', labelKey: 'nav.subsidy' },
		{ href: '/science', labelKey: 'nav.science', page: 'science' },
		{ href: '/investors', labelKey: 'nav.investors', page: 'investors' },
		{ href: '/contact', labelKey: 'nav.contact', page: 'contact' },
	];

	const langs: { code: Lang; label: string }[] = [
		{ code: 'en', label: 'EN' },
		{ code: 'fr', label: 'FR' },
		{ code: 'cr', label: 'CR' },
	];
</script>

<nav class="fixed top-0 z-50 w-full border-b border-green-800 bg-green-950/95 backdrop-blur">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<a href="/" class="text-lg font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
			GreenAlgae<span class="text-green-400"> Mauritius</span>
		</a>

		<!-- Desktop links -->
		<div class="hidden items-center gap-6 text-sm font-medium text-green-200 sm:flex">
			{#each links as link}
				<a
					href={link.href}
					class="transition-colors {activePage === link.page ? 'text-white' : 'hover:text-white'}"
				>
					{$t(link.labelKey)}
				</a>
			{/each}
			<a href="/#invest" class="rounded-full bg-green-600 px-4 py-1.5 text-white hover:bg-green-500 transition-colors">
				{$t('nav.invest')}
			</a>
			<!-- Language switcher -->
			<div class="flex items-center gap-1 border-l border-green-700 pl-4 text-xs font-semibold">
				{#each langs as l}
					<button
						onclick={() => lang.set(l.code)}
						class="rounded px-1.5 py-0.5 transition-colors {$lang === l.code ? 'bg-green-700 text-white' : 'text-green-500 hover:text-white'}"
					>
						{l.label}
					</button>
				{/each}
			</div>
		</div>

		<!-- Hamburger button -->
		<button
			onclick={() => (open = !open)}
			class="flex flex-col items-center justify-center gap-1.5 p-2 sm:hidden"
			aria-label="Toggle menu"
			aria-expanded={open}
		>
			<span class="block h-0.5 w-6 bg-green-300 transition-all duration-200 {open ? 'translate-y-2 rotate-45' : ''}"></span>
			<span class="block h-0.5 w-6 bg-green-300 transition-all duration-200 {open ? 'opacity-0' : ''}"></span>
			<span class="block h-0.5 w-6 bg-green-300 transition-all duration-200 {open ? '-translate-y-2 -rotate-45' : ''}"></span>
		</button>
	</div>

	<!-- Mobile menu -->
	{#if open}
		<div class="border-t border-green-800 bg-green-950 px-6 pb-6 pt-4 sm:hidden">
			<div class="flex flex-col gap-1">
				{#each links as link}
					<a
						href={link.href}
						onclick={() => (open = false)}
						class="rounded-lg px-3 py-2.5 text-sm font-medium transition-colors {activePage === link.page ? 'bg-green-800/60 text-white' : 'text-green-200 hover:bg-green-900 hover:text-white'}"
					>
						{$t(link.labelKey)}
					</a>
				{/each}
				<a
					href="/#invest"
					onclick={() => (open = false)}
					class="mt-3 rounded-full bg-green-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-green-500 transition-colors"
				>
					{$t('nav.invest')}
				</a>
				<!-- Language switcher mobile -->
				<div class="mt-4 flex items-center gap-2 border-t border-green-800 pt-4">
					<span class="text-xs text-green-500">Language:</span>
					{#each langs as l}
						<button
							onclick={() => { lang.set(l.code); open = false; }}
							class="rounded px-2 py-1 text-xs font-semibold transition-colors {$lang === l.code ? 'bg-green-700 text-white' : 'text-green-500 hover:text-white'}"
						>
							{l.label}
						</button>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</nav>
