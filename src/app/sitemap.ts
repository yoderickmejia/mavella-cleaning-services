import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/about",
    "/how-it-works",
    "/cleaning-tips",
    "/contact",
    "/quote",
    "/privacy-policy",
    "/terms-of-service",
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/quote" || path === "/services" ? 0.9 : 0.7,
  }));
}
