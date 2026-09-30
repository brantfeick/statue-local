<script>
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/index.css';

	let { data, children } = $props();
</script>

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
		color: #333333;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(a) {
		color: #2196f3;
		text-decoration: none;
	}

	:global(a:hover) {
		text-decoration: underline;
	}
</style>
