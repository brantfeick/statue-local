// Site Configuration
// This file contains your site's general settings
// You can manage email addresses, social media links, and other contact information from here

export const siteConfig = {
  // Site general information
  site: {
    name: "381 Bush Street",
    description: "Premium office space available for lease in San Francisco's financial district",
    url: "https://381bushstreet.com",
    author: "Colton Commercial"
  },

  // Navigation bar configuration
  navbar: {
    // Site title displayed in the navbar (null to hide)
    siteTitle: "381 Bush Street",

    // Logo image URL (null or false for no logo)
    logo: null,

    // Default navigation items (add cta: true for CTA button style)
    defaultNavItems: [
      { title: 'Home', url: '/' },
      { title: 'Availability', url: '/availability' },
      { title: 'Contact', url: '/contact' }
    ],

    // Hide these directories from navbar (by folder name content/foldername)
    hiddenFromNav: ['legal']
  },

  // Contact information
  contact: {
    // Main contact email
    email: "mwalker@coltoncommercialsf.com",

    // Privacy policy related email
    privacyEmail: "info@coltoncommercialsf.com",

    // Support email
    supportEmail: "info@coltoncommercialsf.com",

    // Phone number (optional)
    phone: "(415) 722-3110",

    // Mailing address
    address: {
      street: "381 Bush Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94104",
      country: "United States"
    }
  },

  // Social media links
  social: {
    twitter: "",
    github: "",
    linkedin: "https://linkedin.com/company/colton-commercial",
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
    defaultTitle: "381 Bush Street - Premium Office Space",
    titleTemplate: "%s | 381 Bush Street",
    defaultDescription: "Premium office space available for lease at 381 Bush Street in San Francisco's Financial District",
    keywords: ["office space", "commercial real estate", "san francisco", "bush street", "lease"],
    ogImage: "/assets/property-main.png",
    twitterCard: "summary_large_image"
  }
};

// Export configuration
export default siteConfig; 
