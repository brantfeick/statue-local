<script>
	import PropertyHeader from '$lib/components/PropertyHeader.svelte';
	import Features from '$lib/components/Features.svelte';
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import { siteConfig } from '$lib/site.config.js';

	const { data } = $props();
</script>

<svelte:head>
	<title>{siteConfig.seo.defaultTitle}</title>
	<meta name="description" content={siteConfig.seo.defaultDescription} />
	<meta property="og:image" content={siteConfig.seo.ogImage} />
	<meta property="og:title" content={siteConfig.seo.defaultTitle} />
	<meta property="og:description" content={siteConfig.seo.defaultDescription} />
	<meta name="twitter:card" content={siteConfig.seo.twitterCard} />
</svelte:head>

<div class="homepage">
	<PropertyHeader
		title="Office Space For Lease"
		subtitle="260 Kearny Street, San Francisco"
		size="1,500 +/- Sq.Ft."
		price="$3.00 PSF/YR"
		image="/assets/page-1.png"
	/>

	<Features
		title="Premium Features & Amenities"
		features={[
			'Operable Windows',
			'Conference Room',
			'Flexible Lease Terms',
			'Bar/Restaurant Onsite',
			'Modern Lighting',
			'Move-in Ready',
			'Excellent Natural Light',
			'Professional Environment'
		]}
	/>

	<section class="availability-section">
		<div class="availability-content">
			<h2>Available Spaces</h2>
			<div class="spaces-grid">
				<div class="space-card">
					<div class="space-level">4th Floor</div>
					<div class="space-size">1,500 +/- RSM</div>
					<div class="space-status">Available Now</div>
					<div class="space-terms">Flexible Terms</div>
					<div class="space-rate">$3.00 PSF/YR</div>
				</div>
				<div class="space-card">
					<div class="space-level">3rd Floor</div>
					<div class="space-size">1,500 +/- RSM</div>
					<div class="space-status">Available Now</div>
					<div class="space-terms">Flexible Terms</div>
					<div class="space-rate">$3.00 PSF/YR</div>
				</div>
			</div>
		</div>
	</section>

	<ContactCTA />
</div>

<style>
	.availability-section {
		padding: 4rem 2rem;
		background-color: white;
	}

	.availability-content {
		max-width: 1200px;
		margin: 0 auto;
	}

	.availability-content h2 {
		margin: 0 0 3rem 0;
		font-size: 2rem;
		color: #1e293b;
	}

	.spaces-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.space-card {
		padding: 2rem;
		border: 2px solid #e2e8f0;
		border-radius: 0.5rem;
		transition: all 0.3s ease;
		background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
	}

	.space-card:hover {
		border-color: #fbbf24;
		box-shadow: 0 8px 24px rgba(251, 191, 36, 0.15);
		transform: translateY(-4px);
	}

	.space-level {
		font-size: 1.5rem;
		font-weight: 700;
		color: #1e3a8a;
		margin-bottom: 0.5rem;
	}

	.space-size {
		font-size: 1rem;
		color: #64748b;
		margin-bottom: 1rem;
	}

	.space-status {
		display: inline-block;
		background-color: #dcfce7;
		color: #166534;
		padding: 0.25rem 0.75rem;
		border-radius: 9999px;
		font-size: 0.875rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.space-terms {
		font-size: 0.875rem;
		color: #475569;
		margin-bottom: 1rem;
	}

	.space-rate {
		font-size: 1.25rem;
		font-weight: 700;
		color: #fbbf24;
	}

	@media (max-width: 768px) {
		.availability-section {
			padding: 2rem 1rem;
		}

		.spaces-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
