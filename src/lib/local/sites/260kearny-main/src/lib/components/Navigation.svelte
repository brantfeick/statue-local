<script>
  import { siteConfig } from '$lib/site.config.js';
  import { page } from '$app/stores';
</script>

<nav class="nav-bar">
  <div class="nav-content">
    <a href="/" class="nav-logo">
      {siteConfig.site.name}
    </a>
    <div class="nav-links">
      {#each siteConfig.navbar.defaultNavItems as item}
        <a href={item.url} class="nav-link" class:active={$page.url.pathname === item.url}>
          {item.title}
        </a>
      {/each}
      <a href="mailto:{siteConfig.contact.email}" class="nav-cta">
        Inquire Now
      </a>
    </div>
  </div>
</nav>

<style>
  .nav-bar {
    background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
    color: white;
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fbbf24;
    text-decoration: none;
    transition: color 0.2s;
  }

  .nav-logo:hover {
    color: #f59e0b;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .nav-link {
    color: white;
    text-decoration: none;
    transition: color 0.2s;
    position: relative;
  }

  .nav-link:hover {
    color: #fbbf24;
  }

  .nav-link.active {
    color: #fbbf24;
  }

  .nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -0.25rem;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #fbbf24;
  }

  .nav-cta {
    background-color: #fbbf24;
    color: #1e3a8a;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.2s;
  }

  .nav-cta:hover {
    background-color: #f59e0b;
  }

  @media (max-width: 768px) {
    .nav-links {
      gap: 1rem;
      font-size: 0.875rem;
    }

    .nav-cta {
      padding: 0.4rem 0.8rem;
      font-size: 0.875rem;
    }
  }
</style>
