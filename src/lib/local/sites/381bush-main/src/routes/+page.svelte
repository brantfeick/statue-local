<script>
	import { siteConfig } from '../../site.config.js';
</script>

<svelte:head>
	<title>{siteConfig.seo.defaultTitle}</title>
	<meta name="description" content={siteConfig.seo.defaultDescription} />
</svelte:head>

<div class="page-container">
	<!-- Navigation Bar -->
	<nav class="nav-bar">
		<div class="nav-content">
			<a href="/" class="nav-logo">{siteConfig.site.name}</a>
			<div class="nav-links">
				<a href="/" class="nav-link active">Home</a>
				<a href="/availability" class="nav-link">Availability</a>
				<a href="/contact" class="nav-link">Contact</a>
			</div>
		</div>
	</nav>

	<!-- Hero Section -->
	<section class="hero">
		<div class="hero-content">
			<h1>Premium Office Space</h1>
			<p class="hero-subtitle">{siteConfig.contact.address.street}, San Francisco</p>
			<p class="hero-description">
				Discover flexible, modern office suites in the heart of San Francisco's Financial District
			</p>
			<div class="hero-buttons">
				<a href="/availability" class="btn btn-primary">View Availability</a>
				<a href="/contact" class="btn btn-secondary">Contact Us</a>
			</div>
		</div>
		<div class="hero-image">
			<img src="/assets/property-main.png" alt="381 Bush Street Property" />
		</div>
	</section>

	<!-- Quick Facts Section -->
	<section class="quick-facts">
		<div class="facts-container">
			<div class="fact">
				<h3>Location</h3>
				<p>{siteConfig.contact.address.street}</p>
				<p class="text-muted">{siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zipCode}</p>
			</div>
			<div class="fact">
				<h3>Availability</h3>
				<p>Multiple Suites</p>
				<p class="text-muted">Starting $29/RSF/Year</p>
			</div>
			<div class="fact">
				<h3>Size</h3>
				<p>1,500 RSF+</p>
				<p class="text-muted">Full Floor Suites</p>
			</div>
			<div class="fact">
				<h3>Contact</h3>
				<p><a href="tel:{siteConfig.contact.phone}">{siteConfig.contact.phone}</a></p>
				<p class="text-muted"><a href="mailto:{siteConfig.contact.email}">Email Us</a></p>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<section class="features">
		<div class="features-container">
			<h2>Exceptional Features</h2>
			<div class="features-grid">
				<div class="feature-item">
					<div class="feature-icon">🪟</div>
					<h3>Panoramic Views</h3>
					<p>Floor-to-ceiling windows with stunning city and bay views</p>
				</div>
				<div class="feature-item">
					<div class="feature-icon">🏢</div>
					<h3>Window Offices</h3>
					<p>Private offices with natural light throughout</p>
				</div>
				<div class="feature-item">
					<div class="feature-icon">👥</div>
					<h3>Conference Rooms</h3>
					<p>Professional meeting spaces for client presentations</p>
				</div>
				<div class="feature-item">
					<div class="feature-icon">📍</div>
					<h3>Prime Location</h3>
					<p>Easy access to public transportation and dining</p>
				</div>
				<div class="feature-item">
					<div class="feature-icon">💼</div>
					<h3>Professional Environment</h3>
					<p>State-of-the-art building with modern amenities</p>
				</div>
				<div class="feature-item">
					<div class="feature-icon">🤝</div>
					<h3>Flexible Terms</h3>
					<p>Negotiate lease terms to suit your business needs</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Call to Action Section -->
	<section class="cta-section">
		<div class="cta-container">
			<h2>Ready to Make a Move?</h2>
			<p>Contact our team to schedule a tour or learn more about available suites.</p>
			<a href="/contact" class="btn btn-primary btn-lg">Get in Touch</a>
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

	/* Hero Section */
	.hero {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		padding: 4rem 2rem;
		align-items: center;
		background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
	}

	.hero-content h1 {
		font-size: 3rem;
		margin: 0 0 1rem 0;
		color: #1a1a1a;
		line-height: 1.2;
	}

	.hero-subtitle {
		font-size: 1.5rem;
		color: #2196f3;
		margin: 0 0 1rem 0;
		font-weight: 600;
	}

	.hero-description {
		font-size: 1.1rem;
		color: #666666;
		margin: 0 0 2rem 0;
		line-height: 1.6;
	}

	.hero-buttons {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.hero-image {
		overflow: hidden;
		border-radius: 8px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
	}

	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
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
	}

	.btn-primary {
		background-color: #2196f3;
		color: white;
	}

	.btn-primary:hover {
		background-color: #1976d2;
		box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
	}

	.btn-secondary {
		background-color: transparent;
		color: #2196f3;
		border: 2px solid #2196f3;
	}

	.btn-secondary:hover {
		background-color: #2196f3;
		color: white;
	}

	.btn-lg {
		padding: 1rem 3rem;
		font-size: 1.1rem;
	}

	/* Quick Facts Section */
	.quick-facts {
		padding: 4rem 2rem;
		background-color: #fafafa;
	}

	.facts-container {
		max-width: 1400px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.fact {
		background-color: white;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
	}

	.fact h3 {
		margin: 0 0 0.5rem 0;
		font-size: 1.2rem;
		color: #1a1a1a;
	}

	.fact p {
		margin: 0.5rem 0;
		color: #666666;
	}

	.text-muted {
		color: #999999;
		font-size: 0.95rem;
	}

	/* Features Section */
	.features {
		padding: 4rem 2rem;
	}

	.features-container {
		max-width: 1400px;
		margin: 0 auto;
	}

	.features-container h2 {
		text-align: center;
		font-size: 2.5rem;
		margin: 0 0 3rem 0;
		color: #1a1a1a;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.feature-item {
		text-align: center;
		padding: 2rem;
		border-radius: 8px;
		background-color: #f9f9f9;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.feature-item:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
	}

	.feature-icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.feature-item h3 {
		margin: 1rem 0;
		font-size: 1.3rem;
		color: #1a1a1a;
	}

	.feature-item p {
		color: #666666;
		line-height: 1.6;
	}

	/* CTA Section */
	.cta-section {
		padding: 4rem 2rem;
		background: linear-gradient(135deg, #2196f3 0%, #1976d2 100%);
		color: white;
		text-align: center;
	}

	.cta-container {
		max-width: 1400px;
		margin: 0 auto;
	}

	.cta-section h2 {
		font-size: 2rem;
		margin: 0 0 1rem 0;
	}

	.cta-section p {
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

		.hero {
			grid-template-columns: 1fr;
			padding: 2rem 1rem;
		}

		.hero-content h1 {
			font-size: 2rem;
		}

		.hero-subtitle {
			font-size: 1.2rem;
		}

		.hero-buttons {
			flex-direction: column;
		}

		.btn {
			width: 100%;
			text-align: center;
		}

		.features-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
