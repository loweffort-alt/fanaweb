// @ts-check
import { defineConfig } from 'astro/config';

import formDebug from "@astro-utils/forms/dist/integration.js"
import tailwind from '@astrojs/tailwind';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [formDebug, tailwind(), react()]
});