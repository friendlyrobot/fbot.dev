import { Plugin } from "vite";
import fs from "fs";
import path from "path";

interface SitemapOptions {
  baseUrl: string;
  routes?: string[];
  routeFile?: string;
  outputPath?: string;
}

function extractRoutesFromFile(filePath: string): string[] {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const routes: string[] = [];

    // Regex to match <Route path="..." patterns
    const routeRegex = /<Route\s+path=["']([^"']+)["']/g;
    let match;

    while ((match = routeRegex.exec(content)) !== null) {
      const routePath = match[1];
      // Skip catch-all routes like "*"
      if (routePath !== "*") {
        routes.push(routePath);
      }
    }

    return routes.sort();
  } catch (error) {
    console.warn(`Warning: Could not extract routes from ${filePath}:`, error);
    return [];
  }
}

export function sitemapPlugin(options: SitemapOptions): Plugin {
  return {
    name: "vite-sitemap-generator",
    writeBundle() {
      const {
        baseUrl,
        routes: manualRoutes,
        routeFile = "src/App.tsx",
        outputPath = "sitemap.txt",
      } = options;

      // Use manual routes if provided, otherwise extract from file
      const routes = manualRoutes || extractRoutesFromFile(routeFile);

      if (routes.length === 0) {
        console.warn("Warning: No routes found for sitemap generation");
        return;
      }

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
      console.log(
        `✓ Generated ${outputPath} with ${routes.length} routes (auto-extracted from ${routeFile})`,
      );
    },
  };
}
