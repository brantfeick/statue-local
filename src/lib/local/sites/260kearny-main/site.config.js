// Site Configuration
// This file contains your site's general settings
// You can manage email addresses, social media links, and other contact information from here

export const siteConfig = {
  // Site general information
  site: {
    name: "260 Kearny Office Space",
    description: "Premium office space for lease in San Francisco's Financial District",
    url: "https://260kearny.com",
    author: "Colton Commercial"
  },

  // Navigation bar configuration
  navbar: {
    // Site title displayed in the navbar (null to hide)
    siteTitle: "260 Kearny",

    // Logo image URL (null or false for no logo)
    logo: null,

    // Default navigation items (add cta: true for CTA button style)
    defaultNavItems: [
      { title: 'Home', url: '/' },
      { title: 'Gallery', url: '/gallery' },
      { title: 'Details', url: '/details' },
      { title: 'Location', url: '/location' }
    ],

    // Hide these directories from navbar (by folder name content/foldername)
    hiddenFromNav: ['legal']
  },

  // Contact information
  contact: {
    // Main contact email
    email: "jdshaffer@coltoncommercial.com",

    // Privacy policy related email
    privacyEmail: "contact@coltoncommercial.com",

    // Support email
    supportEmail: "support@coltoncommercial.com",

    // Phone number (optional)
    phone: "+1 (415) 402-3399",

    // Mailing address
    address: {
      street: "260 Kearny Street, 4th Floor",
      city: "San Francisco",
      state: "CA",
      zipCode: "94108",
      country: "United States"
    }
  },

  // Social media links
  social: {
    twitter: "",
    github: "",
    linkedin: "https://www.linkedin.com/company/colton-partners",
    facebook: "",
    instagram: "",
    youtube: ""
  },

  // Legal pages specific settings
  legal: {
    // Privacy policy last updated date
    privacyPolicyLastUpdated: "2024-01-15",
    
    // Terms of use last updated date
    termsLastUpdated: "2024-01-15",
    
    // CCPA/CPRA compliance for California state
    isCaliforniaCompliant: true,
    
    // Do Not Sell page additional information
    doNotSell: {
      processingTime: "15 business days",
      confirmationRequired: true
    }
  },

  // Search configuration
  search: {
    // Enable/disable search functionality
    enabled: true,

    // UI options
    placeholder: 'Search...',
    noResultsText: 'No results found',

    // Search behavior
    debounceMs: 300,
    minQueryLength: 2,
    maxResults: 10,

    // Result display options
    showCategories: true,
    showDates: true,
    showExcerpts: true,
    excerptLength: 30
  },

  // SEO and meta information
  seo: {
    defaultTitle: "260 Kearny - Premium Office Space for Lease",
    titleTemplate: "%s | 260 Kearny",
    defaultDescription: "Full floors of 1,500 +/- Sq.Ft. premium office space for lease at 260 Kearny Street in San Francisco",
    keywords: ["office space", "San Francisco", "Kearny", "commercial real estate", "lease", "financial district"],
    ogImage: "/assets/page-1.png",
    twitterCard: "summary_large_image"
  }
};

// Export configuration
export default siteConfig; 
