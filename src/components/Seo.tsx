import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/site.config";

// Wrapper de SEO único, reutilizado por qualquer produto via siteConfig.
export function Seo() {
  return (
    <Helmet>
      <title>{siteConfig.title}</title>
      <meta name="description" content={siteConfig.description} />
      <meta property="og:title" content={siteConfig.title} />
      <meta property="og:description" content={siteConfig.description} />
      <meta property="og:image" content={siteConfig.ogImage} />
      <meta property="og:url" content={siteConfig.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <html lang={siteConfig.locale} />
    </Helmet>
  );
}
