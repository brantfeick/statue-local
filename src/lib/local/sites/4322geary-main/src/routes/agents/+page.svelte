<script lang="ts">
  import siteConfig from '../../../site.config.js';
</script>

<svelte:head>
  <title>Agents | {siteConfig.seo.defaultTitle}</title>
  <meta name="description" content="Contact Craig Hansson and Kyle Pasiecznik at Starboard CRE to inquire about 4322 Geary Blvd, San Francisco." />
</svelte:head>

<div class="page">
  <!-- Navigation -->
  <nav class="nav-bar">
    <div class="nav-content">
      <a href="/" class="nav-logo">STARBOARD<span>CRE</span></a>
      <div class="nav-links">
        <a href="/" class="nav-link">Overview</a>
        <a href="/summary" class="nav-link">Summary</a>
        <a href="/floorplan" class="nav-link">Floorplan</a>
        <a href="/location" class="nav-link">Location</a>
        <a href="/agents" class="nav-link active">Agents</a>
      </div>
    </div>
  </nav>

  <!-- Page Header -->
  <section class="page-header">
    <div class="page-header-inner">
      <div class="breadcrumb"><a href="/">4322 Geary Blvd</a> / Agents</div>
      <h1>Listing Agents</h1>
      <p class="page-subtitle">Reach out to our team to schedule a showing or request more information</p>
    </div>
  </section>

  <!-- Agents -->
  <section class="agents-section">
    <div class="section-inner">
      <div class="agents-grid">

        <!-- Craig Hansson -->
        <div class="agent-card">
          <div class="agent-photo-wrap">
            <img src="/assets/page5_Fm2_Im0.jpeg" alt="Craig Hansson, Vice President" class="agent-photo" />
          </div>
          <div class="agent-info">
            <div class="agent-name">Craig Hansson</div>
            <div class="agent-title">Vice President, Leasing &amp; Sales</div>
            <div class="agent-dre">CA DRE # 01841643</div>
            <div class="agent-contacts">
              <a href="mailto:craig@starboardcre.com" class="contact-item email">
                <span class="contact-icon">✉</span>
                <span>craig@starboardcre.com</span>
              </a>
              <a href="tel:4157107768" class="contact-item phone">
                <span class="contact-icon">📞</span>
                <span>415.710.7768</span>
              </a>
            </div>
            <div class="agent-actions">
              <a href="tel:4157107768" class="btn-call">Call Craig</a>
              <a href="mailto:craig@starboardcre.com" class="btn-email">Email Craig</a>
            </div>
          </div>
        </div>

        <!-- Kyle Pasiecznik -->
        <div class="agent-card">
          <div class="agent-photo-wrap">
            <img src="/assets/page5_Fm8_Im0.jpeg" alt="Kyle Pasiecznik, Leasing & Sales Associate" class="agent-photo" />
          </div>
          <div class="agent-info">
            <div class="agent-name">Kyle Pasiecznik</div>
            <div class="agent-title">Leasing &amp; Sales Associate</div>
            <div class="agent-dre">CA DRE # 02074330</div>
            <div class="agent-contacts">
              <a href="mailto:kyle@starboardcre.com" class="contact-item email">
                <span class="contact-icon">✉</span>
                <span>kyle@starboardcre.com</span>
              </a>
              <a href="tel:6506784669" class="contact-item phone">
                <span class="contact-icon">📞</span>
                <span>650.678.4669</span>
              </a>
            </div>
            <div class="agent-actions">
              <a href="tel:6506784669" class="btn-call">Call Kyle</a>
              <a href="mailto:kyle@starboardcre.com" class="btn-email">Email Kyle</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Starboard CRE About -->
  <section class="company-section">
    <div class="section-inner">
      <div class="company-layout">
        <div class="company-image-wrap">
          <img src="/assets/page6_Im0.jpeg" alt="Starboard CRE San Francisco office" class="company-image" />
        </div>
        <div class="company-info">
          <div class="company-logo-text">STARBOARD<span>CRE</span></div>
          <div class="company-url">starboardcre.com</div>

          <div class="pillars">
            <div class="pillar">
              <h3>Unique Vision</h3>
              <p>We see what others miss. Locally based and technology-forward, our brokers are highly qualified experts backed by a full-service in-house support team.</p>
            </div>
            <div class="pillar">
              <h3>Local Market Leader</h3>
              <p>No one knows Northern California like we do. Decades of brokerage experience representing over 600 million square feet of space.</p>
            </div>
            <div class="pillar">
              <h3>Full-Service Firm</h3>
              <p>We do it all. Aggregate lease value of over $10 billion and investments sold over $3 billion — with deep understanding of San Francisco real estate.</p>
            </div>
          </div>

          <div class="company-contact">
            <div class="company-address">49 Powell Street, San Francisco, CA 94102</div>
            <a href="tel:4157656900" class="company-phone">OFC: 415.765.6900</a>
            <div class="company-dre">CA DRE# 01103056</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .page {
    min-height: 100vh;
    background: #f5f6f8;
  }

  /* NAV */
  .nav-bar {
    background: #0a1628;
    border-bottom: 3px solid #b8963e;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
  }
  .nav-logo {
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    color: #ffffff;
    text-transform: uppercase;
  }
  .nav-logo span { color: #b8963e; }
  .nav-links { display: flex; gap: 0.25rem; }
  .nav-link {
    color: #c9d1de;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: color 0.2s, background 0.2s;
  }
  .nav-link:hover { color: #ffffff; background: rgba(184,150,62,0.15); }
  .nav-link.active { color: #b8963e; background: rgba(184,150,62,0.1); }

  /* PAGE HEADER */
  .page-header {
    background: linear-gradient(135deg, #0a1628 0%, #1a2d4e 100%);
    padding: 3rem 0 2.5rem;
  }
  .page-header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  .breadcrumb { font-size: 0.8rem; color: #7a8fa6; margin-bottom: 0.75rem; }
  .breadcrumb a { color: #b8963e; }
  .page-header h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #ffffff;
    margin: 0 0 0.5rem;
  }
  .page-subtitle { color: #c9d1de; font-size: 1rem; margin: 0; }

  /* AGENTS */
  .agents-section { background: #ffffff; }
  .section-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 2rem;
  }
  .agents-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .agent-card {
    background: #f5f6f8;
    border: 1px solid #e2e6ed;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .agent-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(10,22,40,0.1);
  }
  .agent-photo-wrap {
    height: 240px;
    overflow: hidden;
    background: #0a1628;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .agent-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
  .agent-info {
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .agent-name {
    font-size: 1.4rem;
    font-weight: 800;
    color: #0a1628;
  }
  .agent-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: #b8963e;
    letter-spacing: 0.04em;
  }
  .agent-dre {
    font-size: 0.75rem;
    color: #7a8fa6;
    margin-bottom: 0.5rem;
  }
  .agent-contacts {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.9rem;
    color: #1a2740;
    padding: 0.5rem 0.75rem;
    background: #ffffff;
    border: 1px solid #e2e6ed;
    border-radius: 6px;
    transition: border-color 0.2s;
  }
  .contact-item:hover { border-color: #b8963e; }
  .contact-icon { font-size: 1rem; }
  .agent-actions {
    display: flex;
    gap: 0.75rem;
    margin-top: 0.5rem;
  }
  .btn-call {
    flex: 1;
    background: #0a1628;
    color: #ffffff;
    text-align: center;
    padding: 0.75rem;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.875rem;
    transition: background 0.2s;
  }
  .btn-call:hover { background: #1a2d4e; }
  .btn-email {
    flex: 1;
    background: #b8963e;
    color: #ffffff;
    text-align: center;
    padding: 0.75rem;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.875rem;
    transition: background 0.2s;
  }
  .btn-email:hover { background: #a07a2a; }

  /* COMPANY */
  .company-section { background: #f5f6f8; }
  .company-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
  }
  .company-image-wrap {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(10,22,40,0.12);
  }
  .company-image { width: 100%; display: block; }
  .company-logo-text {
    font-size: 1.8rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    color: #0a1628;
    text-transform: uppercase;
    margin-bottom: 0.2rem;
  }
  .company-logo-text span { color: #b8963e; }
  .company-url {
    font-size: 0.875rem;
    color: #7a8fa6;
    margin-bottom: 1.5rem;
    letter-spacing: 0.04em;
  }
  .pillars {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
  }
  .pillar {
    border-left: 3px solid #b8963e;
    padding: 0.75rem 1rem;
  }
  .pillar h3 {
    font-size: 0.9rem;
    font-weight: 700;
    color: #0a1628;
    margin: 0 0 0.4rem;
  }
  .pillar p {
    font-size: 0.825rem;
    color: #4a5a72;
    margin: 0;
    line-height: 1.6;
  }
  .company-contact {
    background: #ffffff;
    border: 1px solid #e2e6ed;
    border-radius: 8px;
    padding: 1.25rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .company-address { font-size: 0.875rem; color: #1a2740; }
  .company-phone {
    font-size: 0.9rem;
    font-weight: 600;
    color: #b8963e;
    display: block;
  }
  .company-dre { font-size: 0.775rem; color: #7a8fa6; }

  @media (max-width: 768px) {
    .nav-links { display: none; }
    .agents-grid { grid-template-columns: 1fr; }
    .company-layout { grid-template-columns: 1fr; }
  }
</style>
