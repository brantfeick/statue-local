<script lang="ts">
  import siteConfig from '../../../site.config.js';
</script>

<svelte:head>
  <title>Floorplan | {siteConfig.seo.defaultTitle}</title>
  <meta name="description" content="Floorplan for 4322 Geary Blvd — 6 exam rooms, 2 ADA restrooms, private offices, large reception area." />
</svelte:head>

<div class="page">
  <!-- Navigation -->
  <nav class="nav-bar">
    <div class="nav-content">
      <a href="/" class="nav-logo">STARBOARD<span>CRE</span></a>
      <div class="nav-links">
        <a href="/" class="nav-link">Overview</a>
        <a href="/summary" class="nav-link">Summary</a>
        <a href="/floorplan" class="nav-link active">Floorplan</a>
        <a href="/location" class="nav-link">Location</a>
        <a href="/agents" class="nav-link">Agents</a>
      </div>
    </div>
  </nav>

  <!-- Page Header -->
  <section class="page-header">
    <div class="page-header-inner">
      <div class="breadcrumb"><a href="/">4322 Geary Blvd</a> / Floorplan</div>
      <h1>Floorplan</h1>
      <p class="page-subtitle">Remodeled in 2011 — fully built-out medical office space</p>
    </div>
  </section>

  <!-- Floorplan Image -->
  <section class="floorplan-section">
    <div class="section-inner">
      <div class="fp-layout">
        <div class="fp-image-wrap">
          <img src="/assets/page3_Im0.jpeg" alt="4322 Geary Blvd floorplan" class="fp-image" />
          <div class="fp-badge">±2,250 SF</div>
        </div>
        <div class="fp-specs">
          <h2>Space Specifications</h2>

          <div class="spec-group">
            <h3>Clinical Spaces</h3>
            <ul>
              <li>
                <span class="spec-num">6</span>
                <span>Exam rooms, all with sinks</span>
              </li>
              <li>
                <span class="spec-num">2</span>
                <span>ADA-compliant restrooms</span>
              </li>
              <li>
                <span class="spec-num">1</span>
                <span>Large reception area</span>
              </li>
            </ul>
          </div>

          <div class="spec-group">
            <h3>Support Spaces</h3>
            <ul>
              <li>
                <span class="spec-num">2</span>
                <span>Private offices</span>
              </li>
              <li>
                <span class="spec-num">3</span>
                <span>Storage rooms</span>
              </li>
              <li>
                <span class="spec-num">1</span>
                <span>Staff lounge with sink</span>
              </li>
              <li>
                <span class="spec-num">1</span>
                <span>Small backyard</span>
              </li>
            </ul>
          </div>

          <div class="spec-group">
            <h3>Infrastructure</h3>
            <ul class="infra-list">
              <li>✓ New HVAC, Electrical &amp; Plumbing (2011)</li>
              <li>✓ New Roof (2012)</li>
              <li>✓ Internet wired in all rooms (except storage)</li>
              <li>✓ ADA accessible</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Room Grid -->
  <section class="rooms-section">
    <div class="section-inner">
      <h2 class="section-title">Room-by-Room Breakdown</h2>
      <div class="rooms-grid">
        <div class="room-card exam">
          <div class="room-icon">🩺</div>
          <div class="room-count">6</div>
          <div class="room-name">Exam Rooms</div>
          <div class="room-detail">Each with dedicated sink</div>
        </div>
        <div class="room-card restroom">
          <div class="room-icon">♿</div>
          <div class="room-count">2</div>
          <div class="room-name">ADA Restrooms</div>
          <div class="room-detail">Fully compliant</div>
        </div>
        <div class="room-card office">
          <div class="room-icon">💼</div>
          <div class="room-count">2</div>
          <div class="room-name">Private Offices</div>
          <div class="room-detail">Administrative workspace</div>
        </div>
        <div class="room-card storage">
          <div class="room-icon">📦</div>
          <div class="room-count">3</div>
          <div class="room-name">Storage Rooms</div>
          <div class="room-detail">Dedicated storage space</div>
        </div>
        <div class="room-card lounge">
          <div class="room-icon">☕</div>
          <div class="room-count">1</div>
          <div class="room-name">Staff Lounge</div>
          <div class="room-detail">With sink</div>
        </div>
        <div class="room-card reception">
          <div class="room-icon">🛎️</div>
          <div class="room-count">1</div>
          <div class="room-name">Reception Area</div>
          <div class="room-detail">Large, welcoming entry</div>
        </div>
        <div class="room-card backyard">
          <div class="room-icon">🌿</div>
          <div class="room-count">1</div>
          <div class="room-name">Backyard</div>
          <div class="room-detail">Private outdoor space</div>
        </div>
        <div class="room-card kitchen">
          <div class="room-icon">🍽️</div>
          <div class="room-count">1</div>
          <div class="room-name">In-Suite Kitchen</div>
          <div class="room-detail">Full kitchen on site</div>
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

  /* FLOORPLAN SECTION */
  .floorplan-section { background: #ffffff; }
  .section-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 2rem;
  }
  .fp-layout {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 3rem;
    align-items: start;
  }
  .fp-image-wrap {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(10,22,40,0.12);
  }
  .fp-image {
    width: 100%;
    display: block;
  }
  .fp-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #b8963e;
    color: #ffffff;
    font-size: 0.85rem;
    font-weight: 700;
    padding: 0.4rem 0.9rem;
    border-radius: 4px;
    letter-spacing: 0.08em;
  }
  .fp-specs h2 {
    font-size: 1.4rem;
    font-weight: 700;
    color: #0a1628;
    margin: 0 0 1.5rem;
  }
  .spec-group {
    margin-bottom: 1.75rem;
  }
  .spec-group h3 {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #b8963e;
    margin: 0 0 0.75rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #e2e6ed;
  }
  .spec-group ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
  .spec-group li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.9rem;
    color: #1a2740;
  }
  .spec-num {
    background: #0a1628;
    color: #b8963e;
    font-size: 0.85rem;
    font-weight: 700;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .infra-list li {
    font-size: 0.875rem;
    color: #1a2740;
    padding: 0.3rem 0;
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  /* ROOMS SECTION */
  .rooms-section { background: #f5f6f8; }
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
  .rooms-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  .room-card {
    background: #ffffff;
    border: 1px solid #e2e6ed;
    border-radius: 8px;
    padding: 1.5rem;
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .room-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(10,22,40,0.08);
  }
  .room-icon { font-size: 1.75rem; margin-bottom: 0.5rem; }
  .room-count {
    font-size: 2rem;
    font-weight: 800;
    color: #b8963e;
    line-height: 1;
  }
  .room-name {
    font-size: 0.875rem;
    font-weight: 600;
    color: #0a1628;
    margin: 0.4rem 0 0.2rem;
  }
  .room-detail {
    font-size: 0.775rem;
    color: #7a8fa6;
  }

  @media (max-width: 768px) {
    .nav-links { display: none; }
    .fp-layout { grid-template-columns: 1fr; }
  }
</style>
