<script>
  export let title = 'Premium Features';
  export let features = [
    'Operable Windows',
    'Conference Room',
    'Flexible Lease Terms',
    'Bar/Restaurant Onsite',
    'Modern Lighting',
    'Move-in Ready'
  ];
</script>

<section class="features">
  <div class="features-content">
    <h2>{title}</h2>
    <div class="features-grid">
      {#each features as feature}
        <div class="feature-item">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span>{feature}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .features {
    padding: 4rem 2rem;
    background-color: #f8fafc;
  }

  .features-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .features-content h2 {
    margin: 0 0 3rem 0;
    font-size: 2rem;
    color: #1e293b;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s;
  }

  .feature-item:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .feature-icon {
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    color: #fbbf24;
  }

  .feature-item span {
    font-weight: 500;
    color: #1e293b;
  }
</style>
