<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-green-500 focus:px-4 focus:py-2 focus:font-semibold focus:text-white focus:shadow-lg"
>
	Skip to main content
</a>

<div id="main-content" tabindex="-1">
	{@render children()}
</div>
