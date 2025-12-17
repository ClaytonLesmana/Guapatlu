// JSON-LD Structured Data for Restaurant
export const restaurantStructuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Guapatlu",
  description:
    "Bakmi Khas Jambi dengan resep turun temurun. Menyajikan mie kenyal dengan kuah gurih, daging babi cincang, bakso ikan, dan otak-otak.",
  image: "https://guapatlu.com/logo.png",
  "@id": "https://guapatlu.com",
  url: "https://guapatlu.com",
  telephone: "+62-XXX-XXXX-XXXX", // Replace with actual phone
  priceRange: "Rp 15.000 - Rp 150.000",
  servesCuisine: ["Indonesian", "Chinese", "Jambi Cuisine"],
  acceptsReservations: "False",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Street Address", // Replace with actual address
    addressLocality: "Jakarta",
    addressRegion: "DKI Jakarta",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.2088, // Replace with actual coordinates
    longitude: 106.8456,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "22:00",
    },
  ],
  menu: "https://guapatlu.com/menu",
  hasMenu: {
    "@type": "Menu",
    "@id": "https://guapatlu.com/menu",
  },
  sameAs: [
    "https://www.instagram.com/guapatlu", // Add actual social media URLs
    "https://www.facebook.com/guapatlu",
  ],
  paymentAccepted: "Cash, Credit Card, Debit Card, Digital Payment",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
  },
};

// Website Structured Data
export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Guapatlu",
  url: "https://guapatlu.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://guapatlu.com/menu?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// Organization Structured Data
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Guapatlu",
  url: "https://guapatlu.com",
  logo: "https://guapatlu.com/logo.png",
  description: "Restoran Bakmi Khas Jambi dengan resep turun temurun",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Street Address", // Replace with actual address
    addressLocality: "Jakarta",
    addressRegion: "DKI Jakarta",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-XXX-XXXX-XXXX", // Replace with actual phone
    contactType: "customer service",
    availableLanguage: ["Indonesian", "English"],
  },
  sameAs: [
    "https://www.instagram.com/guapatlu",
    "https://www.facebook.com/guapatlu",
  ],
};

// Breadcrumb Structured Data Generator
export const generateBreadcrumbStructuredData = (
  items: { name: string; url: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Menu Item Structured Data Generator
export const generateMenuItemStructuredData = (menuItems: any[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: menuItems.map((item, index) => ({
    "@type": "MenuItem",
    position: index + 1,
    name: item.name,
    description: item.detailedDescription || item.briefDescription,
    image: `https://guapatlu.com${item.image}`,
    offers: {
      "@type": "Offer",
      // price: item.price.replace('Rp.', '').replace('.', ''),
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
    },
  })),
});
