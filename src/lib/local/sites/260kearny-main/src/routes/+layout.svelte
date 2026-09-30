<script>
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/index.css';

	let { data, children } = $props();
</script>

<Navigation />

<main>
	{@render children()}
</main>

<Footer />

<style>
	:global(body) {
		background-color: #ffffff;
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
		margin: 0;
		padding: 0;
		color: #1e293b;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(main) {
		min-height: calc(100vh - 200px);
	}
</style>
