<script>
  export let title = 'Gallery';
  export let images = [
    { src: '/assets/page-2.png', alt: 'Interior View 1' },
    { src: '/assets/page-2.png', alt: 'Interior View 2' },
    { src: '/assets/page-2.png', alt: 'Interior View 3' },
    { src: '/assets/page-2.png', alt: 'Interior View 4' },
    { src: '/assets/page-2.png', alt: 'Interior View 5' },
    { src: '/assets/page-2.png', alt: 'Interior View 6' }
  ];

  let selectedImage = null;
</script>

<section class="gallery-section">
  <div class="gallery-content">
    <h2>{title}</h2>
    <div class="gallery-grid">
      {#each images as image, index}
        <div class="gallery-item" role="button" tabindex="0" on:click={() => (selectedImage = index)} on:keydown={(e) => e.key === 'Enter' && (selectedImage = index)}>
          <img src={image.src} alt={image.alt} />
          <div class="overlay">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 16 16 12 12 8 8 12 12 16"></polyline>
            </svg>
          </div>
        </div>
      {/each}
    </div>
  </div>

  {#if selectedImage !== null}
    <div class="lightbox" role="dialog" on:click={() => (selectedImage = null)} on:keydown={(e) => e.key === 'Escape' && (selectedImage = null)}>
      <button class="close-btn" on:click={() => (selectedImage = null)} aria-label="Close">×</button>
      <button class="prev-btn" on:click={() => (selectedImage = (selectedImage - 1 + images.length) % images.length)} aria-label="Previous">‹</button>
      <div class="lightbox-content">
        <img src={images[selectedImage].src} alt={images[selectedImage].alt} />
      </div>
      <button class="next-btn" on:click={() => (selectedImage = (selectedImage + 1) % images.length)} aria-label="Next">›</button>
    </div>
  {/if}
</section>

<style>
  .gallery-section {
    padding: 4rem 2rem;
  }

  .gallery-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .gallery-content h2 {
    margin: 0 0 3rem 0;
    font-size: 2rem;
    color: #1e293b;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    cursor: pointer;
    aspect-ratio: 1;
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .gallery-item:hover img {
    transform: scale(1.05);
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .gallery-item:hover .overlay {
    opacity: 1;
  }

  .overlay svg {
    width: 2rem;
    height: 2rem;
    color: white;
  }

  .lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .lightbox-content {
    max-width: 90vw;
    max-height: 90vh;
    position: relative;
  }

  .lightbox-content img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .close-btn,
  .prev-btn,
  .next-btn {
    position: absolute;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    padding: 1rem;
    transition: color 0.2s;
  }

  .close-btn {
    top: 1rem;
    right: 1rem;
  }

  .prev-btn {
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .next-btn {
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .close-btn:hover,
  .prev-btn:hover,
  .next-btn:hover {
    color: #fbbf24;
  }

  @media (max-width: 768px) {
    .gallery-grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
    }

    .close-btn,
    .prev-btn,
    .next-btn {
      font-size: 1.5rem;
      padding: 0.5rem;
    }
  }
</style>
