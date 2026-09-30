<script lang="ts">
  import siteConfig from '../../../site.config.js';
</script>

<svelte:head>
  <title>Location | {siteConfig.seo.defaultTitle}</title>
  <meta name="description" content="Location details for 4322 Geary Blvd — Geary/Divisadero Medical Corridor, near Kaiser Permanente, Inner Richmond, San Francisco." />
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
        <a href="/location" class="nav-link active">Location</a>
        <a href="/agents" class="nav-link">Agents</a>
      </div>
    </div>
  </nav>

  <!-- Page Header -->
  <section class="page-header">
    <div class="page-header-inner">
      <div class="breadcrumb"><a href="/">4322 Geary Blvd</a> / Location</div>
      <h1>Location</h1>
      <p class="page-subtitle">Geary / Divisadero Medical Corridor — Inner Richmond, San Francisco</p>
    </div>
  </section>

  <!-- Map + Info -->
  <section class="map-section">
    <div class="section-inner">
      <div class="map-layout">
        <div class="map-image-wrap">
          <img src="/assets/page4_Im0.jpeg" alt="Nearby medical services map for 4322 Geary Blvd" class="map-image" />
          <div class="map-pin-overlay">
            <div class="map-pin-label">4322 Geary St.</div>
          </div>
        </div>
        <div class="map-details">
          <h2>Address</h2>
          <div class="address-block">
            <div class="address-line-main">4322 Geary Blvd</div>
            <div class="address-line">San Francisco, CA 94118</div>
          </div>

          <div class="transit-info">
            <h3>Transit Access</h3>
            <p>Multiple Muni bus lines serve the Geary corridor directly, providing excellent transit access for patients and staff.</p>
            <div class="transit-tag">🚌 Multiple Public Bus Lines</div>
          </div>

          <div class="corridor-info">
            <h3>Medical Corridor</h3>
            <p>4322 Geary Blvd is positioned within the established <strong>Geary / Divisadero Medical Corridor</strong> — a concentration of healthcare providers that drives consistent patient foot traffic.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Nearby Medical -->
  <section class="nearby-section">
    <div class="section-inner">
      <h2 class="section-title">Nearby Medical Services</h2>
      <div class="nearby-grid">
        <div class="nearby-card anchor">
          <div class="nearby-logo">KP</div>
          <div class="nearby-info">
            <h3>Kaiser Permanente – French Campus</h3>
            <p>Major health system anchor — large established patient base in the corridor</p>
            <span class="nearby-type">Medical Clinic &amp; Rehabilitation</span>
          </div>
        </div>
        <div class="nearby-card">
          <div class="nearby-logo">FC</div>
          <div class="nearby-info">
            <h3>Fog City Medical Clinic</h3>
            <p>Primary care &amp; specialty doctors serving the Inner Richmond community</p>
            <span class="nearby-type">Primary Care / Specialty</span>
          </div>
        </div>
        <div class="nearby-card">
          <div class="nearby-logo">SF</div>
          <div class="nearby-info">
            <h3>SF Clinic</h3>
            <p>Local clinical services with strong community ties in the Richmond District</p>
            <span class="nearby-type">Medical Clinic</span>
          </div>
        </div>
        <div class="nearby-card">
          <div class="nearby-logo">PH</div>
          <div class="nearby-info">
            <h3>Passport Health</h3>
            <p>Allied health services providing travel and occupational health programs</p>
            <span class="nearby-type">Allied Health Services</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Neighborhood -->
  <section class="neighborhood-section">
    <div class="section-inner">
      <h2 class="section-title">Neighborhood Overview</h2>
      <div class="neighborhood-grid">
        <div class="nb-card">
          <h3>Inner Richmond</h3>
          <p>One of San Francisco's most established neighborhoods, featuring a dense mix of residential housing, local businesses, and restaurants. The area draws a loyal, stable patient base for healthcare providers.</p>
        </div>
        <div class="nb-card">
          <h3>Supply-Constrained Submarket</h3>
          <p>Limited new commercial development keeps existing medical space highly valuable. The Inner Richmond has seen minimal new construction, making turnkey medical buildings like 4322 Geary exceptionally rare.</p>
        </div>
        <div class="nb-card">
          <h3>Strong Branding Identity</h3>
          <p>Geary Boulevard is a high-visibility, high-traffic arterial street with excellent storefront exposure. Practices at this address benefit from strong signage potential and walk-by awareness.</p>
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
  .breadcrumb { font-size: 0.8rem; color: #7a8fa6; margin-bottom: 0.75rem; }
  .breadcrumb a { color: #b8963e; }
  .page-header h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #ffffff;
    margin: 0 0 0.5rem;
  }
  .page-subtitle { color: #c9d1de; font-size: 1rem; margin: 0; }

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

  /* MAP SECTION */
  .map-section { background: #ffffff; }
  .map-layout {
    display: grid;
    grid-template-columns: 1fr 350px;
    gap: 3rem;
    align-items: start;
  }
  .map-image-wrap {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(10,22,40,0.12);
  }
  .map-image { width: 100%; display: block; }
  .map-pin-overlay {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }
  .map-pin-label {
    background: #b8963e;
    color: #ffffff;
    font-size: 0.8rem;
    font-weight: 700;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
  }
  .map-details h2 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #0a1628;
    margin: 0 0 1rem;
  }
  .address-block {
    background: #f5f6f8;
    border: 1px solid #e2e6ed;
    border-radius: 8px;
    padding: 1.25rem 1.5rem;
    margin-bottom: 1.5rem;
  }
  .address-line-main {
    font-size: 1.3rem;
    font-weight: 700;
    color: #0a1628;
  }
  .address-line {
    font-size: 0.9rem;
    color: #4a5a72;
    margin-top: 0.25rem;
  }
  .transit-info, .corridor-info {
    margin-bottom: 1.5rem;
  }
  .transit-info h3, .corridor-info h3 {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #b8963e;
    margin: 0 0 0.5rem;
  }
  .transit-info p, .corridor-info p {
    font-size: 0.875rem;
    color: #4a5a72;
    line-height: 1.6;
    margin: 0 0 0.75rem;
  }
  .transit-tag {
    display: inline-block;
    background: #0a1628;
    color: #c9d1de;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.35rem 0.8rem;
    border-radius: 4px;
  }

  /* NEARBY */
  .nearby-section { background: #f5f6f8; }
  .nearby-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.25rem;
  }
  .nearby-card {
    background: #ffffff;
    border: 1px solid #e2e6ed;
    border-radius: 8px;
    padding: 1.5rem;
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .nearby-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(10,22,40,0.08);
  }
  .nearby-card.anchor {
    border-color: #b8963e;
    background: linear-gradient(135deg, #fffbf2 0%, #ffffff 100%);
  }
  .nearby-logo {
    background: #0a1628;
    color: #b8963e;
    font-size: 0.85rem;
    font-weight: 800;
    width: 44px;
    height: 44px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    letter-spacing: 0.05em;
  }
  .nearby-card.anchor .nearby-logo {
    background: #b8963e;
    color: #ffffff;
  }
  .nearby-info h3 {
    font-size: 0.95rem;
    font-weight: 700;
    color: #0a1628;
    margin: 0 0 0.4rem;
  }
  .nearby-info p {
    font-size: 0.825rem;
    color: #4a5a72;
    margin: 0 0 0.6rem;
    line-height: 1.5;
  }
  .nearby-type {
    display: inline-block;
    font-size: 0.725rem;
    font-weight: 600;
    color: #b8963e;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  /* NEIGHBORHOOD */
  .neighborhood-section { background: #ffffff; }
  .neighborhood-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  .nb-card {
    border-left: 4px solid #b8963e;
    padding: 1.5rem 1.5rem 1.5rem 1.75rem;
    background: #f8f9fb;
    border-radius: 0 8px 8px 0;
  }
  .nb-card h3 {
    font-size: 1rem;
    font-weight: 700;
    color: #0a1628;
    margin: 0 0 0.6rem;
  }
  .nb-card p {
    font-size: 0.875rem;
    color: #4a5a72;
    line-height: 1.65;
    margin: 0;
  }

  @media (max-width: 768px) {
    .nav-links { display: none; }
    .map-layout { grid-template-columns: 1fr; }
  }
</style>
