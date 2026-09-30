<script>
  import { siteConfig } from '$lib/site.config.js';
</script>

<section class="contact-cta">
  <div class="cta-content">
    <h2>Interested in this property?</h2>
    <p>Contact our commercial real estate specialist to schedule a showing or inquire about lease terms.</p>

    <div class="contact-methods">
      <div class="method">
        <h3>Call</h3>
        <a href="tel:{siteConfig.contact.phone}">{siteConfig.contact.phone}</a>
      </div>
      <div class="method">
        <h3>Email</h3>
        <a href="mailto:{siteConfig.contact.email}">{siteConfig.contact.email}</a>
      </div>
    </div>

    <div class="cta-buttons">
      <a href="mailto:{siteConfig.contact.email}?subject=Interest in 260 Kearny Office Space" class="btn btn-primary">
        Send Inquiry
      </a>
      <a href="tel:{siteConfig.contact.phone}" class="btn btn-secondary">
        Call Now
      </a>
    </div>
  </div>
</section>

<style>
  .contact-cta {
    background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
    color: white;
    padding: 4rem 2rem;
  }

  .cta-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .cta-content h2 {
    margin: 0 0 1rem 0;
    font-size: 2rem;
  }

  .cta-content p {
    margin: 0 0 2rem 0;
    font-size: 1.125rem;
    color: #cbd5e1;
  }

  .contact-methods {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .method h3 {
    margin: 0 0 0.5rem 0;
    color: #fbbf24;
  }

  .method a {
    color: #93c5fd;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 600;
    transition: color 0.2s;
  }

  .method a:hover {
    color: #fbbf24;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn {
    padding: 0.75rem 2rem;
    border-radius: 0.375rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s;
    display: inline-block;
  }

  .btn-primary {
    background-color: #fbbf24;
    color: #1e3a8a;
  }

  .btn-primary:hover {
    background-color: #f59e0b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3);
  }

  .btn-secondary {
    background-color: transparent;
    color: #fbbf24;
    border: 2px solid #fbbf24;
  }

  .btn-secondary:hover {
    background-color: #fbbf24;
    color: #1e3a8a;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .contact-methods {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .cta-buttons {
      flex-direction: column;
    }

    .btn {
      width: 100%;
    }
  }
</style>
