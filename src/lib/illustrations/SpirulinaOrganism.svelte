<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();
</script>

<svg
	viewBox="0 0 280 440"
	xmlns="http://www.w3.org/2000/svg"
	class={className}
	aria-hidden="true"
>
	<defs>
		<linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0%" stop-color="#96d49b" />
			<stop offset="45%" stop-color="#4a9e50" />
			<stop offset="100%" stop-color="#245226" />
		</linearGradient>
		<filter id="glow" x="-40%" y="-10%" width="180%" height="120%">
			<feGaussianBlur stdDeviation="5" result="b" />
			<feMerge>
				<feMergeNode in="b" />
				<feMergeNode in="SourceGraphic" />
			</feMerge>
		</filter>
		<filter id="glow-bg" x="-80%" y="-20%" width="260%" height="140%">
			<feGaussianBlur stdDeviation="18" />
		</filter>
	</defs>

	<!-- Ambient glow -->
	<path
		d="M195,35 C195,95 85,95 85,155 C85,215 195,215 195,275 C195,335 85,335 85,395"
		stroke="#4a9e50"
		stroke-width="50"
		fill="none"
		stroke-linecap="round"
		opacity="0.10"
		filter="url(#glow-bg)"
	/>

	<!-- Back of helix (dashed, deep green) -->
	<path
		d="M85,35 C85,95 195,95 195,155 C195,215 85,215 85,275 C85,335 195,335 195,395"
		stroke="#1a3a1c"
		stroke-width="15"
		fill="none"
		stroke-dasharray="20 11"
		stroke-linecap="round"
	/>

	<!-- Front of helix (solid, gradient + glow) -->
	<path
		d="M195,35 C195,95 85,95 85,155 C85,215 195,215 195,275 C195,335 85,335 85,395"
		stroke="url(#hg)"
		stroke-width="20"
		fill="none"
		stroke-linecap="round"
		filter="url(#glow)"
	/>

	<!-- Cell septa at crossing points -->
	<line x1="118" y1="86" x2="162" y2="104" stroke="#3a8040" stroke-width="5" stroke-linecap="round" opacity="0.75" />
	<line x1="118" y1="206" x2="162" y2="224" stroke="#3a8040" stroke-width="5" stroke-linecap="round" opacity="0.75" />
	<line x1="118" y1="326" x2="162" y2="344" stroke="#3a8040" stroke-width="5" stroke-linecap="round" opacity="0.75" />

	<!-- Faint septa at the arc peaks -->
	<line x1="73" y1="147" x2="97" y2="163" stroke="#245226" stroke-width="4" stroke-linecap="round" opacity="0.5" />
	<line x1="183" y1="267" x2="207" y2="283" stroke="#245226" stroke-width="4" stroke-linecap="round" opacity="0.5" />

	<!-- End caps -->
	<circle cx="195" cy="35" r="13" fill="#6dbf74" opacity="0.9" filter="url(#glow)" />
	<circle cx="85" cy="395" r="11" fill="#2e6930" opacity="0.85" />

	<!-- Floating micro-particles -->
	<circle cx="28" cy="90" r="4" fill="#4a9e50" opacity="0.35" />
	<circle cx="252" cy="150" r="5" fill="#3a8040" opacity="0.28" />
	<circle cx="35" cy="240" r="3" fill="#6dbf74" opacity="0.40" />
	<circle cx="248" cy="300" r="4.5" fill="#4a9e50" opacity="0.30" />
	<circle cx="22" cy="360" r="3" fill="#4a9e50" opacity="0.35" />
	<circle cx="258" cy="60" r="2.5" fill="#6dbf74" opacity="0.30" />
	<circle cx="15" cy="180" r="2" fill="#4a9e50" opacity="0.40" />
	<circle cx="265" cy="210" r="3" fill="#3a8040" opacity="0.25" />
</svg>
