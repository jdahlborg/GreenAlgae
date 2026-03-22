<script lang="ts">
	let { activePage = '' }: { activePage?: string } = $props();
</script>

<nav class="fixed top-0 z-50 w-full border-b border-green-800 bg-green-950/95 backdrop-blur">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<a href="/" class="text-lg font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
			GreenAlgae<span class="text-green-400"> Mauritius</span>
		</a>
		<div class="hidden items-center gap-8 text-sm font-medium text-green-200 sm:flex">
			<a href="/#problem" class="hover:text-white transition-colors">Problem</a>
			<a href="/#solution" class="hover:text-white transition-colors">Solution</a>
			<a href="/#financials" class="hover:text-white transition-colors">Financials</a>
			<a href="/#milestones" class="hover:text-white transition-colors">Milestones</a>
			<a href="/science" class="transition-colors {activePage === 'science' ? 'text-white' : 'hover:text-white'}">
				The Science
			</a>
			<a href="/contact" class="transition-colors {activePage === 'contact' ? 'text-white' : 'hover:text-white'}">
				Contact
			</a>
			<a href="/#invest" class="rounded-full bg-green-600 px-4 py-1.5 text-white hover:bg-green-500 transition-colors">
				Invest $150K
			</a>
		</div>
	</div>
</nav>
