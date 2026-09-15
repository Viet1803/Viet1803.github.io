// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Đổi `site` thành URL thật sau khi deploy (Bước 10 trong PLAN.md).
const SITE_URL = 'https://tranhoangviet.vercel.app';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  // Trang gốc chuyển về ngôn ngữ mặc định. Bản build tĩnh sinh trang meta-refresh;
  // vercel.json bổ sung redirect HTTP thật khi chạy trên Vercel.
  redirects: {
    '/': '/vi/',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'vi',
        locales: { vi: 'vi-VN', en: 'en-US' },
      },
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
