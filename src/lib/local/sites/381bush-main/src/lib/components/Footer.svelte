<script>
	import { siteConfig } from '../../../site.config.js';
</script>

<footer class="site-footer">
	<div class="footer-content">
		<div class="footer-section">
			<h3>{siteConfig.site.name}</h3>
			<p>{siteConfig.contact.address.street}</p>
			<p>{siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zipCode}</p>
		</div>

		<div class="footer-section">
			<h3>Contact</h3>
			<p><a href="tel:{siteConfig.contact.phone}">{siteConfig.contact.phone}</a></p>
			<p><a href="mailto:{siteConfig.contact.email}">{siteConfig.contact.email}</a></p>
		</div>

		<div class="footer-section">
			<h3>Quick Links</h3>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/availability">Availability</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</div>

		<div class="footer-section">
			<h3>Follow Us</h3>
			{#if siteConfig.social.linkedin}
				<p><a href={siteConfig.social.linkedin} target="_blank">LinkedIn</a></p>
			{/if}
		</div>
	</div>

	<div class="footer-bottom">
		<p>&copy; 2024 {siteConfig.site.name}. All rights reserved.</p>
		<p>Exclusively Presented By: Colton Commercial</p>
	</div>
</footer>

<style>
	.site-footer {
		background-color: #1a1a1a;
		color: #ffffff;
		padding: 3rem 2rem 2rem;
		margin-top: 4rem;
	}

	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.footer-section h3 {
		margin-top: 0;
		margin-bottom: 1rem;
		font-size: 1.1rem;
		color: #ffffff;
	}

	.footer-section p,
	.footer-section li {
		margin: 0.5rem 0;
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.footer-section a {
		color: #64b5f6;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.footer-section a:hover {
		color: #42a5f5;
		text-decoration: underline;
	}

	.footer-section ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.footer-bottom {
		border-top: 1px solid #333333;
		max-width: 1200px;
		margin: 0 auto;
		padding-top: 1.5rem;
		text-align: center;
		font-size: 0.9rem;
		color: #999999;
	}

	.footer-bottom p {
		margin: 0.5rem 0;
	}
</style>
