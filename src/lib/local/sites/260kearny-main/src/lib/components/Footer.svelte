<script>
  import { siteConfig } from '$lib/site.config.js';
</script>

<footer class="site-footer">
  <div class="footer-content">
    <div class="footer-section">
      <h3>{siteConfig.site.name}</h3>
      <p>{siteConfig.site.description}</p>
    </div>

    <div class="footer-section">
      <h4>Contact</h4>
      <p>
        <strong>Agent:</strong> Jay D. Shaffer<br />
        <strong>Phone:</strong> <a href="tel:{siteConfig.contact.phone}">{siteConfig.contact.phone}</a><br />
        <strong>Email:</strong> <a href="mailto:{siteConfig.contact.email}">{siteConfig.contact.email}</a>
      </p>
    </div>

    <div class="footer-section">
      <h4>Location</h4>
      <p>
        {siteConfig.contact.address.street}<br />
        {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zipCode}
      </p>
    </div>

    <div class="footer-section">
      <h4>Company</h4>
      <p>Represented by:</p>
      <strong>Colton Commercial</strong>
      {#if siteConfig.social.linkedin}
        <p>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener">LinkedIn</a>
        </p>
      {/if}
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; {new Date().getFullYear()} Colton Commercial. All rights reserved.</p>
  </div>
</footer>

<style>
  .site-footer {
    background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
    color: white;
    padding: 3rem 2rem 1rem;
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

  .footer-section h3,
  .footer-section h4 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #fbbf24;
  }

  .footer-section p {
    margin: 0.5rem 0;
    line-height: 1.6;
  }

  .footer-section a {
    color: #93c5fd;
    text-decoration: none;
    transition: color 0.2s;
  }

  .footer-section a:hover {
    color: #fbbf24;
  }

  .footer-bottom {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    font-size: 0.875rem;
    color: #cbd5e1;
  }
</style>
