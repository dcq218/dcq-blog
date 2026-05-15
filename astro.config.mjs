import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://www.siatlab.top",
  output: "static",
  integrations: [sitemap()],
  adapter: cloudflare()
});