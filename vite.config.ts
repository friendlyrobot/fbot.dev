import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import { sitemapPlugin } from "./vite-sitemap-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // SPA fallback for development server
    historyApiFallback: true,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Plugin to create 404.html identical to index.html after build
    {
      name: "create-404-html",
      writeBundle() {
        const distPath = path.resolve(__dirname, "dist");
        const indexPath = path.join(distPath, "index.html");
        const notFoundPath = path.join(distPath, "404.html");

        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, notFoundPath);
          console.log("✓ Created 404.html identical to index.html");
        }
      },
    },
    // Sitemap generation plugin
    sitemapPlugin({
      baseUrl: "https://fbot.dev",
      routes: [
        "/",
        "/news",
        "/services",
        "/contact",
        "/products/xwriter",
        "/products/bloodhawk",
        "/products/xwriter/privacy-policy",
        "/products/bloodhawk/privacy-policy",
        "/bloodhawk/privacy-policy",
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
