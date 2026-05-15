import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.siatlab.top",
  output: "static",
  integrations: [sitemap()]
});
