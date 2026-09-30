<script>
	import { siteConfig } from '../../../site.config.js';
</script>

<svelte:head>
	<title>Availability | {siteConfig.seo.defaultTitle}</title>
	<meta name="description" content="View available office suites at 381 Bush Street" />
</svelte:head>

<div class="page-container">
	<!-- Navigation Bar -->
	<nav class="nav-bar">
		<div class="nav-content">
			<a href="/" class="nav-logo">{siteConfig.site.name}</a>
			<div class="nav-links">
				<a href="/" class="nav-link">Home</a>
				<a href="/availability" class="nav-link active">Availability</a>
				<a href="/contact" class="nav-link">Contact</a>
			</div>
		</div>
	</nav>

	<!-- Header -->
	<section class="page-header">
		<h1>Available Suites</h1>
		<p>Flexible office space options to meet your business needs</p>
	</section>

	<!-- Suites Grid -->
	<section class="suites-section">
		<div class="suites-container">
			<!-- Suite 600 -->
			<div class="suite-card">
				<div class="suite-status available">Available</div>
				<h2>Suite 600</h2>
				<div class="suite-details">
					<div class="detail-row">
						<span class="label">Size:</span>
						<span class="value">Full Floor, 1,500 RSF+</span>
					</div>
					<div class="detail-row">
						<span class="label">Availability:</span>
						<span class="value">NOW</span>
					</div>
					<div class="detail-row">
						<span class="label">Rate:</span>
						<span class="value price">$29.00 PSF/YR</span>
					</div>
					<div class="detail-row">
						<span class="label">Term:</span>
						<span class="value">Negotiable</span>
					</div>
				</div>
				<a href="/contact" class="btn btn-primary">Inquire Now</a>
			</div>

			<!-- Suite 300 -->
			<div class="suite-card">
				<div class="suite-status available">Available</div>
				<h2>Suite 300</h2>
				<div class="suite-details">
					<div class="detail-row">
						<span class="label">Size:</span>
						<span class="value">Full Floor, 1,500 RSF+</span>
					</div>
					<div class="detail-row">
						<span class="label">Availability:</span>
						<span class="value">NOW</span>
					</div>
					<div class="detail-row">
						<span class="label">Rate:</span>
						<span class="value price">$29.00 PSF/YR</span>
					</div>
					<div class="detail-row">
						<span class="label">Term:</span>
						<span class="value">Negotiable</span>
					</div>
				</div>
				<a href="/contact" class="btn btn-primary">Inquire Now</a>
			</div>

			<!-- Suite 800 -->
			<div class="suite-card">
				<div class="suite-status leased">LEASED</div>
				<h2>Suite 800</h2>
				<div class="suite-details">
					<div class="detail-row">
						<span class="label">Size:</span>
						<span class="value">Full Floor, 1,500 RSF+</span>
					</div>
					<div class="detail-row">
						<span class="label">Status:</span>
						<span class="value">Leased</span>
					</div>
					<div class="detail-row">
						<span class="label">Rate:</span>
						<span class="value price">$49.00 PSF/YR</span>
					</div>
				</div>
			</div>

			<!-- Suite 600 (Lower Floor) -->
			<div class="suite-card">
				<div class="suite-status leased">LEASED</div>
				<h2>Suite 600 (Lower)</h2>
				<div class="suite-details">
					<div class="detail-row">
						<span class="label">Size:</span>
						<span class="value">Full Floor, 1,500 RSF+</span>
					</div>
					<div class="detail-row">
						<span class="label">Status:</span>
						<span class="value">Leased</span>
					</div>
					<div class="detail-row">
						<span class="label">Rate:</span>
						<span class="value price">$45.00 PSF/YR</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Building Features -->
	<section class="building-features">
		<div class="features-container">
			<h2>Building Highlights</h2>
			<div class="features-list">
				<div class="feature">
					<span class="icon">✓</span>
					<p>Panoramic windows with views of the city and bay</p>
				</div>
				<div class="feature">
					<span class="icon">✓</span>
					<p>Private window offices for executives and teams</p>
				</div>
				<div class="feature">
					<span class="icon">✓</span>
					<p>Professional conference rooms for client meetings</p>
				</div>
				<div class="feature">
					<span class="icon">✓</span>
					<p>Open work areas for collaborative teams</p>
				</div>
				<div class="feature">
					<span class="icon">✓</span>
					<p>Large window lines throughout the floors</p>
				</div>
				<div class="feature">
					<span class="icon">✓</span>
					<p>Prime location in Financial District</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact CTA -->
	<section class="contact-cta">
		<div class="cta-container">
			<h2>Interested in Learning More?</h2>
			<p>Our team is ready to help you find the perfect office space.</p>
			<a href="/contact" class="btn btn-primary btn-lg">Contact Our Team</a>
		</div>
	</section>
</div>

<style>
	.page-container {
		max-width: 1400px;
		margin: 0 auto;
	}

	/* Navigation Bar */
	.nav-bar {
		background-color: #ffffff;
		border-bottom: 1px solid #e0e0e0;
		position: sticky;
		top: 0;
		z-index: 100;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
	}

	.nav-content {
		max-width: 1400px;
		margin: 0 auto;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-logo {
		font-size: 1.5rem;
		font-weight: 700;
		color: #1a1a1a;
		text-decoration: none;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
	}

	.nav-link {
		color: #666666;
		text-decoration: none;
		font-weight: 500;
		transition: color 0.3s ease;
	}

	.nav-link:hover,
	.nav-link.active {
		color: #2196f3;
	}

	/* Page Header */
	.page-header {
		background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
		padding: 4rem 2rem;
		text-align: center;
	}

	.page-header h1 {
		font-size: 2.5rem;
		margin: 0 0 1rem 0;
		color: #1a1a1a;
	}

	.page-header p {
		font-size: 1.1rem;
		color: #666666;
		margin: 0;
	}

	/* Suites Section */
	.suites-section {
		padding: 4rem 2rem;
	}

	.suites-container {
		max-width: 1400px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.suite-card {
		background-color: white;
		border: 1px solid #e0e0e0;
		border-radius: 8px;
		padding: 2rem;
		position: relative;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
		transition: box-shadow 0.3s ease;
	}

	.suite-card:hover {
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
	}

	.suite-status {
		position: absolute;
		top: 1rem;
		right: 1rem;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		font-size: 0.85rem;
		font-weight: 600;
	}

	.suite-status.available {
		background-color: #4caf50;
		color: white;
	}

	.suite-status.leased {
		background-color: #f44336;
		color: white;
	}

	.suite-card h2 {
		margin: 0 0 1.5rem 0;
		font-size: 1.5rem;
		color: #1a1a1a;
	}

	.suite-details {
		margin-bottom: 1.5rem;
	}

	.detail-row {
		display: flex;
		justify-content: space-between;
		padding: 0.75rem 0;
		border-bottom: 1px solid #f0f0f0;
	}

	.label {
		font-weight: 600;
		color: #1a1a1a;
	}

	.value {
		color: #666666;
	}

	.price {
		color: #2196f3;
		font-weight: 700;
		font-size: 1.1rem;
	}

	/* Buttons */
	.btn {
		padding: 0.75rem 2rem;
		font-size: 1rem;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		text-decoration: none;
		transition: all 0.3s ease;
		display: inline-block;
		font-weight: 600;
		width: 100%;
		text-align: center;
	}

	.btn-primary {
		background-color: #2196f3;
		color: white;
	}

	.btn-primary:hover {
		background-color: #1976d2;
	}

	.btn-lg {
		padding: 1rem 3rem;
		font-size: 1.1rem;
		width: auto;
	}

	/* Building Features */
	.building-features {
		background-color: #fafafa;
		padding: 4rem 2rem;
	}

	.features-container {
		max-width: 1400px;
		margin: 0 auto;
	}

	.features-container h2 {
		text-align: center;
		font-size: 2rem;
		margin: 0 0 2rem 0;
		color: #1a1a1a;
	}

	.features-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.feature {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.icon {
		color: #4caf50;
		font-weight: bold;
		font-size: 1.5rem;
		flex-shrink: 0;
	}

	.feature p {
		color: #666666;
		margin: 0;
		line-height: 1.6;
	}

	/* Contact CTA */
	.contact-cta {
		padding: 4rem 2rem;
		background: linear-gradient(135deg, #2196f3 0%, #1976d2 100%);
		color: white;
		text-align: center;
	}

	.cta-container {
		max-width: 1400px;
		margin: 0 auto;
	}

	.contact-cta h2 {
		font-size: 2rem;
		margin: 0 0 1rem 0;
	}

	.contact-cta p {
		font-size: 1.1rem;
		margin: 0 0 2rem 0;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.nav-content {
			flex-direction: column;
			gap: 1rem;
		}

		.nav-links {
			flex-direction: column;
			gap: 1rem;
			width: 100%;
		}

		.page-header h1 {
			font-size: 1.8rem;
		}

		.suites-container {
			grid-template-columns: 1fr;
		}

		.features-list {
			grid-template-columns: 1fr;
		}
	}
</style>
