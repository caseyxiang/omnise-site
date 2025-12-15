import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://omnise.ai",
  integrations: [react(), tailwind({ applyBaseStyles: true })],
  output: "server",
  adapter: cloudflare(),
});
