// @ts-check
import { defineConfig } from 'astro/config';

import formDebug from "@astro-utils/forms/dist/integration.js"
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [formDebug, tailwind(), react({ experimentalReactChildren: true })],
  adapter: node({
    mode: "standalone"
  })
});
