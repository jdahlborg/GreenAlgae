<svelte:head>
	<title>GreenAlgae Mauritius — Local Biofertilizer for Mauritian Farmers</title>
	<meta
		name="description"
		content="GreenAlgae Mauritius produces Spirulina biofertilizer and biopesticide for Mauritian smallholder farmers. Cheaper than imports, compatible with the SFWF 60% subsidy."
	/>
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
</script>

<Nav />

<!-- HERO -->
<section class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-green-950 px-6 pt-24">
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-800/30 via-green-950 to-green-950"></div>
	<div class="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
		<div class="text-center lg:text-left">
			<div class="mb-6 inline-block rounded-full border border-green-600 bg-green-900 px-4 py-1.5 text-sm font-medium text-green-300">
				Grown in Mauritius · For Mauritian Farmers
			</div>
			<h1 class="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
				Better fertilizer.<br /><span class="text-green-400">Made here.</span>
			</h1>
			<p class="mx-auto mb-10 max-w-2xl text-lg text-green-100 sm:text-xl lg:mx-0">
				GreenAlgae Mauritius grows <em>Spirulina</em> microalgae on-island and turns it into biofertilizer
				pellets and biopesticide for local smallholders. No import risk. Organic compatible.
				Cheaper than chemical alternatives — even before the SFWF subsidy.
			</p>
			<div class="flex flex-wrap justify-center gap-4 lg:justify-start">
				<a href="/contact" class="rounded-full bg-green-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-green-400 transition-colors">
					Get in touch →
				</a>
				<a href="#products" class="rounded-full border border-green-600 px-8 py-3.5 text-base font-semibold text-green-200 hover:border-green-400 hover:text-white transition-colors">
					See our products
				</a>
			</div>
		</div>
		<div class="flex justify-center lg:justify-end">
			<SpirulinaOrganism class="w-48 opacity-90 drop-shadow-2xl sm:w-64 lg:w-80" />
		</div>
	</div>

	<!-- STAT BAR -->
	<div class="relative z-10 mt-16 grid w-full max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-green-700 bg-green-700 sm:grid-cols-4">
		{#each [
			{ value: '60%', label: 'Gov. subsidy via SFWF' },
			{ value: '$3–6/kg', label: 'Net cost after subsidy' },
			{ value: '20–40%', label: 'Yield improvement' },
			{ value: '0', label: 'Imported raw materials' },
		] as stat}
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
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">The problem</div>
		<h2 class="mb-6 text-4xl font-bold text-white">Your fertilizer comes from the other side of the world.</h2>
		<p class="mb-12 max-w-3xl text-lg text-green-100">
			Every bag of NPK fertilizer used on Mauritius contains raw materials that were shipped thousands of kilometres.
			When global supply chains break — and they do — prices spike overnight. In February 2026, the Hormuz closure pushed fertilizer prices up 35% in weeks.
			Mauritian farmers had no alternative.
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
				<h3 class="mb-2 text-base font-semibold text-white">100% import dependency</h3>
				<p class="text-sm leading-relaxed text-green-100">Mauritius imports $16M of fertilizer a year and exports just $156K. Every input you buy is exposed to global price shocks.</p>
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
				<h3 class="mb-2 text-base font-semibold text-white">Chemical runoff harms soil and reefs</h3>
				<p class="text-sm leading-relaxed text-green-100">Agrochemical runoff degrades Mauritius's reefs and depletes soil over time, raising long-term costs for every farmer.</p>
			</div>
			<div class="rounded-2xl border border-green-700 bg-green-800/50 p-6">
				<svg class="mb-4 h-10 w-10" viewBox="0 0 40 40" fill="none" aria-hidden="true">
					<circle cx="20" cy="10" r="5" stroke="#4a9e50" stroke-width="2" />
					<path d="M12 30 C12 22 28 22 28 30" stroke="#4a9e50" stroke-width="2" stroke-linecap="round" fill="none" />
					<line x1="20" y1="30" x2="20" y2="38" stroke="#4a9e50" stroke-width="1.5" stroke-linecap="round" />
					<path d="M20 34 Q24 30 26 32" stroke="#4a9e50" stroke-width="1.5" stroke-linecap="round" fill="none" />
					<path d="M20 36 Q16 32 14 34" stroke="#4a9e50" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.6" />
				</svg>
				<h3 class="mb-2 text-base font-semibold text-white">High costs hurt smallholders most</h3>
				<p class="text-sm leading-relaxed text-green-100">With 12,000+ smallholders and a food self-sufficiency ratio of just 25%, unaffordable inputs directly reduce yields and livelihoods.</p>
			</div>
		</div>
	</div>
</section>

<!-- PRODUCTS -->
<section id="products" class="border-t border-green-800 bg-green-900/40 px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">Our products</div>
		<h2 class="mb-4 text-4xl font-bold text-white">Grown on-island. Ready to use.</h2>
		<p class="mb-12 max-w-3xl text-lg text-green-100">
			We cultivate Spirulina microalgae in open raceway ponds using free local nutrient sources — no imported raw materials.
			The biomass is processed into two products for Mauritian farmers.
		</p>
		<div class="grid gap-8 sm:grid-cols-2">
			<div class="rounded-2xl border border-green-600 bg-green-800/60 p-8">
				<div class="mb-2 text-xs font-semibold uppercase tracking-widest text-green-400">Product 1</div>
				<h3 class="mb-2 text-2xl font-bold text-white">Biofertilizer pellets</h3>
				<div class="mb-4 text-green-400 font-semibold">$3–6/kg after SFWF subsidy</div>
				<p class="mb-6 text-sm leading-relaxed text-green-100">
					Slow-release pellets packed with nitrogen, phosphorus, and potassium from Spirulina biomass.
					Improves soil structure and microbial activity over time. Documented 20–40% yield improvement in global field trials.
				</p>
				<ul class="space-y-2 text-sm text-green-200">
					{#each [
						'Organic certification compatible',
						'No import disruption risk',
						'60% SFWF subsidy eligible',
						'Cheaper than chemical NPK at subsidised price',
					] as item}
						<li class="flex gap-2"><span class="text-green-400 shrink-0">✓</span>{item}</li>
					{/each}
				</ul>
			</div>
			<div class="rounded-2xl border border-green-700 bg-green-800/50 p-8">
				<div class="mb-2 text-xs font-semibold uppercase tracking-widest text-green-400">Product 2</div>
				<h3 class="mb-2 text-2xl font-bold text-white">Liquid biopesticide</h3>
				<div class="mb-4 text-green-400 font-semibold">$15–25/L · organic compatible</div>
				<p class="mb-6 text-sm leading-relaxed text-green-100">
					Spirulina extract with documented biopesticidal properties. Applied as a foliar spray or soil drench.
					Compatible with organic certification and safe for reef-adjacent farming areas.
				</p>
				<ul class="space-y-2 text-sm text-green-200">
					{#each [
						'No synthetic chemicals',
						'Safe near reef catchment areas',
						'Organic certification compatible',
						'Locally produced — no supply risk',
					] as item}
						<li class="flex gap-2"><span class="text-green-400 shrink-0">✓</span>{item}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- SFWF SUBSIDY -->
<section id="sfwf" class="border-t border-green-800 bg-green-950 px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">The subsidy</div>
		<h2 class="mb-6 text-4xl font-bold text-white">The government already pays 60% of your cost.</h2>
		<p class="mb-12 max-w-3xl text-lg text-green-100">
			The Small Farmers Welfare Fund (SFWF) subsidises 60% of the cost of approved bio-inputs for registered smallholders.
			GreenAlgae Mauritius products are eligible under the current scheme. You pay $3–6/kg — less than you pay for chemical fertilizer today.
		</p>
		<div class="grid gap-6 sm:grid-cols-3">
			{#each [
				{ step: '1', title: 'Register with SFWF', body: 'If you are not already a registered SFWF beneficiary, apply through the Ministry of Agro-Industry. Most smallholders qualify.' },
				{ step: '2', title: 'Order from us', body: 'Contact us directly or through your farmer cooperative. We deliver to your location or arrange pick-up from the farm.' },
				{ step: '3', title: 'Subsidy applied at point of sale', body: 'You pay the subsidised price only. GreenAlgae Mauritius handles the SFWF claim on the backend.' },
			] as s}
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
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">Why GreenAlgae</div>
		<h2 class="mb-12 text-4xl font-bold text-white">Local. Stable. Better for your soil.</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each [
				{ title: 'No import risk', body: 'Grown in Mauritius using local inputs. Price and availability never depend on shipping routes or global commodity markets.' },
				{ title: 'Yields improve over time', body: 'Spirulina biofertilizer improves soil structure and microbial life — benefits compound season after season, unlike synthetic NPK.' },
				{ title: 'Reef-safe', body: 'No synthetic chemicals that run off into reef catchment areas. Safe for farms near the coast and organic certification schemes.' },
				{ title: 'Pilot programme', body: 'We are looking for 3–5 pilot farmers in Year 1. Pilot participants get direct support and early pricing before wider rollout.' },
			] as card}
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
		<h2 class="mb-4 text-3xl font-bold text-white">Interested in the pilot programme?</h2>
		<p class="mb-8 text-lg text-green-200">
			We are looking for smallholder farmers and cooperatives to trial our biofertilizer in Year 1.
			Get in touch and we will explain how it works and what it costs you.
		</p>
		<div class="flex flex-wrap justify-center gap-4">
			<a href="/contact" class="rounded-full bg-green-500 px-8 py-3.5 text-base font-semibold text-white hover:bg-green-400 transition-colors">
				Join the pilot →
			</a>
			<a href="/science" class="rounded-full border border-green-600 px-8 py-3.5 text-base font-semibold text-green-200 hover:border-green-400 hover:text-white transition-colors">
				How it works
			</a>
		</div>
	</div>
</section>

<!-- FOOTER -->
<footer class="border-t border-green-800 bg-green-950 px-6 py-10 text-center text-xs text-green-400">
	<div class="mx-auto max-w-5xl">
		<div class="mb-2 font-semibold text-green-300">GreenAlgae Mauritius</div>
		<div>Local Spirulina biofertilizer · Mauritius · 2026</div>
		<div class="mt-2"><a href="/investors" class="underline underline-offset-2 hover:text-green-300 transition-colors">Investor information</a></div>
	</div>
</footer>
