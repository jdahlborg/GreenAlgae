<svelte:head>
	<title>{$t('home.meta_title')}</title>
	<meta name="description" content={$t('home.meta_desc')} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import SpirulinaOrganism from '$lib/illustrations/SpirulinaOrganism.svelte';
	import { t } from '$lib/i18n';
</script>

<Nav />

<!-- HERO -->
<section class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-green-950 px-6 pt-24">
	<img
		src="https://images.unsplash.com/photo-1573843981267-be1480cc8ef3?w=1920&q=85&fit=crop"
		alt="Mauritius tropical beach"
		class="absolute inset-0 h-full w-full object-cover opacity-20"
	/>
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-800/30 via-green-950 to-green-950"></div>
	<div class="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
		<div class="text-center lg:text-left">
			<div class="mb-6 inline-block rounded-full border border-green-600 bg-green-900 px-4 py-1.5 text-sm font-medium text-green-300">
				{$t('home.hero.badge')}
			</div>
			<h1 class="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
				{$t('home.hero.title')}<br /><span class="text-green-400">{$t('home.hero.title_accent')}</span>
			</h1>
			<p class="mx-auto mb-10 max-w-2xl text-lg text-green-100 sm:text-xl lg:mx-0">
				{$t('home.hero.desc')}
			</p>
			<div class="flex flex-wrap justify-center gap-4 lg:justify-start">
				<a href="/contact" class="rounded-full bg-green-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-green-400 transition-colors">
					{$t('home.hero.cta_primary')}
				</a>
				<a href="#products" class="rounded-full border border-green-600 px-8 py-3.5 text-base font-semibold text-green-200 hover:border-green-400 hover:text-white transition-colors">
					{$t('home.hero.cta_secondary')}
				</a>
			</div>
		</div>
		<div class="flex justify-center lg:justify-end">
			<SpirulinaOrganism class="w-48 opacity-90 drop-shadow-2xl sm:w-64 lg:w-80" />
		</div>
	</div>

	<!-- STAT BAR -->
	<div class="relative z-10 mt-16 grid w-full max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-green-700 bg-green-700 sm:grid-cols-4">
		{#each $t('home.stats') as stat}
			<div class="flex flex-col items-center gap-1 bg-green-950 px-4 py-6">
				<span class="text-2xl font-extrabold text-green-400">{stat.value}</span>
				<span class="text-center text-xs font-medium text-green-300">{stat.label}</span>
			</div>
		{/each}
	</div>
</section>

<!-- PROBLEM -->
<section class="bg-green-950 px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">{$t('home.problem.eyebrow')}</div>
		<h2 class="mb-6 text-4xl font-bold text-white">{$t('home.problem.title')}</h2>
		<p class="mb-12 max-w-3xl text-lg text-green-100">
			{$t('home.problem.desc')}
		</p>
		<div class="grid gap-6 sm:grid-cols-3">
			<div class="rounded-2xl border border-green-700 bg-green-800/50 p-6">
				<svg class="mb-4 h-10 w-10" viewBox="0 0 40 40" fill="none" aria-hidden="true">
					<circle cx="20" cy="20" r="16" stroke="#4a9e50" stroke-width="2" />
					<path d="M20 8 Q28 14 28 20 Q28 26 20 32 Q12 26 12 20 Q12 14 20 8Z" stroke="#4a9e50" stroke-width="1.5" fill="none" />
					<line x1="8" y1="20" x2="32" y2="20" stroke="#4a9e50" stroke-width="1.5" />
					<line x1="4" y1="20" x2="8" y2="20" stroke="#6dbf74" stroke-width="2" stroke-linecap="round" />
					<line x1="32" y1="20" x2="36" y2="20" stroke="#6dbf74" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 2" />
				</svg>
				<h3 class="mb-2 text-base font-semibold text-white">{$t('home.problem.card1.title')}</h3>
				<p class="text-sm leading-relaxed text-green-100">{$t('home.problem.card1.desc')}</p>
			</div>
			<div class="rounded-2xl border border-green-700 bg-green-800/50 p-6">
				<svg class="mb-4 h-10 w-10" viewBox="0 0 40 40" fill="none" aria-hidden="true">
					<path d="M4 24 Q10 18 16 24 Q22 30 28 24 Q34 18 40 24" stroke="#4a9e50" stroke-width="2" stroke-linecap="round" fill="none" />
					<path d="M4 30 Q10 24 16 30 Q22 36 28 30 Q34 24 40 30" stroke="#4a9e50" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.5" />
					<circle cx="14" cy="10" r="3" fill="#4a9e50" opacity="0.8" />
					<path d="M14 13 L14 18" stroke="#4a9e50" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="1 2" />
					<circle cx="26" cy="7" r="2.5" fill="#4a9e50" opacity="0.6" />
					<path d="M26 10 L26 16" stroke="#4a9e50" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="1 2" />
				</svg>
				<h3 class="mb-2 text-base font-semibold text-white">{$t('home.problem.card2.title')}</h3>
				<p class="text-sm leading-relaxed text-green-100">{$t('home.problem.card2.desc')}</p>
			</div>
			<div class="rounded-2xl border border-green-700 bg-green-800/50 p-6">
				<svg class="mb-4 h-10 w-10" viewBox="0 0 40 40" fill="none" aria-hidden="true">
					<circle cx="20" cy="10" r="5" stroke="#4a9e50" stroke-width="2" />
					<path d="M12 30 C12 22 28 22 28 30" stroke="#4a9e50" stroke-width="2" stroke-linecap="round" fill="none" />
					<line x1="20" y1="30" x2="20" y2="38" stroke="#4a9e50" stroke-width="1.5" stroke-linecap="round" />
					<path d="M20 34 Q24 30 26 32" stroke="#4a9e50" stroke-width="1.5" stroke-linecap="round" fill="none" />
					<path d="M20 36 Q16 32 14 34" stroke="#4a9e50" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.6" />
				</svg>
				<h3 class="mb-2 text-base font-semibold text-white">{$t('home.problem.card3.title')}</h3>
				<p class="text-sm leading-relaxed text-green-100">{$t('home.problem.card3.desc')}</p>
			</div>
		</div>
	</div>
</section>

<!-- PRODUCTS -->
<section id="products" class="border-t border-green-800 bg-green-900/40 px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">{$t('home.products.eyebrow')}</div>
		<h2 class="mb-4 text-4xl font-bold text-white">{$t('home.products.title')}</h2>
		<p class="mb-12 max-w-3xl text-lg text-green-100">
			{$t('home.products.desc')}
		</p>
		<div class="grid gap-8 sm:grid-cols-2">
			<div class="rounded-2xl border border-green-600 bg-green-800/60 p-8">
				<div class="mb-2 text-xs font-semibold uppercase tracking-widest text-green-400">{$t('home.products.p1.tag')}</div>
				<h3 class="mb-2 text-2xl font-bold text-white">{$t('home.products.p1.title')}</h3>
				<div class="mb-4 text-green-400 font-semibold">{$t('home.products.p1.price')}</div>
				<p class="mb-6 text-sm leading-relaxed text-green-100">
					{$t('home.products.p1.desc')}
				</p>
				<ul class="space-y-2 text-sm text-green-200">
					{#each $t('home.products.p1.bullets') as item}
						<li class="flex gap-2"><span class="text-green-400 shrink-0" aria-hidden="true">✓</span>{item}</li>
					{/each}
				</ul>
			</div>
			<div class="rounded-2xl border border-green-700 bg-green-800/50 p-8">
				<div class="mb-2 text-xs font-semibold uppercase tracking-widest text-green-400">{$t('home.products.p2.tag')}</div>
				<h3 class="mb-2 text-2xl font-bold text-white">{$t('home.products.p2.title')}</h3>
				<div class="mb-4 text-green-400 font-semibold">{$t('home.products.p2.price')}</div>
				<p class="mb-6 text-sm leading-relaxed text-green-100">
					{$t('home.products.p2.desc')}
				</p>
				<ul class="space-y-2 text-sm text-green-200">
					{#each $t('home.products.p2.bullets') as item}
						<li class="flex gap-2"><span class="text-green-400 shrink-0" aria-hidden="true">✓</span>{item}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- SFWF SUBSIDY -->
<section id="sfwf" class="border-t border-green-800 bg-green-950 px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">{$t('home.sfwf.eyebrow')}</div>
		<h2 class="mb-6 text-4xl font-bold text-white">{$t('home.sfwf.title')}</h2>
		<p class="mb-12 max-w-3xl text-lg text-green-100">
			{$t('home.sfwf.desc')}
		</p>
		<div class="grid gap-6 sm:grid-cols-3">
			{#each $t('home.sfwf.steps') as s}
				<div class="rounded-2xl border border-green-700 bg-green-800/50 p-6">
					<div class="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-green-600 bg-green-800 text-sm font-bold text-green-300">{s.step}</div>
					<h3 class="mb-2 font-semibold text-white">{s.title}</h3>
					<p class="text-sm leading-relaxed text-green-100">{s.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- WHY US -->
<section class="border-t border-green-800 bg-green-900/40 px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">{$t('home.why.eyebrow')}</div>
		<h2 class="mb-12 text-4xl font-bold text-white">{$t('home.why.title')}</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each $t('home.why.cards') as card}
				<div class="rounded-2xl border border-green-700 bg-green-800/50 p-6">
					<h3 class="mb-2 font-semibold text-white">{card.title}</h3>
					<p class="text-sm leading-relaxed text-green-100">{card.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="border-t border-green-800 bg-green-950 px-6 py-24 text-center">
	<div class="mx-auto max-w-2xl">
		<h2 class="mb-4 text-3xl font-bold text-white">{$t('home.cta.title')}</h2>
		<p class="mb-8 text-lg text-green-200">
			{$t('home.cta.desc')}
		</p>
		<div class="flex flex-wrap justify-center gap-4">
			<a href="/contact" class="rounded-full bg-green-500 px-8 py-3.5 text-base font-semibold text-white hover:bg-green-400 transition-colors">
				{$t('home.cta.primary')}
			</a>
			<a href="/science" class="rounded-full border border-green-600 px-8 py-3.5 text-base font-semibold text-green-200 hover:border-green-400 hover:text-white transition-colors">
				{$t('home.cta.secondary')}
			</a>
		</div>
	</div>
</section>

<!-- FOOTER -->
<footer class="border-t border-green-800 bg-green-950 px-6 py-10 text-center text-xs text-green-400">
	<div class="mx-auto max-w-5xl">
		<div class="mb-2 font-semibold text-green-300">GreenAlgae Mauritius</div>
		<div>{$t('home.footer.tagline')}</div>
		<div class="mt-2"><a href="/investors" class="underline underline-offset-2 hover:text-green-300 transition-colors">{$t('home.footer.investor_link')}</a></div>
	</div>
</footer>
