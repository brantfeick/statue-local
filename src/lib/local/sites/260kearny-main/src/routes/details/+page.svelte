<script>
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import { siteConfig } from '$lib/site.config.js';
</script>

<svelte:head>
	<title>Property Details | {siteConfig.site.name}</title>
	<meta name="description" content="Detailed information about the office space at 260 Kearny Street" />
</svelte:head>

<div class="details-page">
	<section class="page-header">
		<div class="header-content">
			<h1>Property Details</h1>
			<p>Complete information about 260 Kearny Street</p>
		</div>
	</section>

	<section class="details-section">
		<div class="details-content">
			<div class="details-grid">
				<div class="detail-card">
					<h3>Building Information</h3>
					<ul>
						<li><strong>Address:</strong> {siteConfig.contact.address.street}</li>
						<li><strong>City:</strong> {siteConfig.contact.address.city}, {siteConfig.contact.address.state}</li>
						<li><strong>Building Type:</strong> Commercial Office</li>
						<li><strong>Year Built:</strong> Historic Commercial Building</li>
					</ul>
				</div>

				<div class="detail-card">
					<h3>Available Spaces</h3>
					<ul>
						<li><strong>4th Floor:</strong> 1,500 +/- Sq.Ft.</li>
						<li><strong>3rd Floor:</strong> 1,500 +/- Sq.Ft.</li>
						<li><strong>Rate:</strong> $3.00 PSF/YR</li>
						<li><strong>Status:</strong> Available Now</li>
					</ul>
				</div>

				<div class="detail-card">
					<h3>Features & Amenities</h3>
					<ul>
						<li>Operable Windows</li>
						<li>Conference Room</li>
						<li>Flexible Lease Terms</li>
						<li>Bar/Restaurant Onsite</li>
						<li>Modern Lighting Systems</li>
						<li>Move-in Ready</li>
					</ul>
				</div>

				<div class="detail-card">
					<h3>Location Benefits</h3>
					<ul>
						<li>Financial District Location</li>
						<li>Excellent Public Transportation</li>
						<li>Walking Distance to BART</li>
						<li>Near Dining & Retail</li>
						<li>Professional Environment</li>
						<li>High Foot Traffic</li>
					</ul>
				</div>

				<div class="detail-card">
					<h3>Lease Terms</h3>
					<ul>
						<li><strong>Rate:</strong> $3.00 PSF/YR Commission</li>
						<li><strong>Term:</strong> Flexible</li>
						<li><strong>Availability:</strong> Immediate</li>
						<li><strong>Build-Out:</strong> Move-in Ready</li>
						<li><strong>Renewal:</strong> Negotiable</li>
					</ul>
				</div>

				<div class="detail-card">
					<h3>Contact & Inquiries</h3>
					<ul>
						<li><strong>Broker:</strong> Jay D. Shaffer</li>
						<li><strong>Company:</strong> Colton Commercial</li>
						<li><strong>Phone:</strong> {siteConfig.contact.phone}</li>
						<li><strong>Email:</strong> {siteConfig.contact.email}</li>
						<li><strong>License:</strong> CA Commercial Real Estate</li>
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

	.details-section {
		padding: 4rem 2rem;
	}

	.details-content {
		max-width: 1200px;
		margin: 0 auto;
	}

	.details-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
	}

	.detail-card {
		padding: 2rem;
		background: #f8fafc;
		border-radius: 0.5rem;
		border: 1px solid #e2e8f0;
		transition: all 0.3s ease;
	}

	.detail-card:hover {
		border-color: #fbbf24;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.detail-card h3 {
		margin: 0 0 1rem 0;
		color: #1e3a8a;
		font-size: 1.25rem;
	}

	.detail-card ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.detail-card li {
		padding: 0.5rem 0;
		color: #475569;
		border-bottom: 1px solid #e2e8f0;
	}

	.detail-card li:last-child {
		border-bottom: none;
	}

	.detail-card strong {
		color: #1e293b;
	}

	@media (max-width: 768px) {
		.details-grid {
			grid-template-columns: 1fr;
		}

		.header-content h1 {
			font-size: 2rem;
		}
	}
</style>
