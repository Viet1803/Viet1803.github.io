import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Bộ sưu tập dự án. Mỗi file Markdown trong src/content/projects/<lang>/ là một dự án.
 * ID của entry có dạng "<lang>/<slug>", ví dụ "vi/website-ban-hang".
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    /** Tên dự án. */
    title: z.string().min(1),
    /** Mô tả ngắn (1-2 câu), dùng cho thẻ dự án và meta description. */
    description: z.string().min(1),
    /** Thời điểm hoàn thành, dùng để sắp xếp. */
    date: z.coerce.date(),
    /** Công nghệ / từ khóa. */
    tags: z.array(z.string()).default([]),
    /** Ảnh minh họa (đường dẫn trong public/), tùy chọn. */
    image: z.string().optional(),
    /** Link ngoài. */
    links: z
      .object({
        demo: z.url().optional(),
        repo: z.url().optional(),
      })
      .default({}),
    /** Hiện ở trang chủ. */
    featured: z.boolean().default(false),
    /** Khóa nối bản dịch VI và EN của cùng một dự án. */
    translationKey: z.string().min(1),
  }),
});

export const collections = { projects };
