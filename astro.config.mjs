import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robots from 'astro-robots-txt';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://www.mustmedia.ma',
  integrations: [
    tailwind(),
    sitemap({
      customPages: [
        'https://www.mustmedia.ma/pricing',
        'https://www.mustmedia.ma/case-studies',
        'https://www.mustmedia.ma/about'
      ],
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr-MA'
        }
      }
    }),
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
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssCodeSplit: false
    }
  },
  output: 'server',
  adapter: vercel({
    runtime: 'nodejs18.x',
  })
});