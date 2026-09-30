// Site Configuration
// This file contains your site's general settings
// You can manage email addresses, social media links, and other contact information from here

export const siteConfig = {
  // Site general information
  site: {
    name: "222 Columbus Avenue",
    description: "Boutique Office Suites For Lease in San Francisco, CA",
    url: "https://222columbus.com",
    author: "Ground Matrix"
  },

  // Navigation bar configuration
  navbar: {
    // Site title displayed in the navbar (null to hide)
    siteTitle: "222 Columbus",

    // Logo image URL (null or false for no logo)
    logo: null,

    // Default navigation items (add cta: true for CTA button style)
    defaultNavItems: [
      { title: 'Home', url: '/' },
      { title: 'About', url: '/about' },
      { title: 'Contact', url: '/contact', cta: true }
    ],

    // Hide these directories from navbar (by folder name content/foldername)
    hiddenFromNav: ['legal']
  },

  // Contact information
  contact: {
    // Main contact email
    email: "jerry@groundmatrix.com",

    // Privacy policy related email
    privacyEmail: "jerry@groundmatrix.com",

    // Support email
    supportEmail: "jerry@groundmatrix.com",

    // Phone number (optional)
    phone: "707.570.7802",

    // Mailing address
    address: {
      street: "222 Columbus Avenue, Suite 420",
      city: "San Francisco",
      state: "CA",
      zipCode: "94133",
      country: "United States"
    }
  },

  // Social media links
  social: {
    twitter: "",
    github: "",
    linkedin: "",
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
    defaultTitle: "222 Columbus Avenue - Office Suites For Lease",
    titleTemplate: "%s | 222 Columbus",
    defaultDescription: "Boutique office suites available for lease in San Francisco, CA. Located at 222 Columbus Avenue in a prime downtown location.",
    keywords: ["office space", "commercial real estate", "lease", "San Francisco", "Columbus Avenue"],
    ogImage: "/assets/property-showcase.jpg",
    twitterCard: "summary_large_image"
  }
};

// Export configuration
export default siteConfig; 
