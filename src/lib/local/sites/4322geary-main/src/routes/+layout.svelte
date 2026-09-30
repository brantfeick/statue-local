<script lang="ts">
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
    background-color: #f5f6f8;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    color: #1a2740;
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  :global(a) {
    color: inherit;
    text-decoration: none;
  }
</style>
