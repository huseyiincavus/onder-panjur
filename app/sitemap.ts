import type { MetadataRoute } from "next";
import { serviceAreas, siteUrl } from "@/app/lib/service-areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/#anasayfa`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/#hakkimizda`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/#hizmetlerimiz`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/#iletisim`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...serviceAreas.map((area) => ({
      url: `${siteUrl}/hizmet-bolgeleri/${area.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
  ];
}
