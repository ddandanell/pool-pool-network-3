import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

export function SEOHead({ 
  title, 
  description, 
  keywords = "pool service Bali, pool maintenance Bali, pool cleaning Bali, pool repair Bali, swimming pool installation Bali, Bali pool experts",
  canonicalUrl,
  ogImage = "/opengraph.jpg",
  ogType = "website"
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to update or create meta elements
    const upsertMeta = (attr: string, value: string, content: string, isProperty: boolean = false) => {
      const selector = isProperty ? `meta[property="${value}"]` : `meta[name="${value}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(isProperty ? 'property' : 'name', value);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    const upsertLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // Standard meta
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', keywords);

    // Open Graph
    upsertMeta('property', 'og:title', title, true);
    upsertMeta('property', 'og:description', description, true);
    upsertMeta('property', 'og:image', ogImage, true);
    upsertMeta('property', 'og:url', canonicalUrl || window.location.href, true);
    upsertMeta('property', 'og:type', ogType, true);
    upsertMeta('property', 'og:site_name', 'Bali Pool Care', true);
    upsertMeta('property', 'og:locale', 'en_US', true);

    // Twitter Card
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImage);
    upsertMeta('name', 'twitter:url', canonicalUrl || window.location.href);

    // Canonical URL
    upsertLink('canonical', canonicalUrl || window.location.href);
  }, [title, description, keywords, canonicalUrl, ogImage, ogType]);

  return null;
}
