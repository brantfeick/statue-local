// Site Configuration
export const siteConfig = {
  site: {
    name: "4322 Geary Blvd",
    description: "Medical office for sale at 4322 Geary Blvd, San Francisco, CA 94118. ±2,250 SF freestanding building priced at $2.1M.",
    url: "https://4322geary.com",
    author: "Starboard CRE"
  },

  navbar: {
    siteTitle: "4322 Geary Blvd",
    logo: null,
    defaultNavItems: [
      { title: 'Overview', url: '/' },
      { title: 'Summary', url: '/summary' },
      { title: 'Floorplan', url: '/floorplan' },
      { title: 'Location', url: '/location' },
      { title: 'Agents', url: '/agents' }
    ],
    hiddenFromNav: ['legal']
  },

  contact: {
    email: "craig@starboardcre.com",
    privacyEmail: "info@starboardcre.com",
    supportEmail: "info@starboardcre.com",
    phone: "415.765.6900",
    address: {
      street: "49 Powell Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
      country: "United States"
    }
  },

  social: {
    twitter: "",
    github: "",
    linkedin: "",
    facebook: "",
    instagram: "",
    youtube: ""
  },

  legal: {
    privacyPolicyLastUpdated: "2026-01-01",
    termsLastUpdated: "2026-01-01",
    isCaliforniaCompliant: true,
    doNotSell: {
      processingTime: "15 business days",
      confirmationRequired: true
    }
  },

  search: {
    enabled: false,
    placeholder: 'Search...',
    noResultsText: 'No results found',
    debounceMs: 300,
    minQueryLength: 2,
    maxResults: 10,
    showCategories: true,
    showDates: true,
    showExcerpts: true,
    excerptLength: 30
  },

  seo: {
    defaultTitle: "4322 Geary Blvd | Medical Office For Sale – $2.1M",
    titleTemplate: "%s | 4322 Geary Blvd",
    defaultDescription: "Turnkey freestanding medical office building for sale at 4322 Geary Blvd, San Francisco. ±2,250 SF, 6 exam rooms, $2,100,000.",
    keywords: ["medical office", "for sale", "San Francisco", "Geary Blvd", "commercial real estate", "4322 Geary"],
    ogImage: "/assets/page1_Im0.jpeg",
    twitterCard: "summary_large_image"
  }
};

export default siteConfig;
