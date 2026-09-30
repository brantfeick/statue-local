<script>
	import { siteConfig } from '../../../site.config.js';
</script>

<svelte:head>
	<title>Contact | {siteConfig.seo.defaultTitle}</title>
	<meta name="description" content="Contact the team at 381 Bush Street" />
</svelte:head>

<div class="page-container">
	<!-- Navigation Bar -->
	<nav class="nav-bar">
		<div class="nav-content">
			<a href="/" class="nav-logo">{siteConfig.site.name}</a>
			<div class="nav-links">
				<a href="/" class="nav-link">Home</a>
				<a href="/availability" class="nav-link">Availability</a>
				<a href="/contact" class="nav-link active">Contact</a>
			</div>
		</div>
	</nav>

	<!-- Header -->
	<section class="page-header">
		<h1>Contact Us</h1>
		<p>Get in touch with our team to schedule a tour or discuss your office space needs</p>
	</section>

	<!-- Contact Content -->
	<section class="contact-section">
		<div class="contact-container">
			<!-- Contact Information -->
			<div class="contact-info">
				<h2>Leasing Agents</h2>
				<div class="agents">
					<div class="agent-card">
						<h3>Mark D. Walker</h3>
						<p class="agent-title">Commercial Real Estate Specialist</p>
						<p class="license">License #: 00878051</p>
						<p><a href="tel:(415) 722-3110">(415) 722-3110</a></p>
						<p><a href="mailto:mwalker@coltoncommercialsf.com">mwalker@coltoncommercialsf.com</a></p>
					</div>

					<div class="agent-card">
						<h3>Daniel H. Starr</h3>
						<p class="agent-title">Commercial Real Estate Specialist</p>
						<p class="license">License #: 02017899</p>
						<p><a href="tel:(415) 317-3491">(415) 317-3491</a></p>
						<p><a href="mailto:dstarr@coltoncommercialsf.com">dstarr@coltoncommercialsf.com</a></p>
					</div>

					<div class="agent-card">
						<h3>Eddy Adjaoute</h3>
						<p class="agent-title">Commercial Real Estate Specialist</p>
						<p class="license">License #: 02114628</p>
						<p><a href="tel:(415) 747-4050">(415) 747-4050</a></p>
						<p><a href="mailto:eddy@coltoncommercialsf.com">eddy@coltoncommercialsf.com</a></p>
					</div>
				</div>

				<div class="location-info">
					<h3>Property Location</h3>
					<p>
						<strong>{siteConfig.contact.address.street}</strong><br />
						{siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zipCode}<br />
						{siteConfig.contact.address.country}
					</p>
					<p class="highlight">Prime location in San Francisco's Financial District</p>
				</div>
			</div>

			<!-- Contact Form -->
			<div class="contact-form">
				<h2>Send Us a Message</h2>
				<form>
					<div class="form-group">
						<label for="name">Name</label>
						<input type="text" id="name" name="name" required />
					</div>

					<div class="form-group">
						<label for="email">Email</label>
						<input type="email" id="email" name="email" required />
					</div>

					<div class="form-group">
						<label for="phone">Phone</label>
						<input type="tel" id="phone" name="phone" />
					</div>

					<div class="form-group">
						<label for="company">Company</label>
						<input type="text" id="company" name="company" />
					</div>

					<div class="form-group">
						<label for="interest">Interested In</label>
						<select id="interest" name="interest">
							<option>Select a suite...</option>
							<option>Suite 600</option>
							<option>Suite 300</option>
							<option>Suite 800</option>
							<option>General Inquiry</option>
						</select>
					</div>

					<div class="form-group">
						<label for="message">Message</label>
						<textarea id="message" name="message" rows="5" required></textarea>
					</div>

					<button type="submit" class="btn btn-primary btn-lg">Send Message</button>
				</form>
				<p class="form-note">Alternatively, contact us directly using the agent information to the left.</p>
			</div>
		</div>
	</section>

	<!-- Map Section -->
	<section class="map-section">
		<div class="map-container">
			<h2>Location</h2>
			<div class="map-info">
				<p>
					Located at 381 Bush Street in San Francisco's Financial District, our property offers easy access to:
				</p>
				<ul>
					<li>Public transportation (BART, Muni)</li>
					<li>Fine dining and restaurants</li>
					<li>Shopping and retail</li>
					<li>Banking and financial services</li>
					<li>Professional services</li>
				</ul>
			</div>
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

	/* Contact Section */
	.contact-section {
		padding: 4rem 2rem;
	}

	.contact-container {
		max-width: 1400px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
	}

	.contact-info h2,
	.contact-form h2 {
		font-size: 1.8rem;
		margin: 0 0 2rem 0;
		color: #1a1a1a;
	}

	.agents {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		margin-bottom: 3rem;
	}

	.agent-card {
		background-color: #f9f9f9;
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 4px solid #2196f3;
	}

	.agent-card h3 {
		margin: 0 0 0.5rem 0;
		font-size: 1.2rem;
		color: #1a1a1a;
	}

	.agent-title {
		color: #2196f3;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
		font-size: 0.95rem;
	}

	.license {
		color: #999999;
		font-size: 0.85rem;
		margin: 0.5rem 0;
	}

	.agent-card p {
		margin: 0.5rem 0;
		color: #666666;
	}

	.agent-card a {
		color: #2196f3;
		text-decoration: none;
	}

	.agent-card a:hover {
		text-decoration: underline;
	}

	.location-info {
		background-color: #f0f7ff;
		padding: 2rem;
		border-radius: 8px;
		border-left: 4px solid #2196f3;
	}

	.location-info h3 {
		margin: 0 0 1rem 0;
		color: #1a1a1a;
	}

	.location-info p {
		margin: 0.5rem 0;
		color: #666666;
		line-height: 1.6;
	}

	.highlight {
		color: #2196f3;
		font-weight: 600;
		margin-top: 1rem !important;
	}

	/* Form Styles */
	.contact-form {
		background-color: #fafafa;
		padding: 2rem;
		border-radius: 8px;
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	.form-group label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 600;
		color: #1a1a1a;
	}

	.form-group input,
	.form-group select,
	.form-group textarea {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid #e0e0e0;
		border-radius: 4px;
		font-family: inherit;
		font-size: 1rem;
		color: #333333;
	}

	.form-group input:focus,
	.form-group select:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: #2196f3;
		box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
	}

	.form-group textarea {
		resize: vertical;
	}

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
	}

	.btn-lg {
		padding: 1rem 2rem;
		font-size: 1.1rem;
		width: 100%;
	}

	.form-note {
		margin-top: 1.5rem;
		color: #999999;
		font-size: 0.95rem;
	}

	/* Map Section */
	.map-section {
		background-color: #f5f7fa;
		padding: 4rem 2rem;
	}

	.map-container {
		max-width: 1400px;
		margin: 0 auto;
	}

	.map-container h2 {
		text-align: center;
		font-size: 2rem;
		margin: 0 0 2rem 0;
		color: #1a1a1a;
	}

	.map-info {
		background-color: white;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
	}

	.map-info p {
		margin: 0 0 1.5rem 0;
		color: #666666;
		line-height: 1.6;
	}

	.map-info ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}

	.map-info li {
		padding: 0.75rem;
		background-color: #f9f9f9;
		border-radius: 4px;
		color: #666666;
	}

	.map-info li:before {
		content: '✓ ';
		color: #4caf50;
		font-weight: bold;
		margin-right: 0.5rem;
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

		.contact-container {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.agents {
			grid-template-columns: 1fr;
		}

		.map-info ul {
			grid-template-columns: 1fr;
		}
	}
</style>
