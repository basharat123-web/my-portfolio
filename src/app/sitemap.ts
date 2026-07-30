import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://basharat-hussain.dev"; // Replace with user's domain

  const workSlugs = [
    "yarana-nal-baharan-pigeon-club",
    "abs24-news-portal",
    "axiom-research-group",
    "shoq-ki-baat-live-tracking",
    "autonomous-ai-assistant-openclaw",
    "bh-tech-hub-saas-migration",
  ];

  const blogSlugs = [
    "migrating-from-wordpress-to-custom-nextjs-saas",
    "building-an-autonomous-whatsapp-ai-agent-with-openclaw",
    "building-scalable-mern-stack-apps-with-typescript",
  ];

  const routes = [
    "",
    "/about",
    "/services",
    "/work",
    "/blog",
    "/privacy",
    "/terms",
    "/documentation",
    "/support",
    "/changelog",
    "/careers",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const workRoutes = workSlugs.map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...workRoutes, ...blogRoutes];
}
