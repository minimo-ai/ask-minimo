import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/stripe-webhook"],
      },
    ],
    sitemap: "https://askminimo.com/sitemap.xml",
    host: "https://askminimo.com",
  };
}
