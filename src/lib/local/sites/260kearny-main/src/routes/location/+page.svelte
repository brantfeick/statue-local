<script>
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import { siteConfig } from '$lib/site.config.js';
</script>

<svelte:head>
	<title>Location | {siteConfig.site.name}</title>
	<meta name="description" content="Location and neighborhood information for 260 Kearny Street in San Francisco" />
</svelte:head>

<div class="location-page">
	<section class="page-header">
		<div class="header-content">
			<h1>Location & Neighborhood</h1>
			<p>Discover why 260 Kearny is the perfect office location</p>
		</div>
	</section>

	<section class="map-section">
		<div class="map-content">
			<div class="map-image">
				<img src="/assets/page-3.png" alt="260 Kearny Location Map" />
			</div>

			<div class="location-info">
				<h2>260 Kearny Street</h2>
				<p class="address">
					{siteConfig.contact.address.street}<br />
					{siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zipCode}
				</p>

				<div class="highlights-grid">
					<div class="highlight">
						<h3>Financial District</h3>
						<p>Located in San Francisco's premier business district</p>
					</div>
					<div class="highlight">
						<h3>Public Transportation</h3>
						<p>Steps away from BART and multiple transit options</p>
					</div>
					<div class="highlight">
						<h3>Walkable Area</h3>
						<p>Surrounded by restaurants, cafes, and retail shops</p>
					</div>
					<div class="highlight">
						<h3>Professional Environment</h3>
						<p>Prime location for corporate and professional offices</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="nearby-section">
		<div class="nearby-content">
			<h2>Nearby Amenities</h2>

			<div class="amenities-grid">
				<div class="amenity-group">
					<h3>Transportation</h3>
					<ul>
						<li>BART Station - 2 blocks</li>
						<li>Muni Bus Lines</li>
						<li>Street Parking Available</li>
						<li>Parking Garages Nearby</li>
					</ul>
				</div>

				<div class="amenity-group">
					<h3>Dining & Beverage</h3>
					<ul>
						<li>Numerous Restaurants</li>
						<li>Coffee Shops</li>
						<li>Casual Dining Options</li>
						<li>Bar & Restaurant Onsite</li>
					</ul>
				</div>

				<div class="amenity-group">
					<h3>Retail & Services</h3>
					<ul>
						<li>Shopping Centers</li>
						<li>Banks & Financial Services</li>
						<li>Office Supplies</li>
						<li>Business Services</li>
					</ul>
				</div>

				<div class="amenity-group">
					<h3>Professional Services</h3>
					<ul>
						<li>Corporate Offices</li>
						<li>Law Firms</li>
						<li>Financial Services</li>
						<li>Consulting Firms</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

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

	.map-section {
		padding: 4rem 2rem;
		background-color: white;
	}

	.map-content {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: start;
	}

	.map-image {
		border-radius: 0.5rem;
		overflow: hidden;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.map-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.location-info h2 {
		margin: 0 0 0.5rem 0;
		font-size: 2rem;
		color: #1e293b;
	}

	.address {
		margin: 0 0 2rem 0;
		color: #64748b;
		font-size: 1rem;
		line-height: 1.6;
	}

	.highlights-grid {
		display: grid;
		gap: 1.5rem;
	}

	.highlight {
		padding: 1.5rem;
		background: #f8fafc;
		border-radius: 0.5rem;
		border-left: 4px solid #fbbf24;
	}

	.highlight h3 {
		margin: 0 0 0.5rem 0;
		color: #1e3a8a;
		font-size: 1rem;
	}

	.highlight p {
		margin: 0;
		color: #64748b;
		font-size: 0.875rem;
	}

	.nearby-section {
		padding: 4rem 2rem;
		background-color: #f8fafc;
	}

	.nearby-content {
		max-width: 1200px;
		margin: 0 auto;
	}

	.nearby-content h2 {
		margin: 0 0 3rem 0;
		font-size: 2rem;
		color: #1e293b;
	}

	.amenities-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.amenity-group {
		background: white;
		padding: 2rem;
		border-radius: 0.5rem;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	}

	.amenity-group h3 {
		margin: 0 0 1rem 0;
		color: #1e3a8a;
		font-size: 1.125rem;
	}

	.amenity-group ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.amenity-group li {
		padding: 0.5rem 0;
		color: #475569;
		border-bottom: 1px solid #e2e8f0;
	}

	.amenity-group li:last-child {
		border-bottom: none;
	}

	@media (max-width: 768px) {
		.map-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.header-content h1 {
			font-size: 2rem;
		}

		.location-info h2 {
			font-size: 1.5rem;
		}
	}
</style>
