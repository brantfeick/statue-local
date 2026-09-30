<script>
  export let title = 'Office Space For Lease';
  export let subtitle = '260 Kearny Street, San Francisco';
  export let size = '1,500 +/- Sq.Ft.';
  export let price = '$3.00 PSF/YR';
  export let image = '/assets/page-1.png';
</script>

<section class="property-header">
  <div class="header-content">
    <div class="text-content">
      <h1>{title}</h1>
      <p class="subtitle">{subtitle}</p>
      <div class="key-info">
        <div class="info-item">
          <span class="label">Size</span>
          <span class="value">{size}</span>
        </div>
        <div class="info-item">
          <span class="label">Rate</span>
          <span class="value">{price}</span>
        </div>
      </div>
      <p class="availability">Available Now • Full Floor or Flexible Terms</p>
    </div>
    <div class="image-content">
      <img src={image} alt={title} />
    </div>
  </div>
</section>

<style>
  .property-header {
    background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
    color: white;
    padding: 3rem 2rem;
  }

  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .text-content h1 {
    margin: 0 0 0.5rem 0;
    font-size: 3rem;
    line-height: 1.2;
  }

  .subtitle {
    font-size: 1.25rem;
    color: #cbd5e1;
    margin: 0 0 2rem 0;
  }

  .key-info {
    display: flex;
    gap: 3rem;
    margin-bottom: 2rem;
  }

  .info-item {
    display: flex;
    flex-direction: column;
  }

  .label {
    font-size: 0.875rem;
    color: #94a3b8;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }

  .value {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fbbf24;
  }

  .availability {
    font-size: 1rem;
    color: #93c5fd;
    margin: 0;
  }

  .image-content {
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  }

  .image-content img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 768px) {
    .header-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .text-content h1 {
      font-size: 2rem;
    }

    .key-info {
      flex-direction: column;
      gap: 1.5rem;
    }
  }
</style>
