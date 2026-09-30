<script>
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import { siteConfig } from '$lib/site.config.js';

	const interiorImages = [
		{ src: '/assets/page-2.png', alt: 'Modern Conference Room' },
		{ src: '/assets/page-2.png', alt: 'Open Floor Plan' },
		{ src: '/assets/page-2.png', alt: 'Natural Lighting' },
		{ src: '/assets/page-2.png', alt: 'Flexible Workspace' },
		{ src: '/assets/page-2.png', alt: 'Professional Setting' },
		{ src: '/assets/page-2.png', alt: 'Office Interior' }
	];
</script>

<svelte:head>
	<title>Gallery | {siteConfig.site.name}</title>
	<meta name="description" content="View interior photos of the office space at 260 Kearny" />
</svelte:head>

<div class="gallery-page">
	<section class="page-header">
		<div class="header-content">
			<h1>Interior Gallery</h1>
			<p>Explore the premium office spaces at 260 Kearny Street</p>
		</div>
	</section>

	<ImageGallery title="Interior Spaces" images={interiorImages} />

	<ContactCTA />
</div>

<style>
	.page-header {
		background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
		color: white;
		padding: 3rem 2rem;
		text-align: center;
	}

	.header-content {
		max-width: 1200px;
		margin: 0 auto;
	}

	.header-content h1 {
		margin: 0 0 0.5rem 0;
		font-size: 2.5rem;
	}

	.header-content p {
		margin: 0;
		color: #cbd5e1;
		font-size: 1.125rem;
	}

	@media (max-width: 768px) {
		.header-content h1 {
			font-size: 2rem;
		}
	}
</style>
