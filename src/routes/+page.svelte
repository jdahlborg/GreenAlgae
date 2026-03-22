<svelte:head>
	<title>GreenAlgae Mauritius — Local Microalgae Biofertilizer</title>
	<meta
		name="description"
		content="GreenAlgae Mauritius grows Spirulina microalgae and sells biofertilizer to Mauritian smallholder farmers. Seed investor deck 2026."
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
		<!-- Text -->
		<div class="text-center lg:text-left">
			<div class="mb-6 inline-block rounded-full border border-green-600 bg-green-900 px-4 py-1.5 text-sm font-medium text-green-300">
				Seed Investor Deck · 2026
			</div>
			<h1 class="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
				Mauritius grows its own<br /><span class="text-green-400">fertilizer.</span>
			</h1>
			<p class="mx-auto mb-10 max-w-2xl text-lg text-green-100 sm:text-xl lg:mx-0">
				GreenAlgae Mauritius cultivates <em>Spirulina</em> in open raceway ponds and sells biofertilizer
				pellets and biopesticide to local farmers — cheaper than imported chemicals, even before the 60%
				government subsidy.
			</p>
			<div class="flex flex-wrap justify-center gap-4 lg:justify-start">
				<a href="#invest" class="rounded-full bg-green-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-green-400 transition-colors">
					See the $150K ask →
				</a>
				<a href="#problem" class="rounded-full border border-green-600 px-8 py-3.5 text-base font-semibold text-green-200 hover:border-green-400 hover:text-white transition-colors">
					Read the case
				</a>
			</div>
		</div>
		<!-- Illustration -->
		<div class="flex justify-center lg:justify-end">
			<SpirulinaOrganism class="w-48 opacity-90 drop-shadow-2xl sm:w-64 lg:w-80" />
		</div>
	</div>

	<!-- STAT BAR -->
	<div class="relative z-10 mt-16 grid w-full max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-green-700 bg-green-700 sm:grid-cols-5">
		{#each [
			{ value: '$47K', label: 'Year 1 Revenue' },
			{ value: '$175K', label: 'Year 3 Revenue' },
			{ value: '18–24 mo', label: 'Breakeven' },
			{ value: '$150K', label: 'Stage 1 Ask' },
			{ value: '60%', label: 'Gov. Subsidy to Farmers' },
		] as stat}
			<div class="flex flex-col items-center gap-1 bg-green-950 px-4 py-6">
				<span class="text-2xl font-extrabold text-green-400">{stat.value}</span>
				<span class="text-center text-xs font-medium text-green-300">{stat.label}</span>
			</div>
		{/each}
	</div>
</section>

<!-- PROBLEM -->
<section id="problem" class="bg-green-950 px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">1. The Problem</div>
		<h2 class="mb-6 text-4xl font-bold text-white">Mauritius imports 100× more fertilizer than it exports.</h2>
		<p class="mb-12 max-w-3xl text-lg text-green-100">
			$16M in annual fertilizer imports vs. $156K exported. Every raw material — nitrogen, phosphorus, potassium — is 100% imported.
			12,000+ smallholder farmers are fully exposed to global supply shocks. In February 2026, the Hormuz closure alone pushed prices +35%.
		</p>
		<div class="grid gap-6 sm:grid-cols-3">
			<!-- Card 1 -->
			<div class="rounded-2xl border border-green-700 bg-green-800/50 p-6">
				<svg class="mb-4 h-10 w-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<circle cx="20" cy="20" r="16" stroke="#4a9e50" stroke-width="2" />
					<path d="M20 8 Q28 14 28 20 Q28 26 20 32 Q12 26 12 20 Q12 14 20 8Z" stroke="#4a9e50" stroke-width="1.5" fill="none" />
					<line x1="8" y1="20" x2="32" y2="20" stroke="#4a9e50" stroke-width="1.5" />
					<!-- Broken chain link on left -->
					<line x1="4" y1="20" x2="8" y2="20" stroke="#6dbf74" stroke-width="2" stroke-linecap="round" />
					<line x1="32" y1="20" x2="36" y2="20" stroke="#6dbf74" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 2" />
				</svg>
				<h3 class="mb-2 text-base font-semibold text-white">No local production</h3>
				<p class="text-sm leading-relaxed text-green-100">$16M imports vs $156K exports annually. When global supply disrupts, prices rise immediately.</p>
			</div>
			<!-- Card 2 -->
			<div class="rounded-2xl border border-green-700 bg-green-800/50 p-6">
				<svg class="mb-4 h-10 w-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<!-- Wave -->
					<path d="M4 24 Q10 18 16 24 Q22 30 28 24 Q34 18 40 24" stroke="#4a9e50" stroke-width="2" stroke-linecap="round" fill="none" />
					<path d="M4 30 Q10 24 16 30 Q22 36 28 30 Q34 24 40 30" stroke="#4a9e50" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.5" />
					<!-- Chemical droplets falling -->
					<circle cx="14" cy="10" r="3" fill="#4a9e50" opacity="0.8" />
					<path d="M14 13 L14 18" stroke="#4a9e50" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="1 2" />
					<circle cx="26" cy="7" r="2.5" fill="#4a9e50" opacity="0.6" />
					<path d="M26 10 L26 16" stroke="#4a9e50" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="1 2" />
				</svg>
				<h3 class="mb-2 text-base font-semibold text-white">Chemical runoff damages reefs</h3>
				<p class="text-sm leading-relaxed text-green-100">Agrochemical runoff is a documented contributor to reef degradation — threatening tourism revenue long-term.</p>
			</div>
			<!-- Card 3 -->
			<div class="rounded-2xl border border-green-700 bg-green-800/50 p-6">
				<svg class="mb-4 h-10 w-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<!-- Person -->
					<circle cx="20" cy="10" r="5" stroke="#4a9e50" stroke-width="2" />
					<path d="M12 30 C12 22 28 22 28 30" stroke="#4a9e50" stroke-width="2" stroke-linecap="round" fill="none" />
					<!-- Plant/crop (small, struggling) -->
					<line x1="20" y1="30" x2="20" y2="38" stroke="#4a9e50" stroke-width="1.5" stroke-linecap="round" />
					<path d="M20 34 Q24 30 26 32" stroke="#4a9e50" stroke-width="1.5" stroke-linecap="round" fill="none" />
					<path d="M20 36 Q16 32 14 34" stroke="#4a9e50" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.6" />
				</svg>
				<h3 class="mb-2 text-base font-semibold text-white">Smallholders can't afford inputs</h3>
				<p class="text-sm leading-relaxed text-green-100">Food self-sufficiency ratio is only 25%. SFWF already subsidises 60% of input cost — demand for alternatives is built in.</p>
			</div>
		</div>
	</div>
</section>

<!-- SOLUTION -->
<section id="solution" class="border-t border-green-800 bg-green-900/40 px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">2. The Solution</div>
		<h2 class="mb-6 text-4xl font-bold text-white">One clear business. No distractions.</h2>
		<div class="mb-12 rounded-2xl border border-green-600 bg-green-800/60 p-6 text-green-100">
			<span class="font-semibold text-green-400">Core focus:</span> Grow Spirulina in open raceway ponds on leased state land.
			Sell biofertilizer pellets and liquid biopesticide to Mauritian smallholders. Everything else is future optionality — not core.
			<a href="/science" class="ml-2 inline-flex items-center gap-1 text-sm font-medium text-green-400 underline underline-offset-2 hover:text-green-300 transition-colors">
				Read the science →
			</a>
		</div>
		<div class="grid gap-8 sm:grid-cols-2">
			<div>
				<h3 class="mb-4 text-lg font-semibold text-white">Why Spirulina?</h3>
				<ul class="space-y-3 text-sm text-green-100">
					{#each [
						'Grows at pH 9–11 — naturally suppresses contamination in open ponds',
						'50+ years of commercial proof in tropical climates (India, Chad, Mexico, Madagascar)',
						'Nutrient inputs from free local poultry manure — $0 raw material cost target from Year 1',
						'State land available via Landscope Digital Land Bank at ~$270/ha/yr'
					] as item}
						<li class="flex gap-3">
							<span class="mt-0.5 shrink-0 text-green-400">✓</span>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3 class="mb-4 text-lg font-semibold text-white">What we sell</h3>
				<div class="space-y-4">
					<div class="rounded-xl border border-green-700 bg-green-800/60 p-4">
						<div class="mb-1 font-semibold text-white">Biofertilizer pellets</div>
						<div class="text-sm text-green-400">$8–15/kg · farmer pays $3–6 after 60% SFWF subsidy</div>
						<div class="mt-2 text-xs text-green-200">Cheaper than imported chemicals. 20–40% yield improvement documented in field trials globally.</div>
					</div>
					<div class="rounded-xl border border-green-700 bg-green-800/60 p-4">
						<div class="mb-1 font-semibold text-white">Liquid biopesticide extract</div>
						<div class="text-sm text-green-400">$15–25/L · organic certification compatible</div>
						<div class="mt-2 text-xs text-green-200">No import disruption risk. Organic compatible. Repeat purchase driven by results.</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- FINANCIALS -->
<section id="financials" class="border-t border-green-800 bg-green-950 px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">4. Financial Projections</div>
		<h2 class="mb-2 text-4xl font-bold text-white">Conservative baseline. Biofertilizer only.</h2>
		<p class="mb-12 text-green-300">No phycocyanin, no IMTA, no carbon credits in the baseline. Assumptions use the lower end of published tropical benchmarks.</p>

		<div class="overflow-x-auto rounded-2xl border border-green-700">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b border-green-700 bg-green-900">
						<th class="px-6 py-4 text-left font-semibold text-green-200"></th>
						<th class="px-6 py-4 text-right font-semibold text-green-200">Year 1<br/><span class="text-xs font-normal text-green-400">Pilot · 1–2 ha</span></th>
						<th class="px-6 py-4 text-right font-semibold text-green-200">Year 2<br/><span class="text-xs font-normal text-green-400">Growth · 5 ha</span></th>
						<th class="px-6 py-4 text-right font-semibold text-green-200">Year 3<br/><span class="text-xs font-normal text-green-400">Scale · 10 ha</span></th>
					</tr>
				</thead>
				<tbody class="divide-y divide-green-800 text-green-100">
					{#each [
						{ label: 'Biofertilizer pellets', y1: '$36,000', y2: '$75,000', y3: '$130,000' },
						{ label: 'Liquid biopesticide', y1: '$6,000', y2: '$15,000', y3: '$30,000' },
						{ label: 'Consultancy & training', y1: '$5,000', y2: '$10,000', y3: '$15,000' },
					] as row}
						<tr class="hover:bg-green-900/50 transition-colors">
							<td class="px-6 py-3">{row.label}</td>
							<td class="px-6 py-3 text-right">{row.y1}</td>
							<td class="px-6 py-3 text-right">{row.y2}</td>
							<td class="px-6 py-3 text-right">{row.y3}</td>
						</tr>
					{/each}
					<tr class="bg-green-900 font-semibold text-white">
						<td class="px-6 py-4">Total Revenue</td>
						<td class="px-6 py-4 text-right">$47,000</td>
						<td class="px-6 py-4 text-right">$100,000</td>
						<td class="px-6 py-4 text-right">$175,000</td>
					</tr>
					<tr class="text-green-300">
						<td class="px-6 py-3">Total Operating Costs</td>
						<td class="px-6 py-3 text-right">$42,000</td>
						<td class="px-6 py-3 text-right">$67,000</td>
						<td class="px-6 py-3 text-right">$102,000</td>
					</tr>
					<tr class="border-t border-green-700 bg-green-800/60 font-bold text-green-400">
						<td class="px-6 py-4">EBITDA</td>
						<td class="px-6 py-4 text-right">$5,000</td>
						<td class="px-6 py-4 text-right">$33,000</td>
						<td class="px-6 py-4 text-right">$73,000</td>
					</tr>
					<tr class="text-green-400">
						<td class="px-6 py-3 text-sm">EBITDA Margin</td>
						<td class="px-6 py-3 text-right text-sm">11%</td>
						<td class="px-6 py-3 text-right text-sm">33%</td>
						<td class="px-6 py-3 text-right text-sm">42%</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- UPSIDE -->
		<div class="mt-10">
			<h3 class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">Upside not in baseline</h3>
			<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{#each [
					{ label: 'Phycocyanin pigment', when: 'Year 2–3', revenue: '$40K–120K/yr', note: 'FDA blue dye ban end-2026' },
					{ label: 'Supplement powder', when: 'Year 2', revenue: '$15K–50K/yr', note: 'Residue after C-PC extraction' },
					{ label: 'Madagascar export', when: 'Year 3', revenue: '$25K–80K/yr', note: 'PROBIOMAD partnership' },
					{ label: 'Carbon credits', when: 'Year 3–4', revenue: '$20K–80K/yr', note: 'Verra / Gold Standard' },
				] as item}
					<div class="rounded-xl border border-green-700 bg-green-800/50 p-4">
						<div class="mb-1 text-sm font-semibold text-white">{item.label}</div>
						<div class="mb-1 text-xs text-green-400">{item.revenue}</div>
						<div class="text-xs text-green-300">{item.when} · {item.note}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- MILESTONES -->
<section id="milestones" class="border-t border-green-800 bg-green-900/40 px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">5. Milestones</div>
		<h2 class="mb-2 text-4xl font-bold text-white">Binary pass/fail proof points.</h2>
		<p class="mb-12 text-green-300">Stage 2 funding is only requested once Milestones 1–7 are achieved.</p>

		<div class="relative">
			<div class="absolute left-5 top-0 h-full w-px bg-green-700 sm:left-7"></div>
			<div class="space-y-6">
				{#each [
					{ n: '1', when: 'Month 1–3', title: 'Land secured', proof: 'Signed lease from Landscope or RBSEB.' },
					{ n: '2', when: 'Month 1–3', title: 'Nutrient supply confirmed', proof: 'Signed LOI with 2+ poultry farms for manure.' },
					{ n: '3', when: 'Month 2–4', title: 'Permits & water rights', proof: 'WRU water use permit issued. EIA filed.' },
					{ n: '4', when: 'Month 6–8', title: 'First pond operational', proof: '500 m² pond filled, paddlewheel running, first culture growing.' },
					{ n: '5', when: 'Month 8–10', title: 'Stable yield achieved', proof: '3 consecutive weeks at ≥15 g/m²/day — logged with dated weights.' },
					{ n: '6', when: 'Month 10–12', title: 'First paying customers', proof: '3 farmers making repeat purchases (not trial samples).' },
					{ n: '7', when: 'Month 12–14', title: 'First repeat orders', proof: 'Same 3+ farmers reorder without prompting.' },
					{ n: '→', when: 'Month 14–18', title: 'Stage 2 raise triggered', proof: 'Raise $200K–300K to scale to 5–10 ha.', highlight: true },
				] as m}
					<div class="relative flex gap-6 pl-14 sm:pl-20">
						<div class="absolute left-0 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border {m.highlight ? 'border-green-400 bg-green-500 text-white font-bold' : 'border-green-600 bg-green-800 text-green-300 font-semibold'} text-sm sm:h-14 sm:w-14">
							{m.n}
						</div>
						<div class="pb-2">
							<div class="mb-0.5 text-xs font-medium text-green-400">{m.when}</div>
							<div class="font-semibold {m.highlight ? 'text-green-400' : 'text-white'}">{m.title}</div>
							<div class="text-sm text-green-200">{m.proof}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- INVEST -->
<section id="invest" class="border-t border-green-800 bg-green-950 px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">7. Funding Ask</div>
		<h2 class="mb-2 text-4xl font-bold text-white">$150,000 Stage 1.</h2>
		<p class="mb-12 max-w-2xl text-green-300">The goal is not Year 1 revenue — it is to generate the proof points that justify Stage 2. All projections are based on published benchmarks from comparable tropical operations, not our own data.</p>

		<div class="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each [
				{ item: 'Pond construction (2 × 500 m²)', budget: '$30,000', note: 'HDPE lining, paddlewheels, CO₂ injection' },
				{ item: 'Harvest equipment', budget: '$18,000', note: 'Vibrating drum filter + solar drying + pellet press' },
				{ item: 'Working capital (12 mo)', budget: '$28,000', note: '1.5 FTE, nutrients, utilities, transport' },
				{ item: 'Water recycling system', budget: '$8,000', note: 'Closed-loop — critical for WRU permit' },
				{ item: 'Lab & QC equipment', budget: '$8,000', note: 'Daily contamination checks — non-negotiable' },
				{ item: 'Regulatory & registration', budget: '$8,000', note: 'FAREI, EIA, WRU, legal' },
				{ item: 'Marketing & first customers', budget: '$10,000', note: 'Field demos, co-op, SFWF registration' },
				{ item: 'Contingency (20%)', budget: '$15,000', note: 'Equipment inflation, regulatory delays' },
				{ item: 'Stage 1.5 bridge reserve', budget: '$25,000', note: 'If regulatory takes longer than planned' },
			] as row}
				<div class="rounded-xl border border-green-700 bg-green-800/50 p-4">
					<div class="mb-1 flex items-start justify-between gap-2">
						<span class="text-sm font-medium text-white">{row.item}</span>
						<span class="shrink-0 text-sm font-bold text-green-400">{row.budget}</span>
					</div>
					<div class="text-xs text-green-300">{row.note}</div>
				</div>
			{/each}
		</div>

		<div class="rounded-2xl border border-green-600 bg-green-800/60 p-8">
			<div class="mb-6 flex flex-wrap items-center justify-between gap-4">
				<div>
					<div class="text-3xl font-extrabold text-white">$150,000</div>
					<div class="text-sm text-green-400">Total Stage 1 ask</div>
				</div>
				<div class="text-right">
					<div class="text-lg font-semibold text-green-200">Stage 2: $200K–300K</div>
					<div class="text-xs text-green-400">Only after Milestones 1–7 are achieved</div>
				</div>
			</div>
			<p class="mb-6 text-sm text-green-200">
				Stage 2 funds scale to 5–10 ha, phycocyanin extraction unit, SFWF distribution expansion, and first Madagascar export steps.
				Investors in Stage 1 will have full visibility of milestone achievement before Stage 2 is initiated.
			</p>
			<a
				href="/contact"
				class="inline-block rounded-full bg-green-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-green-400 transition-colors"
			>
				Get in touch →
			</a>
		</div>
	</div>
</section>

<!-- WHY NOW -->
<section class="border-t border-green-800 bg-green-900/40 px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">10. Why Now</div>
		<h2 class="mb-12 text-4xl font-bold text-white">Three reasons converging in 2026.</h2>
		<div class="grid gap-6 sm:grid-cols-3">
			{#each [
				{
					label: 'Structural (always true)',
					title: '100:1 import dependency',
					body: 'Mauritius has never produced its own fertilizer raw materials. 25% food self-sufficiency. Government already subsidising bio-inputs at 60%. These facts exist regardless of any crisis.'
				},
				{
					label: 'Crisis acceleration (now)',
					title: 'Hormuz closure +35%',
					body: 'Strait of Hormuz closure pushed fertilizer prices +35%. Even MCFI (local blender) is exposed — its raw inputs use the same disrupted routes. Government pressure for local solutions has never been higher.'
				},
				{
					label: 'FDA trigger (end-2026)',
					title: 'Synthetic blue dye ban',
					body: "FDA phasing out FD&C Blue 1 & 2. Spirulina phycocyanin is the only approved natural substitute. This Year 2–3 revenue opportunity doesn't exist for any competitor without an algae operation already running."
				}
			] as card}
				<div class="rounded-2xl border border-green-700 bg-green-800/60 p-6">
					<div class="mb-2 text-xs font-semibold uppercase tracking-wide text-green-400">{card.label}</div>
					<h3 class="mb-3 text-lg font-bold text-white">{card.title}</h3>
					<p class="text-sm leading-relaxed text-green-100">{card.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FOOTER -->
<footer class="border-t border-green-800 bg-green-950 px-6 py-10 text-center text-xs text-green-400">
	<div class="mx-auto max-w-5xl">
		<div class="mb-2 font-semibold text-green-300">GreenAlgae Mauritius</div>
		Confidential Investor Document · 2026 · Financial projections are targets based on published benchmarks, not audited forecasts.
	</div>
</footer>
