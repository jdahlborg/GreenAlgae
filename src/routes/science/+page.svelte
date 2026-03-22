<svelte:head>
	<title>The Science — GreenAlgae Mauritius</title>
	<meta
		name="description"
		content="How Spirulina microalgae is cultivated in open raceway ponds and why it works as a biofertilizer for Mauritian smallholder farmers."
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
	import RacewayPond from '$lib/illustrations/RacewayPond.svelte';
</script>

<Nav activePage="science" />

<!-- HERO -->
<section class="relative overflow-hidden bg-green-950 px-6 pb-24 pt-40">
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-800/30 via-green-950 to-green-950"></div>
	<div class="relative z-10 mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
		<div>
			<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">The Science</div>
			<h1 class="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white">
				Why <em class="not-italic text-green-400">Spirulina</em> works.
			</h1>
			<p class="text-lg text-green-100">
				50+ years of commercial proof. A self-defending culture. Zero imported raw materials.
				Here is the biology and engineering behind GreenAlgae Mauritius.
			</p>
		</div>
		<div class="flex justify-center lg:justify-end">
			<SpirulinaOrganism class="w-44 opacity-90 drop-shadow-2xl sm:w-56 lg:w-72" />
		</div>
	</div>
</section>

<!-- SPIRULINA -->
<section class="border-t border-green-800 bg-green-950 px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">01</div>
		<h2 class="mb-6 text-4xl font-bold text-white">What is Spirulina?</h2>
		<div class="grid gap-12 sm:grid-cols-2">
			<div>
				<p class="mb-4 text-green-100 leading-relaxed">
					<em>Arthrospira platensis</em> — commonly called Spirulina — is a filamentous cyanobacterium
					(blue-green microalgae) that has been harvested as food and fertilizer for centuries. It grows
					naturally in warm, alkaline lakes in Africa, Asia, and Latin America.
				</p>
				<p class="text-green-100 leading-relaxed">
					It is one of the most nutrient-dense organisms on Earth: 60–70% protein by dry weight, rich in
					nitrogen, phosphorus, potassium, and micronutrients — exactly what plants need. When applied to
					soil it releases these nutrients slowly, improving structure and microbial activity.
				</p>
			</div>
			<div class="space-y-4">
				{#each [
					{ label: 'Protein content', value: '60–70%', note: 'By dry weight — higher than soy or meat' },
					{ label: 'Nitrogen (N)', value: '~10%', note: 'Primary macronutrient for plant growth' },
					{ label: 'Phosphorus (P)', value: '~1%', note: 'Root development and energy transfer' },
					{ label: 'Potassium (K)', value: '~1.5%', note: 'Disease resistance and water regulation' },
					{ label: 'Yield improvement', value: '20–40%', note: 'Documented in field trials globally' },
				] as stat}
					<div class="flex items-center justify-between rounded-xl border border-green-700 bg-green-800/50 px-4 py-3">
						<div>
							<div class="text-sm font-medium text-white">{stat.label}</div>
							<div class="text-xs text-green-300">{stat.note}</div>
						</div>
						<div class="text-xl font-bold text-green-400">{stat.value}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- pH DEFENCE -->
<section class="border-t border-green-800 bg-green-900/40 px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">02</div>
		<h2 class="mb-6 text-4xl font-bold text-white">The pH defence — why open ponds work.</h2>
		<p class="mb-10 max-w-3xl text-lg text-green-100">
			The single biggest risk in open-pond algae cultivation is contamination from competing organisms.
			Spirulina solves this with chemistry rather than engineering.
		</p>
		<div class="grid gap-6 sm:grid-cols-3">
			{#each [
				{
					number: 'pH 7',
					label: 'Neutral water',
					description: 'Most microorganisms thrive. Open ponds are highly vulnerable to contamination and culture crashes.',
					color: 'border-red-800 bg-red-900/30',
					textColor: 'text-red-300',
				},
				{
					number: 'pH 9–11',
					label: 'Spirulina\'s range',
					description: 'Highly alkaline conditions that Spirulina thrives in. Most competing organisms cannot survive at this pH — a natural monoculture.',
					color: 'border-green-600 bg-green-800/60',
					textColor: 'text-green-400',
				},
				{
					number: 'pH 14',
					label: 'Maximum alkalinity',
					description: 'Caustic — nothing survives. Spirulina operates far below this, in a sweet spot hostile to competitors but optimal for itself.',
					color: 'border-green-900 bg-green-900/30',
					textColor: 'text-green-400',
				},
			] as item}
				<div class="rounded-2xl border {item.color} p-6">
					<div class="mb-1 text-3xl font-extrabold {item.textColor}">{item.number}</div>
					<div class="mb-3 text-sm font-semibold text-white">{item.label}</div>
					<p class="text-sm leading-relaxed text-green-100">{item.description}</p>
				</div>
			{/each}
		</div>
		<div class="mt-8 rounded-2xl border border-green-700 bg-green-800/50 p-6">
			<p class="text-green-100">
				<span class="font-semibold text-green-400">Why this matters operationally:</span> Unlike most microalgae
				species that require expensive closed photobioreactors to avoid contamination, Spirulina can be grown in
				simple open raceway ponds at low cost. The pH is maintained naturally by the Spirulina's own metabolism,
				and monitored daily with a basic pH meter. This is the decisive reason Spirulina dominates commercial
				open-pond production globally.
			</p>
		</div>
	</div>
</section>

<!-- RACEWAY PONDS -->
<section class="border-t border-green-800 bg-green-950 px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">03</div>
		<h2 class="mb-6 text-4xl font-bold text-white">Open raceway ponds.</h2>
		<p class="mb-10 max-w-3xl text-lg text-green-100">
			A raceway pond is an oval, shallow channel — typically 20–30 cm deep — lined with HDPE membrane
			and circulated by a paddlewheel. It is the industry-standard cultivation system for Spirulina,
			in use commercially since the 1970s.
		</p>

		<!-- Pond diagram -->
		<div class="mb-12 overflow-hidden rounded-2xl border border-green-700 bg-green-900/50 p-4 sm:p-8">
			<RacewayPond />
			<p class="mt-4 text-center text-xs text-green-400">Top-down view — open raceway pond, 500 m²</p>
		</div>

		<div class="grid gap-6 sm:grid-cols-2">
			<div class="space-y-4">
				{#each [
					{
						title: 'HDPE lining',
						body: 'High-density polyethylene membrane seals the pond floor, prevents soil contamination, and enables the closed-loop water recycling that satisfies the Water Resources Unit permit requirements.'
					},
					{
						title: 'Paddlewheel circulation',
						body: 'A slow-moving paddlewheel (typically 20–30 RPM) keeps the culture in constant motion, ensuring even light exposure for all cells and preventing settling. Runs on standard single-phase power.'
					},
					{
						title: 'CO₂ injection',
						body: 'Spirulina requires dissolved carbon dioxide for photosynthesis. Controlled CO₂ injection maintains optimal culture density and accelerates growth. Also helps regulate pH.'
					},
					{
						title: 'Harvest by microsieve',
						body: 'The culture is pumped through a vibrating drum microsieve (35–50 µm mesh) that separates the biomass from the water. Water is returned to the pond — closed loop, minimal waste.'
					},
				] as item}
					<div class="rounded-xl border border-green-700 bg-green-800/50 p-5">
						<div class="mb-2 font-semibold text-white">{item.title}</div>
						<p class="text-sm leading-relaxed text-green-100">{item.body}</p>
					</div>
				{/each}
			</div>
			<div class="space-y-4">
				<div class="rounded-2xl border border-green-700 bg-green-800/50 p-6">
					<h3 class="mb-4 font-semibold text-white">Our pilot specification</h3>
					{#each [
						{ label: 'Number of ponds', value: '2' },
						{ label: 'Pond size', value: '500 m² each' },
						{ label: 'Total cultivation area', value: '0.1 ha (Stage 1)' },
						{ label: 'Target yield', value: '≥15 g/m²/day' },
						{ label: 'Annual yield target', value: '20 t/ha (conservative)' },
						{ label: 'Published benchmark', value: '25 t/ha in comparable tropics' },
						{ label: 'Harvest cycle', value: 'Daily or every 2 days' },
						{ label: 'Water depth', value: '20–25 cm' },
					] as row}
						<div class="flex justify-between border-b border-green-700/50 py-2 text-sm last:border-0">
							<span class="text-green-300">{row.label}</span>
							<span class="font-medium text-white">{row.value}</span>
						</div>
					{/each}
				</div>
				<div class="rounded-xl border border-green-600 bg-green-800/50 p-5">
					<div class="mb-2 text-sm font-semibold text-green-400">Commercial proof</div>
					<p class="text-sm text-green-100">
						Operations at comparable scale and climate are running today in
						<strong class="text-white">India, Chad, Mexico, and Madagascar</strong>.
						The technology is not experimental — our pilot replicates proven systems.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- NUTRIENT CYCLE -->
<section class="border-t border-green-800 bg-green-900/40 px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">04</div>
		<h2 class="mb-6 text-4xl font-bold text-white">Zero-cost nutrient cycle.</h2>
		<p class="mb-10 max-w-3xl text-lg text-green-100">
			Spirulina needs nitrogen, phosphorus, and potassium to grow. Rather than importing synthetic nutrients,
			we close the loop using waste streams that Mauritian farms are actively trying to dispose of.
		</p>
		<div class="grid gap-6 sm:grid-cols-3">
			{#each [
				{
					source: 'Poultry manure',
					from: 'Local broiler farms',
					why: 'Farms pay for disposal — they want it removed. Year-round supply. Peer-reviewed studies confirm N, P, K uptake by Spirulina from animal waste streams.',
					cost: 'Free',
					timing: 'Primary · Year 1',
				},
				{
					source: 'Alteo filter cake',
					from: 'Mauritian sugar industry',
					why: 'Seasonal by-product of sugar processing. Rich in organic matter and minerals. Available in large quantities on-island.',
					cost: 'Free or minimal',
					timing: 'Seasonal supplement',
				},
				{
					source: 'Rum distillery vinasse',
					from: 'Local rum producers',
					why: 'Organic waste liquid high in potassium. Mauritius has an active rum industry. Another disposal problem we solve.',
					cost: 'Free',
					timing: 'Supplementary',
				},
			] as item}
				<div class="rounded-2xl border border-green-700 bg-green-800/50 p-6">
					<div class="mb-1 text-lg font-bold text-white">{item.source}</div>
					<div class="mb-3 text-xs font-medium text-green-400">{item.from}</div>
					<p class="mb-4 text-sm leading-relaxed text-green-100">{item.why}</p>
					<div class="flex items-center justify-between border-t border-green-700 pt-3 text-xs">
						<span class="font-semibold text-green-400">{item.cost}</span>
						<span class="text-green-300">{item.timing}</span>
					</div>
				</div>
			{/each}
		</div>
		<div class="mt-8 rounded-2xl border border-green-700 bg-green-800/50 p-6">
			<p class="text-green-100">
				<span class="font-semibold text-green-400">Target: $0 nutrient cost from end of Year 1.</span> Commercial
				nutrients are budgeted during the pilot start-up phase only. Once poultry manure agreements are signed
				(Milestone 2), the input cost drops to zero. This is the primary driver of the 42% EBITDA margin at Year 3 scale.
			</p>
		</div>
	</div>
</section>

<!-- FROM POND TO PELLET -->
<section class="border-t border-green-800 bg-green-950 px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">05</div>
		<h2 class="mb-6 text-4xl font-bold text-white">From pond to pellet.</h2>
		<p class="mb-12 max-w-3xl text-lg text-green-100">
			The processing chain is simple, low-energy, and adapted to tropical conditions.
		</p>
		<div class="relative">
			<div class="absolute left-5 top-0 h-full w-px bg-green-700 sm:left-7"></div>
			<div class="space-y-8">
				{#each [
					{
						step: '1',
						title: 'Harvest',
						body: 'Daily or every 2 days, culture is pumped from the pond through a vibrating drum microsieve. Biomass is separated; water returns to the pond.'
					},
					{
						step: '2',
						title: 'Dewatering',
						body: 'Wet biomass (80–90% water) is pressed to reduce moisture. A screw press removes the bulk of remaining water, producing a paste at ~60–70% moisture.'
					},
					{
						step: '3',
						title: 'Solar drying',
						body: 'Paste is spread on solar drying beds — simple, low-cost, and energy-free in Mauritius\'s climate. Dried to <10% moisture. UV exposure also sterilises the product.'
					},
					{
						step: '4',
						title: 'Pelletising',
						body: 'Dried biomass is fed into a pellet press — the same technology used in animal feed production. Output: uniform pellets that are easy to store, transport, and apply.'
					},
					{
						step: '5',
						title: 'QC testing',
						body: 'Each batch is tested for N-P-K content, moisture, and contamination before dispatch. Required for biofertilizer product registration with FAREI / Ministry of Agro-Industry.'
					},
					{
						step: '6',
						title: 'Distribution',
						body: 'Sold direct to farmer co-operatives and registered with the SFWF so farmers can access the 60% subsidy at point of sale.'
					},
				] as s}
					<div class="relative flex gap-6 pl-14 sm:pl-20">
						<div class="absolute left-0 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green-600 bg-green-800 text-sm font-semibold text-green-300 sm:h-14 sm:w-14">
							{s.step}
						</div>
						<div class="pb-2">
							<div class="mb-1 font-semibold text-white">{s.title}</div>
							<p class="text-sm leading-relaxed text-green-200">{s.body}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- FUTURE: PHYCOCYANIN -->
<section class="border-t border-green-800 bg-green-900/40 px-6 py-24">
	<div class="mx-auto max-w-5xl">
		<div class="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">Future upside</div>
		<h2 class="mb-6 text-4xl font-bold text-white">Phycocyanin — the blue pigment opportunity.</h2>
		<p class="mb-10 max-w-3xl text-lg text-green-100">
			Once stable biomass yield is proven, the same Spirulina can be processed for phycocyanin (C-PC) —
			a natural blue pigment worth $500–2,000/kg. This is not in our baseline financial projections,
			but it is a real and validated opportunity.
		</p>
		<div class="grid gap-6 sm:grid-cols-2">
			<div class="rounded-2xl border border-green-700 bg-green-800/50 p-6">
				<h3 class="mb-4 font-semibold text-white">What is phycocyanin?</h3>
				<p class="mb-4 text-sm leading-relaxed text-green-100">
					Phycocyanin is the pigment that gives Spirulina its blue-green colour. It is extracted from
					the biomass after harvest using cold water and filtration — no harsh chemicals required.
					The remaining biomass after extraction is still protein-rich and usable as supplement powder.
				</p>
				<p class="text-sm leading-relaxed text-green-100">
					It is the only natural blue food colouring approved by the FDA, EU, and most global markets.
				</p>
			</div>
			<div class="rounded-2xl border border-green-600 bg-green-800/50 p-6">
				<h3 class="mb-4 font-semibold text-white">Why 2026 creates urgency</h3>
				<p class="mb-4 text-sm leading-relaxed text-green-100">
					The FDA is phasing out synthetic blue dyes FD&C Blue 1 & 2 from food products.
					Spirulina phycocyanin is the <strong class="text-white">only approved natural substitute</strong>.
					Food manufacturers are actively seeking supply now — before the ban takes full effect.
				</p>
				<div class="rounded-xl border border-green-600 bg-green-900/60 p-4">
					<div class="text-sm font-semibold text-green-400">Revenue potential at 10 ha scale</div>
					<div class="text-2xl font-extrabold text-white">$40K–120K/yr</div>
					<div class="text-xs text-green-300">On top of the biofertilizer baseline</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="border-t border-green-800 bg-green-950 px-6 py-24 text-center">
	<div class="mx-auto max-w-2xl">
		<h2 class="mb-4 text-3xl font-bold text-white">The biology is proven. The market is ready.</h2>
		<p class="mb-8 text-green-200">
			What remains is to prove it works on Mauritian soil, with Mauritian farmers — which is exactly what Stage 1 funding achieves.
		</p>
		<div class="flex flex-wrap justify-center gap-4">
			<a href="/#invest" class="rounded-full bg-green-500 px-8 py-3.5 text-base font-semibold text-white hover:bg-green-400 transition-colors">
				See the $150K ask →
			</a>
			<a href="/" class="rounded-full border border-green-600 px-8 py-3.5 text-base font-semibold text-green-200 hover:border-green-400 hover:text-white transition-colors">
				Back to investor deck
			</a>
		</div>
	</div>
</section>
