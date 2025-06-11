import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robots from 'astro-robots-txt';

const config = defineConfig({
  site: 'https://www.mustmedia.ma',
  integrations: [
    sitemap(),
    robots({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin/', '/private/'],
        }
      ],
      sitemap: 'https://www.mustmedia.ma/sitemap-index.xml'
    })
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,

  experimental: {
    optimizeHoistedScript: true,
  }
});
import tailwind from "@astrojs/tailwind";

// Import the Vercel adapter
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel({
    runtime: 'nodejs18.x',
  }),
});