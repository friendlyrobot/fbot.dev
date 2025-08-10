import { Plugin } from "vite";
import fs from "fs";
import path from "path";

interface SitemapOptions {
  baseUrl: string;
  routes: string[];
  outputPath?: string;
}

export function sitemapPlugin(options: SitemapOptions): Plugin {
  return {
    name: "vite-sitemap-generator",
    writeBundle() {
      const { baseUrl, routes, outputPath = "sitemap.txt" } = options;

      // Generate sitemap content
      const sitemapContent = routes
        .map((route) => `${baseUrl}${route}`)
        .join("\n");

      // Write sitemap to dist folder
      const distPath = path.resolve(process.cwd(), "dist");
      const sitemapPath = path.join(distPath, outputPath);

      if (!fs.existsSync(distPath)) {
        fs.mkdirSync(distPath, { recursive: true });
      }

      fs.writeFileSync(sitemapPath, sitemapContent);
      console.log(`✓ Generated ${outputPath} with ${routes.length} routes`);
    },
  };
}
