import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static"; // required for `output: 'export'`

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: site.url,
  };
}
