<svelte:head>
	<title>Investors — GreenAlgae Mauritius</title>
	<meta name="description" content="GreenAlgae Mauritius seed investor deck 2026. $150K Stage 1 raise. Spirulina biofertilizer for Mauritian smallholders." />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<script lang="ts">
	import Nav from '$lib/Nav.svelte';

	const portfolioPhases = [
		{
			label: 'Phase 1 — Launch now',
			dotClass: 'bg-green-500',
			labelClass: 'text-green-400',
			cardBorder: 'border-green-700',
			badgeClass: 'bg-green-800 text-green-300',
			products: [
				{
					id: 'A', name: 'Spirulina Biofertilizer Pellets', category: 'Agriculture',
					price: '$8–15/kg retail · Rs 140–275/kg after SFWF subsidy',
					margin: '40–60%', capex: 'None — base equipment budgeted',
					scores: { profitability: 3, complexity: 2, readiness: 5, scalability: 5 },
					strategic: 'Core product — the reason to build the ponds. All other products are add-ons.',
					risk: 'Farmer adoption takes time. SFWF product registration needed before first sale.',
				},
				{
					id: 'B', name: 'Liquid Biopesticide Extract', category: 'Agriculture',
					price: '$15–25/L (1L dilutes to treat ~0.1 ha)',
					margin: '70–80%', capex: '$2,000–5,000 — mixing tank, HDPE bottles, labelling',
					scores: { profitability: 4, complexity: 1, readiness: 5, scalability: 4 },
					strategic: 'Highest margin product. Lowest complexity. Same biomass input as pellets — cold-water extraction before pelleting.',
					risk: 'Shelf life 3–6 months. Cold chain preferred for distribution.',
				},
				{
					id: 'E', name: 'Chicken Manure Pellets', category: 'Agriculture',
					price: '$8–12/kg wholesale · Rs 15–25/kg retail',
					margin: '60–80%', capex: '$2,000–5,000 — covered composting area, manure handling',
					scores: { profitability: 4, complexity: 1, readiness: 5, scalability: 5 },
					strategic: 'Easiest product to launch. Same pellet press as Spirulina. Can generate revenue before ponds are fully operational. Farmers already understand it.',
					risk: 'Antibiotic residues from broiler farms — test each batch. Odour management required near residential areas.',
				},
			],
		},
		{
			label: 'Phase 2 — Year 2–3 (plan now)',
			dotClass: 'bg-yellow-500',
			labelClass: 'text-yellow-400',
			cardBorder: 'border-yellow-800',
			badgeClass: 'bg-yellow-900 text-yellow-300',
			products: [
				{
					id: 'C', name: 'Phycocyanin (C-PC) — Food-Grade Blue Pigment', category: 'Food Ingredient / Nutraceutical',
					price: '$500–2,000/kg food-grade',
					margin: '2–8× at food-grade pricing', capex: '$20,000–50,000 — centrifuge, cold mixing tank, spray dryer, spectrophotometer',
					scores: { profitability: 5, complexity: 3, readiness: 3, scalability: 4 },
					strategic: 'FDA synthetic blue dye ban (end-2026) creates urgent EU/US buyer demand. Same biomass — no new ponds. 50–200× more value per kg than biofertilizer.',
					risk: 'Heavy metal testing mandatory if using fish/manure nutrient inputs. Buyer requires Certificate of Analysis. Inconsistent batches lose customers.',
				},
				{
					id: 'D', name: 'Spirulina Supplement Powder', category: 'Nutraceutical / Food',
					price: '$15–100/kg depending on grade and certification',
					margin: '30–85%', capex: 'None — same equipment as phycocyanin line',
					scores: { profitability: 3, complexity: 2, readiness: 3, scalability: 5 },
					strategic: 'Residue after phycocyanin extraction — still 55–65% protein. Zero extra cultivation cost. "Grown in Mauritius" story supports premium positioning.',
					risk: 'Market crowded with low-cost Chinese Spirulina. Certification and branding required to command premium.',
				},
				{
					id: 'F', name: 'Fish Hydrolysate Liquid Fertilizer', category: 'Agriculture / Biostimulant',
					price: '$15–40/L retail · $8–15/L wholesale',
					margin: '60–80%', capex: '$15,000–30,000 — grinder, heated hydrolysis tank, filter press, bottling',
					scores: { profitability: 4, complexity: 3, readiness: 3, scalability: 3 },
					strategic: 'PTM tuna processing waste → premium biostimulant. Waste is free or PTM pays disposal fee. Rich in amino acids and peptides beyond NPK alone.',
					risk: 'PTM biogas agreement may limit waste availability. Mercury testing required per batch for food-grade use.',
				},
			],
		},
		{
			label: 'Phase 3 — Year 4+ (defer)',
			dotClass: 'bg-red-600',
			labelClass: 'text-red-400',
			cardBorder: 'border-red-900',
			badgeClass: 'bg-red-950 text-red-400',
			products: [
				{
					id: 'G', name: 'Carbon Credits', category: 'Environmental / Financial',
					price: '$12–18/tonne CO₂ (voluntary market)',
					margin: 'Passive income once certified', capex: '$25,000 one-time certification + $5,000–10,000/yr verification',
					scores: { profitability: 3, complexity: 4, readiness: 2, scalability: 4 },
					strategic: 'Treat as bonus revenue, not core business. Certification takes 12–24 months — begin process at Stage 2. Do not raise capital on the basis of carbon revenue.',
					risk: 'Verra methodology for microalgae still evolving. Carbon price volatility. Long lead time.',
				},
				{
					id: 'H', name: 'Sea Cucumber (Béche-de-mer)', category: 'IMTA Aquaculture',
					price: '$40–200/kg dried (10:1 fresh-to-dry ratio)',
					margin: '80–95%', capex: '$5,000–15,000 — lagoonal net pen infrastructure',
					scores: { profitability: 5, complexity: 3, readiness: 2, scalability: 3 },
					strategic: 'Near-zero feed cost — fed on algae pond effluent and natural biofilm. Native H. scabra species. Export to China/HK/Singapore. Requires 10+ ha stable first.',
					risk: 'Lagoonal permit separate from land permit. 18–24 months to harvest size. Cyclone risk to sea-pens.',
				},
				{
					id: 'I', name: 'Whiteleg Shrimp (Fresh / Frozen)', category: 'IMTA Aquaculture',
					price: '$12–18/kg local premium · $8–12/kg export',
					margin: '50–70%', capex: '$10,000–20,000 — IMTA pond adaptation, aeration upgrade, harvest net',
					scores: { profitability: 4, complexity: 4, readiness: 2, scalability: 4 },
					strategic: 'Algae bloom covers ~25% of shrimp feed. Shrimp effluent returns as nutrient input, closing the loop. Sell to Mauritius hotels and Réunion export. Year 4+ only.',
					risk: 'Disease risk (EMS, EHP) is primary global shrimp risk. SPF broodstock essential. Aquaculture permit required for non-native L. vannamei.',
				},
			],
		},
	];
</script>

<Nav activePage="investors" />

<!-- HERO -->
<section class="relative overflow-hidden bg-green-950 px-6 pb-20 pt-40">
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-800/30 via-green-950 to-green-950"></div>
	<div class="relative z-10 mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">Seed Investor Deck · 2026</div>
		<h1 class="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl">
			$150K to prove<br /><span class="text-green-400">local fertilizer works.</span>
		</h1>
		<p class="mb-10 max-w-3xl text-lg text-green-100">
			GreenAlgae Mauritius is raising $150,000 to fund a pilot Spirulina cultivation operation.
			The goal is not Year 1 revenue — it is to generate the proof points that justify a $200K–300K Stage 2 raise.
			All projections are based on published benchmarks from comparable tropical operations.
		</p>
		<!-- Key stats -->
		<div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
			{#each [
				{ value: '$47K', label: 'Year 1 Revenue' },
				{ value: '$175K', label: 'Year 3 Revenue' },
				{ value: '18–24 mo', label: 'Breakeven' },
				{ value: '42%', label: 'EBITDA margin Y3' },
			] as stat}
				<div class="rounded-2xl border border-green-700 bg-green-800/50 px-4 py-5 text-center">
					<div class="text-2xl font-extrabold text-green-400">{stat.value}</div>
					<div class="text-xs font-medium text-green-300">{stat.label}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- THE OPPORTUNITY -->
<section class="border-t border-green-800 bg-green-950 px-6 py-20">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">The opportunity</div>
		<h2 class="mb-6 text-4xl font-bold text-white">Mauritius imports 100× more fertilizer than it exports.</h2>
		<p class="mb-10 max-w-3xl text-lg text-green-100">
			Rs 740M in annual fertilizer imports vs. Rs 7.2M exported. Zero domestic raw material production. 12,000+ smallholder farmers fully exposed to global supply shocks.
			The government already subsidises 60% of bio-input costs via SFWF — the demand channel exists.
		</p>
		<div class="grid gap-6 sm:grid-cols-3">
			{#each [
				{ label: 'Structural (always true)', title: '100:1 import dependency', body: 'No domestic fertilizer raw materials. 25% food self-sufficiency. SFWF subsidises 60% of bio-input cost. These facts exist regardless of any crisis.' },
				{ label: 'Crisis acceleration (now)', title: 'Hormuz closure +35%', body: 'Strait of Hormuz closure pushed fertilizer prices +35%. Even local blender MCFI is exposed. Government pressure for local solutions has never been higher.' },
				{ label: 'FDA trigger (end-2026)', title: 'Synthetic blue dye ban', body: "FDA phasing out FD&C Blue 1 & 2. Spirulina phycocyanin is the only approved natural substitute — a Year 2–3 upside unavailable to any competitor without algae operations running." },
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

<!-- FINANCIALS -->
<section class="border-t border-green-800 bg-green-900/40 px-6 py-20">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">Financial projections</div>
		<h2 class="mb-2 text-4xl font-bold text-white">Conservative baseline. Biofertilizer only.</h2>
		<p class="mb-10 text-green-300">No phycocyanin, no IMTA, no carbon credits in the baseline. Assumptions use the lower end of published tropical benchmarks.</p>

		<div class="overflow-x-auto rounded-2xl border border-green-700">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b border-green-700 bg-green-900">
						<th class="px-6 py-4 text-left font-semibold text-green-200"></th>
						<th class="px-6 py-4 text-right font-semibold text-green-200">Year 1<br /><span class="text-xs font-normal text-green-400">Pilot · 1–2 ha</span></th>
						<th class="px-6 py-4 text-right font-semibold text-green-200">Year 2<br /><span class="text-xs font-normal text-green-400">Growth · 5 ha</span></th>
						<th class="px-6 py-4 text-right font-semibold text-green-200">Year 3<br /><span class="text-xs font-normal text-green-400">Scale · 10 ha</span></th>
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

		<div class="mt-8">
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

<!-- PRODUCT PORTFOLIO -->
<section class="border-t border-green-800 bg-green-950 px-6 py-20">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">Product portfolio</div>
		<h2 class="mb-2 text-4xl font-bold text-white">Nine products. Three launch phases.</h2>
		<p class="mb-4 max-w-3xl text-lg text-green-100">
			The baseline projections above cover biofertilizer and biopesticide only. Every product below is producible from the same ponds and infrastructure — scored on profitability, production complexity, launch readiness, and scalability.
		</p>
		<p class="mb-10 text-sm text-green-400">Scores: ●●●●● = strong · ○ = weak. Complexity: more dots = more complex.</p>

		{#each portfolioPhases as phase}
			<div class="mb-12">
				<div class="mb-4 flex items-center gap-3">
					<span class="h-2.5 w-2.5 rounded-full {phase.dotClass}"></span>
					<h3 class="text-sm font-bold uppercase tracking-widest {phase.labelClass}">{phase.label}</h3>
				</div>
				<div class="grid gap-4 sm:grid-cols-3">
					{#each phase.products as p}
						<div class="rounded-2xl border {phase.cardBorder} bg-green-900/40 p-5 flex flex-col gap-3">
							<div>
								<div class="mb-1 flex items-center gap-2">
									<span class="rounded px-1.5 py-0.5 text-xs font-bold {phase.badgeClass}">{p.id}</span>
									<span class="text-xs text-green-400">{p.category}</span>
								</div>
								<h4 class="font-bold text-white leading-snug">{p.name}</h4>
							</div>

							<div class="space-y-1 rounded-xl border border-green-800 bg-green-950/60 px-3 py-2.5 text-xs">
								<div class="flex justify-between gap-2">
									<span class="shrink-0 text-green-500">Price</span>
									<span class="text-right text-green-100">{p.price}</span>
								</div>
								<div class="flex justify-between gap-2">
									<span class="shrink-0 text-green-500">Margin</span>
									<span class="text-right text-green-100">{p.margin}</span>
								</div>
								<div class="flex justify-between gap-2">
									<span class="shrink-0 text-green-500">Add'l capex</span>
									<span class="text-right text-green-100">{p.capex}</span>
								</div>
							</div>

							<div class="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
								{#each [
									{ label: 'Profitability', score: p.scores.profitability },
									{ label: 'Complexity', score: p.scores.complexity },
									{ label: 'Readiness', score: p.scores.readiness },
									{ label: 'Scalability', score: p.scores.scalability },
								] as s}
									<div>
										<div class="text-green-500">{s.label}</div>
										<div class="font-mono tracking-tight text-green-300">{'●'.repeat(s.score)}{'○'.repeat(5 - s.score)}</div>
									</div>
								{/each}
							</div>

							<div class="text-xs leading-relaxed text-green-200">
								<span class="font-semibold text-green-400">Strategy: </span>{p.strategic}
							</div>
							<div class="text-xs leading-relaxed text-red-300/80">
								<span class="font-semibold text-red-400">Risk: </span>{p.risk}
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- MILESTONES -->
<section class="border-t border-green-800 bg-green-950 px-6 py-20">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">Milestones</div>
		<h2 class="mb-2 text-4xl font-bold text-white">Binary pass/fail proof points.</h2>
		<p class="mb-12 text-green-300">Stage 2 funding is only requested once Milestones 1–7 are achieved.</p>
		<div class="relative">
			<div class="absolute left-5 top-0 h-full w-px bg-green-700 sm:left-7"></div>
			<div class="space-y-6">
				{#each [
					{ n: '1', when: 'Month 1–3', title: 'Land secured', proof: 'Signed lease from Landscope or RBSEB.' },
					{ n: '2', when: 'Month 1–3', title: 'Nutrient supply confirmed', proof: 'Signed LOI with 2+ poultry farms for manure.' },
					{ n: '3', when: 'Month 2–4', title: 'Permits & water rights', proof: 'WRU water use permit issued. EIA filed.' },
					{ n: '4', when: 'Month 6–8', title: 'First pond operational', proof: '500 m² pond filled, paddlewheel running, first Spirulina culture growing.' },
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

<!-- FUNDING ASK -->
<section class="border-t border-green-800 bg-green-900/40 px-6 py-20">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">Funding ask</div>
		<h2 class="mb-2 text-4xl font-bold text-white">$150,000 Stage 1.</h2>
		<p class="mb-10 max-w-2xl text-green-300">Stage 1 funds the pilot only. The goal is proof of concept, not profit.</p>
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
				Stage 2 funds scale to 5–10 ha, phycocyanin extraction unit, SFWF distribution expansion, and Madagascar export.
				Investors in Stage 1 will have full visibility of milestone achievement before Stage 2 is initiated.
			</p>
			<a href="/contact?from=investor" class="inline-block rounded-full bg-green-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-green-400 transition-colors">
				Talk to us →
			</a>
		</div>
	</div>
</section>

<!-- HONEST NOTE -->
<section class="border-t border-green-800 bg-green-950 px-6 py-16">
	<div class="mx-auto max-w-3xl rounded-2xl border border-green-700 bg-green-800/40 p-8">
		<div class="mb-2 text-sm font-semibold uppercase tracking-widest text-green-400">Honest note</div>
		<p class="text-green-100 leading-relaxed">
			We do not yet have pilot data from Mauritius. The $150K Stage 1 raise exists precisely to generate this proof.
			Financial projections are based on published benchmarks from comparable tropical operations — not our own data.
			We treat them as targets, not guarantees. Stage 2 funding is only raised after the milestones above are documented and verified.
		</p>
	</div>
</section>

<!-- FOOTER -->
<footer class="border-t border-green-800 bg-green-950 px-6 py-10 text-center text-xs text-green-400">
	<div class="mx-auto max-w-5xl">
		<div class="mb-2 font-semibold text-green-300">GreenAlgae Mauritius</div>
		Confidential Investor Document · 2026 · Financial projections are targets based on published benchmarks, not audited forecasts.
	</div>
</footer>
