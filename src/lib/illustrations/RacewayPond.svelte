<svg
	viewBox="0 0 540 300"
	xmlns="http://www.w3.org/2000/svg"
	aria-label="Top-down diagram of an open raceway pond"
	class="w-full"
>
	<defs>
		<linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0%" stop-color="#3a8040" stop-opacity="0.9" />
			<stop offset="100%" stop-color="#245226" stop-opacity="0.9" />
		</linearGradient>
		<linearGradient id="water2" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0%" stop-color="#2e6930" stop-opacity="0.9" />
			<stop offset="100%" stop-color="#1a3a1c" stop-opacity="0.9" />
		</linearGradient>
		<marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
			<path d="M0,0 L0,6 L8,3 z" fill="#6dbf74" />
		</marker>
		<filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
			<feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#0f2010" flood-opacity="0.5" />
		</filter>
	</defs>

	<!-- Outer pond wall -->
	<rect x="30" y="30" width="480" height="240" rx="120" ry="120" fill="#0f2010" stroke="#4a9e50" stroke-width="3" />

	<!-- Water (two channels) -->
	<!-- Top channel -->
	<path
		d="M150,50 L390,50 Q510,50 510,150 Q510,60 390,60 L150,60 Q50,60 50,150 Q50,60 150,50 Z"
		fill="none"
	/>
	<clipPath id="pond-clip">
		<rect x="30" y="30" width="480" height="240" rx="120" ry="120" />
	</clipPath>

	<!-- Full water fill -->
	<rect x="30" y="30" width="480" height="115" rx="0" fill="url(#water)" clip-path="url(#pond-clip)" />
	<rect x="30" y="155" width="480" height="115" rx="0" fill="url(#water2)" clip-path="url(#pond-clip)" />

	<!-- Center divider -->
	<rect x="120" y="135" width="310" height="30" fill="#0f2010" rx="2" />
	<!-- Divider ends to reinforce left open end -->

	<!-- Paddlewheel (left side) -->
	<g transform="translate(95, 150)">
		<!-- Wheel housing -->
		<circle r="52" fill="#1a3a1c" stroke="#4a9e50" stroke-width="2.5" />
		<!-- Blades -->
		{#each Array(8) as _, i}
			<rect
				x="-5"
				y="-50"
				width="10"
				height="24"
				rx="3"
				fill="#4a9e50"
				transform="rotate({i * 45})"
				opacity="0.85"
			/>
		{/each}
		<!-- Hub -->
		<circle r="10" fill="#245226" stroke="#6dbf74" stroke-width="2" />
		<!-- Label -->
		<text y="70" text-anchor="middle" font-size="11" fill="#96d49b" font-family="Inter, sans-serif" font-weight="600">PADDLEWHEEL</text>
	</g>

	<!-- Flow arrows — top channel (right-flowing) -->
	<line x1="200" y1="92" x2="340" y2="92" stroke="#6dbf74" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrow)" opacity="0.8" />
	<!-- Flow arrows — bottom channel (left-flowing) -->
	<line x1="340" y1="208" x2="200" y2="208" stroke="#6dbf74" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arrow)" opacity="0.8" />

	<!-- CO2 injection point -->
	<g transform="translate(320, 92)">
		<circle r="16" fill="#1a3a1c" stroke="#4a9e50" stroke-width="2" />
		<text text-anchor="middle" y="5" font-size="13" fill="#96d49b" font-family="monospace" font-weight="700">CO₂</text>
		<!-- Bubbles -->
		<circle cx="-28" cy="0" r="3" fill="#4a9e50" opacity="0.5" />
		<circle cx="-38" cy="-6" r="2" fill="#4a9e50" opacity="0.4" />
		<circle cx="-46" cy="4" r="1.5" fill="#4a9e50" opacity="0.3" />
	</g>

	<!-- Harvest point -->
	<g transform="translate(430, 150)">
		<rect x="-28" y="-20" width="56" height="40" rx="6" fill="#1a3a1c" stroke="#6dbf74" stroke-width="2" />
		<text text-anchor="middle" y="-4" font-size="9.5" fill="#96d49b" font-family="Inter, sans-serif" font-weight="600">HARVEST</text>
		<text text-anchor="middle" y="9" font-size="9.5" fill="#96d49b" font-family="Inter, sans-serif" font-weight="600">OUTLET</text>
		<!-- Arrow out -->
		<line x1="28" y1="0" x2="50" y2="0" stroke="#6dbf74" stroke-width="2" marker-end="url(#arrow)" />
	</g>

	<!-- HDPE liner label -->
	<text x="270" y="272" text-anchor="middle" font-size="10" fill="#4a9e50" font-family="Inter, sans-serif">HDPE-lined · 20–25 cm depth · 500 m²</text>

	<!-- Right curve label -->
	<text x="510" y="95" text-anchor="start" font-size="10" fill="#4a9e50" font-family="Inter, sans-serif" transform="rotate(-90, 510, 95)">Return curve</text>
</svg>
