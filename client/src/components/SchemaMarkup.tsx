import { useEffect } from "react";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://balipoolpros.com",
  "name": "Bali Pool Pros - Pool Service Bali",
  "alternateName": "Bali Pool Repair Lab",
  "description": "Bali's premier pool service company specializing in pool maintenance, repair, cleaning, and installation. Expert technicians serving villas, resorts, and residential properties across Bali.",
  "url": "https://balipoolpros.com",
  "logo": "https://balipoolpros.com/favicon.png",
  "image": "https://balipoolpros.com/opengraph.jpg",
  "telephone": "+62 823-2301-1656",
  "email": "info@balipoolpros.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Raya Ubud No. 45",
    "addressLocality": "Gianyar",
    "addressRegion": "Bali",
    "postalCode": "80571",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -8.5069,
    "longitude": 115.2625
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://facebook.com/balipoolpros",
    "https://instagram.com/balipoolpros",
    "https://linkedin.com/company/balipoolpros"
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Ubud"
    },
    {
      "@type": "City",
      "name": "Seminyak"
    },
    {
      "@type": "City",
      "name": "Canggu"
    },
    {
      "@type": "City",
      "name": "Sanur"
    },
    {
      "@type": "City",
      "name": "Nusa Dua"
    },
    {
      "@type": "City",
      "name": "Jimbaran"
    },
    {
      "@type": "City",
      "name": "Uluwatu"
    },
    {
      "@type": "City",
      "name": "Kuta"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pool Services in Bali",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pool Maintenance Bali",
          "description": "Weekly and monthly pool maintenance services including water testing, chemical balancing, and cleaning"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pool Repair Bali",
          "description": "Expert pool repair services including leak detection, pump repair, and equipment maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pool Installation Bali",
          "description": "Complete pool installation services from design to construction for villas and resorts"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pool Cleaning Bali",
          "description": "Professional pool cleaning services to maintain crystal clear water in Bali's tropical climate"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "487",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export function SchemaMarkup() {
  useEffect(() => {
    // Remove existing schema script if present
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Create new schema script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
