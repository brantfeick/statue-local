<script lang="ts">
  import siteConfig from '../../../site.config.js';
</script>

<svelte:head>
  <title>Building Summary | {siteConfig.seo.defaultTitle}</title>
  <meta name="description" content="Detailed building summary for 4322 Geary Blvd — turnkey medical office, ±2,250 SF, freestanding, $2,100,000." />
</svelte:head>

<div class="page">
  <!-- Navigation -->
  <nav class="nav-bar">
    <div class="nav-content">
      <a href="/" class="nav-logo">STARBOARD<span>CRE</span></a>
      <div class="nav-links">
        <a href="/" class="nav-link">Overview</a>
        <a href="/summary" class="nav-link active">Summary</a>
        <a href="/floorplan" class="nav-link">Floorplan</a>
        <a href="/location" class="nav-link">Location</a>
        <a href="/agents" class="nav-link">Agents</a>
      </div>
    </div>
  </nav>

  <!-- Page Header -->
  <section class="page-header">
    <div class="page-header-inner">
      <div class="breadcrumb"><a href="/">4322 Geary Blvd</a> / Building Summary</div>
      <h1>Building Summary</h1>
      <p class="page-subtitle">Complete details for this turnkey freestanding medical office building</p>
    </div>
  </section>

  <!-- Main Content -->
  <div class="content-wrap">
    <!-- Quick Facts -->
    <section class="quick-facts-section">
      <div class="section-inner">
        <h2 class="section-title">Quick Facts</h2>
        <div class="facts-grid">
          <div class="fact-row">
            <span class="fact-label">Address</span>
            <span class="fact-value">4322 Geary Blvd, San Francisco, CA 94118</span>
          </div>
          <div class="fact-row">
            <span class="fact-label">Square Footage</span>
            <span class="fact-value">±2,250 SF</span>
          </div>
          <div class="fact-row">
            <span class="fact-label">Price</span>
            <span class="fact-value highlight">$2,100,000</span>
          </div>
          <div class="fact-row">
            <span class="fact-label">Space Type</span>
            <span class="fact-value">Medical Office</span>
          </div>
          <div class="fact-row">
            <span class="fact-label">Listing Type</span>
            <span class="fact-value">Sale</span>
          </div>
          <div class="fact-row">
            <span class="fact-label">Exam Rooms</span>
            <span class="fact-value">6 (all with sinks)</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Features in Two Columns -->
    <section class="features-section">
      <div class="section-inner">
        <h2 class="section-title">Property Features</h2>
        <div class="features-layout">
          <!-- Left: Building -->
          <div class="feature-group">
            <h3 class="feature-group-title">Building</h3>
            <ul class="feature-list">
              <li>
                <span class="check">✓</span>
                <div>
                  <strong>Turnkey Freestanding Building</strong>
                  <p>Standalone commercial property — complete ownership with no shared walls</p>
                </div>
              </li>
              <li>
                <span class="check">✓</span>
                <div>
                  <strong>Medical Build-Out Ready</strong>
                  <p>Six exam rooms included, all with sinks, ready for immediate medical use</p>
                </div>
              </li>
              <li>
                <span class="check">✓</span>
                <div>
                  <strong>Private Office Included</strong>
                  <p>Dedicated office space for administrative needs</p>
                </div>
              </li>
              <li>
                <span class="check">✓</span>
                <div>
                  <strong>In-Suite Kitchen</strong>
                  <p>Full kitchen on site for staff use</p>
                </div>
              </li>
              <li>
                <span class="check">✓</span>
                <div>
                  <strong>Small Backyard</strong>
                  <p>Private exterior space at rear of building</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Right: Location -->
          <div class="feature-group">
            <h3 class="feature-group-title">Location & Market</h3>
            <ul class="feature-list">
              <li>
                <span class="check">✓</span>
                <div>
                  <strong>Geary Boulevard Frontage</strong>
                  <p>High-traffic corridor with strong branding identity and excellent visibility</p>
                </div>
              </li>
              <li>
                <span class="check">✓</span>
                <div>
                  <strong>Inner Richmond Location</strong>
                  <p>Established neighborhood setting surrounded by dense residential housing</p>
                </div>
              </li>
              <li>
                <span class="check">✓</span>
                <div>
                  <strong>Transit-Oriented Access</strong>
                  <p>Multiple Muni lines serve the Geary corridor directly</p>
                </div>
              </li>
              <li>
                <span class="check">✓</span>
                <div>
                  <strong>Supply-Constrained Submarket</strong>
                  <p>Limited new medical development in the area creates lasting value</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="inline-cta">
      <div class="section-inner">
        <div class="cta-banner">
          <div class="cta-text">
            <h3>Interested in This Property?</h3>
            <p>Contact our agents to schedule a showing or request the offering memorandum.</p>
          </div>
          <div class="cta-actions">
            <a href="/agents" class="btn-primary">Contact Agents</a>
            <a href="/floorplan" class="btn-secondary">View Floorplan</a>
          </div>
        </div>
      </div>
    </section>
  </div>
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
    letter-spacing: 0.02em;
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
  .breadcrumb {
    font-size: 0.8rem;
    color: #7a8fa6;
    margin-bottom: 0.75rem;
  }
  .breadcrumb a { color: #b8963e; }
  .page-header h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #ffffff;
    margin: 0 0 0.5rem;
  }
  .page-subtitle {
    color: #c9d1de;
    font-size: 1rem;
    margin: 0;
  }

  /* SHARED */
  .section-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 2rem;
  }
  .section-title {
    font-size: 1.6rem;
    font-weight: 700;
    color: #0a1628;
    margin: 0 0 2rem 0;
    position: relative;
    padding-bottom: 0.85rem;
  }
  .section-title::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 50px; height: 3px;
    background: #b8963e;
    border-radius: 2px;
  }

  /* QUICK FACTS */
  .quick-facts-section { background: #ffffff; }
  .facts-grid {
    border: 1px solid #e2e6ed;
    border-radius: 8px;
    overflow: hidden;
  }
  .fact-row {
    display: flex;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #e2e6ed;
    align-items: center;
  }
  .fact-row:last-child { border-bottom: none; }
  .fact-row:nth-child(even) { background: #f8f9fb; }
  .fact-label {
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #7a8fa6;
    width: 180px;
    flex-shrink: 0;
  }
  .fact-value {
    font-size: 1rem;
    color: #1a2740;
    font-weight: 500;
  }
  .fact-value.highlight {
    color: #b8963e;
    font-weight: 700;
    font-size: 1.1rem;
  }

  /* FEATURES */
  .features-section { background: #f5f6f8; }
  .features-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  .feature-group-title {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #7a8fa6;
    margin: 0 0 1.25rem 0;
    padding-bottom: 0.6rem;
    border-bottom: 1px solid #e2e6ed;
  }
  .feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .feature-list li {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }
  .check {
    color: #b8963e;
    font-size: 1.1rem;
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 0.1rem;
  }
  .feature-list strong {
    display: block;
    font-size: 0.95rem;
    color: #0a1628;
    margin-bottom: 0.2rem;
  }
  .feature-list p {
    font-size: 0.85rem;
    color: #4a5a72;
    margin: 0;
    line-height: 1.55;
  }

  /* INLINE CTA */
  .cta-banner {
    background: linear-gradient(135deg, #0a1628 0%, #1a2d4e 100%);
    border-radius: 12px;
    padding: 2.5rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .cta-text h3 {
    font-size: 1.4rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 0.4rem;
  }
  .cta-text p {
    color: #c9d1de;
    font-size: 0.9rem;
    margin: 0;
  }
  .cta-actions {
    display: flex;
    gap: 1rem;
    flex-shrink: 0;
  }
  .btn-primary {
    background: #b8963e;
    color: #ffffff;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    font-size: 0.9rem;
    transition: background 0.2s;
  }
  .btn-primary:hover { background: #a07a2a; }
  .btn-secondary {
    background: transparent;
    color: #ffffff;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    font-size: 0.9rem;
    border: 2px solid rgba(255,255,255,0.4);
    transition: border-color 0.2s;
  }
  .btn-secondary:hover { border-color: #ffffff; }

  @media (max-width: 768px) {
    .nav-links { display: none; }
    .features-layout { grid-template-columns: 1fr; gap: 2rem; }
    .cta-banner { flex-direction: column; text-align: center; }
  }
</style>
