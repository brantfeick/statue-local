<script lang="ts">
  import siteConfig from '../../site.config.js';
</script>

<svelte:head>
  <title>{siteConfig.seo.defaultTitle}</title>
  <meta name="description" content={siteConfig.seo.defaultDescription} />
</svelte:head>

<div class="page">
  <!-- Navigation -->
  <nav class="nav-bar">
    <div class="nav-content">
      <a href="/" class="nav-logo">STARBOARD<span>CRE</span></a>
      <div class="nav-links">
        <a href="/" class="nav-link active">Overview</a>
        <a href="/summary" class="nav-link">Summary</a>
        <a href="/floorplan" class="nav-link">Floorplan</a>
        <a href="/location" class="nav-link">Location</a>
        <a href="/agents" class="nav-link">Agents</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-image-wrap">
      <img src="/assets/page1_Im0.jpeg" alt="4322 Geary Blvd exterior" class="hero-img" />
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-content">
      <div class="for-sale-badge">FOR SALE</div>
      <h1 class="hero-address">4322 Geary Blvd</h1>
      <p class="hero-city">San Francisco, CA 94118</p>
      <div class="hero-price">$2,100,000</div>
      <p class="hero-type">Medical Office · ±2,250 SF</p>
      <div class="hero-cta-row">
        <a href="/summary" class="btn-primary">View Details</a>
        <a href="/agents" class="btn-secondary">Contact Agent</a>
      </div>
    </div>
  </section>

  <!-- Key Stats Bar -->
  <section class="stats-bar">
    <div class="stats-inner">
      <div class="stat">
        <div class="stat-value">$2.1M</div>
        <div class="stat-label">List Price</div>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <div class="stat-value">±2,250</div>
        <div class="stat-label">Square Feet</div>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <div class="stat-value">6</div>
        <div class="stat-label">Exam Rooms</div>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <div class="stat-value">1.4</div>
        <div class="stat-label">PDF Version</div>
      </div>
    </div>
  </section>

  <!-- Highlights Grid -->
  <section class="highlights">
    <div class="section-inner">
      <h2 class="section-title">Property Highlights</h2>
      <div class="highlights-grid">
        <div class="highlight-card">
          <div class="highlight-icon">🏥</div>
          <h3>Medical Build-Out Ready</h3>
          <p>Turnkey freestanding building with 6 exam rooms, all with sinks. Remodeled in 2011 with new HVAC, electrical, and plumbing.</p>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">📍</div>
          <h3>Prime Geary Boulevard Location</h3>
          <p>High-traffic corridor on Geary Blvd in the Inner Richmond — strong visibility with Geary Boulevard frontage and multiple Muni lines nearby.</p>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">🏢</div>
          <h3>Freestanding Standalone Building</h3>
          <p>Standalone commercial property with dedicated office space, in-suite kitchen, 2 ADA restrooms, and a small backyard.</p>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">🏘️</div>
          <h3>Dense Residential Area</h3>
          <p>Surrounded by established Inner Richmond housing, supply-constrained submarket with limited new development opportunity.</p>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">🩺</div>
          <h3>Medical Corridor</h3>
          <p>Located within the Geary / Divisadero Medical Corridor, near Kaiser Permanente, Fog City Medical Clinic, and allied health services.</p>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">🛜</div>
          <h3>Modern Infrastructure</h3>
          <p>Wired for internet in all rooms (except storage), new roof installed 2012, 3 storage rooms, large reception area.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Property Photo Gallery Preview -->
  <section class="gallery-preview">
    <div class="section-inner">
      <h2 class="section-title">Property Images</h2>
      <div class="gallery-grid">
        <div class="gallery-main">
          <img src="/assets/page1_Im0.jpeg" alt="4322 Geary Blvd property exterior" />
        </div>
        <div class="gallery-side">
          <img src="/assets/page6_Im0.jpeg" alt="Starboard CRE office" />
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section">
    <div class="cta-inner">
      <h2>Ready to Tour the Property?</h2>
      <p>Contact our agents today to schedule a showing or request additional information.</p>
      <div class="cta-agents">
        <a href="/agents" class="agent-pill">
          <strong>Craig Hansson</strong>
          <span>415.710.7768</span>
        </a>
        <a href="/agents" class="agent-pill">
          <strong>Kyle Pasiecznik</strong>
          <span>650.678.4669</span>
        </a>
      </div>
    </div>
  </section>
</div>

<style>
  .page {
    min-height: 100vh;
    background: #f5f6f8;
  }

  /* ---- NAV ---- */
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

  .nav-logo span {
    color: #b8963e;
  }

  .nav-links {
    display: flex;
    gap: 0.25rem;
  }

  .nav-link {
    color: #c9d1de;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: color 0.2s, background 0.2s;
    letter-spacing: 0.02em;
  }

  .nav-link:hover,
  .nav-link.active {
    color: #ffffff;
    background: rgba(184, 150, 62, 0.15);
  }

  .nav-link.active {
    color: #b8963e;
  }

  /* ---- HERO ---- */
  .hero {
    position: relative;
    height: 580px;
    overflow: hidden;
  }

  .hero-image-wrap {
    position: absolute;
    inset: 0;
  }

  .hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(10, 22, 40, 0.88) 0%, rgba(10, 22, 40, 0.4) 60%, transparent 100%);
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.6rem;
  }

  .for-sale-badge {
    display: inline-block;
    background: #b8963e;
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    padding: 0.35rem 0.9rem;
    border-radius: 3px;
    width: fit-content;
    text-transform: uppercase;
  }

  .hero-address {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    color: #ffffff;
    line-height: 1.1;
    margin: 0;
    text-shadow: 0 2px 8px rgba(0,0,0,0.3);
  }

  .hero-city {
    font-size: 1.2rem;
    color: #c9d1de;
    margin: 0;
  }

  .hero-price {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 700;
    color: #b8963e;
    margin: 0.25rem 0 0;
  }

  .hero-type {
    font-size: 1rem;
    color: #c9d1de;
    margin: 0;
    letter-spacing: 0.04em;
  }

  .hero-cta-row {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  .btn-primary {
    background: #b8963e;
    color: #ffffff;
    padding: 0.75rem 1.75rem;
    border-radius: 4px;
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.04em;
    transition: background 0.2s, transform 0.1s;
  }

  .btn-primary:hover {
    background: #a07a2a;
    transform: translateY(-1px);
  }

  .btn-secondary {
    background: transparent;
    color: #ffffff;
    padding: 0.75rem 1.75rem;
    border-radius: 4px;
    font-weight: 600;
    font-size: 0.9rem;
    border: 2px solid rgba(255,255,255,0.5);
    letter-spacing: 0.04em;
    transition: border-color 0.2s, background 0.2s;
  }

  .btn-secondary:hover {
    border-color: #ffffff;
    background: rgba(255,255,255,0.1);
  }

  /* ---- STATS BAR ---- */
  .stats-bar {
    background: #0a1628;
    border-bottom: 2px solid #1e2d45;
  }

  .stats-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
  }

  .stat {
    padding: 1.5rem 3rem;
    text-align: center;
  }

  .stat-value {
    font-size: 1.75rem;
    font-weight: 700;
    color: #b8963e;
    line-height: 1;
  }

  .stat-label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #7a8fa6;
    margin-top: 0.4rem;
  }

  .stat-divider {
    width: 1px;
    height: 40px;
    background: #1e2d45;
  }

  /* ---- SECTION SHARED ---- */
  .section-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }

  .section-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #0a1628;
    margin: 0 0 2.5rem 0;
    position: relative;
    padding-bottom: 1rem;
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: #b8963e;
    border-radius: 2px;
  }

  /* ---- HIGHLIGHTS ---- */
  .highlights {
    background: #ffffff;
  }

  .highlights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .highlight-card {
    background: #f5f6f8;
    border: 1px solid #e2e6ed;
    border-radius: 8px;
    padding: 1.75rem;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .highlight-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(10, 22, 40, 0.1);
  }

  .highlight-icon {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }

  .highlight-card h3 {
    font-size: 1rem;
    font-weight: 700;
    color: #0a1628;
    margin: 0 0 0.6rem 0;
  }

  .highlight-card p {
    font-size: 0.875rem;
    line-height: 1.65;
    color: #4a5a72;
    margin: 0;
  }

  /* ---- GALLERY ---- */
  .gallery-preview {
    background: #f5f6f8;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
    border-radius: 8px;
    overflow: hidden;
  }

  .gallery-main img,
  .gallery-side img {
    width: 100%;
    height: 340px;
    object-fit: cover;
    display: block;
  }

  /* ---- CTA ---- */
  .cta-section {
    background: linear-gradient(135deg, #0a1628 0%, #1a2d4e 100%);
  }

  .cta-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
    text-align: center;
  }

  .cta-inner h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 0.75rem 0;
  }

  .cta-inner p {
    color: #c9d1de;
    font-size: 1rem;
    margin: 0 0 2rem 0;
  }

  .cta-agents {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .agent-pill {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(184,150,62,0.4);
    border-radius: 8px;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    align-items: center;
    transition: background 0.2s, border-color 0.2s;
  }

  .agent-pill:hover {
    background: rgba(184,150,62,0.15);
    border-color: #b8963e;
  }

  .agent-pill strong {
    color: #ffffff;
    font-size: 1rem;
  }

  .agent-pill span {
    color: #b8963e;
    font-size: 0.875rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
    .hero {
      height: 420px;
    }
    .stats-inner {
      flex-wrap: wrap;
    }
    .stat {
      padding: 1rem 1.5rem;
    }
    .stat-divider {
      display: none;
    }
    .gallery-grid {
      grid-template-columns: 1fr;
    }
    .gallery-side {
      display: none;
    }
  }
</style>
