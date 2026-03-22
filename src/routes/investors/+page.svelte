<svelte:head>
	<title>Investors — GreenAlgae Mauritius</title>
	<meta name="description" content="GreenAlgae Mauritius seed investor deck 2026. $150K Stage 1 raise. Spirulina biofertilizer for Mauritian smallholders." />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<script lang="ts">
	import Nav from '$lib/Nav.svelte';
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
			$16M in annual fertilizer imports vs. $156K exported. Zero domestic raw material production. 12,000+ smallholder farmers fully exposed to global supply shocks.
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
