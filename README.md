# Trang web cá nhân

Site tĩnh xây bằng [Astro](https://astro.build), hai ngôn ngữ (VI/EN), chế độ sáng/tối, deploy trên Vercel.

## Chạy trên máy

Cần Node.js 22 trở lên (đang dùng bản 24, xem `.nvmrc`).

```sh
npm install        # cài dependencies (chỉ lần đầu)
npm run dev        # dev server tại http://localhost:4321
npm run build      # build ra thư mục dist/
npm run preview    # xem thử bản build
npx astro check    # kiểm tra lỗi TypeScript và template
```

Trang gốc `/` tự chuyển sang `/vi/`. Bản tiếng Anh ở `/en/`.

## Sửa thông tin cá nhân

Mở [src/data/site.ts](src/data/site.ts) và thay:

- `name`: tên hiển thị ở header, footer, tiêu đề trang.
- `email`, `social`: hiện ở trang Liên hệ và footer.
- `avatar`: đường dẫn ảnh trong `public/`. Đặt ảnh thật vào `public/images/avatar.jpg` rồi đổi giá trị này.
- `cv.vi`, `cv.en`: đường dẫn file PDF trong `public/`. Để chuỗi rỗng thì nút tải CV tự ẩn.
- `url`: URL công khai của site. Phải trùng `SITE_URL` trong `astro.config.mjs` và `Sitemap:` trong `public/robots.txt`.

Tiểu sử, kỹ năng, kinh nghiệm, học vấn nằm ở [src/data/profile.ts](src/data/profile.ts), mỗi ngôn ngữ một khối.

## Sửa chữ trên giao diện

Mọi nhãn menu, nút, tiêu đề, mô tả SEO nằm ở [src/i18n/ui.ts](src/i18n/ui.ts). Mỗi khóa phải có đủ bản `vi` và `en`, TypeScript sẽ báo lỗi nếu thiếu.

## Thêm dự án

1. Tạo một file `.md` trong `src/content/projects/vi/` và một file tương ứng trong `src/content/projects/en/`.
2. Tên file là slug trên URL, ví dụ `vi/website-ban-hang.md` → `/vi/projects/website-ban-hang/`.
3. Frontmatter bắt buộc: `title`, `description`, `date`, `translationKey`. Hai bản VI/EN của cùng một dự án phải có cùng `translationKey` để nút chuyển ngôn ngữ dẫn đúng bài.
4. Tùy chọn: `tags`, `image` (đường dẫn trong `public/`), `links.demo`, `links.repo`, `featured: true` để hiện ở trang chủ.

Mẫu:

```md
---
title: Tên dự án
description: Một câu mô tả ngắn.
date: 2025-06-15
tags: [Astro, TypeScript]
links:
  demo: https://example.com
  repo: https://github.com/username/repo
featured: true
translationKey: ten-du-an
---

Nội dung chi tiết viết bằng Markdown.
```

Thiếu trường bắt buộc thì `npm run build` sẽ báo lỗi và chỉ rõ file.

## Cấu trúc

```
src/
├── components/   Header, Footer, SEO, LangSwitcher, ThemeToggle, ProjectCard
├── content/      Dự án dạng Markdown, chia theo ngôn ngữ
├── data/         site.ts (thông tin cá nhân), profile.ts (giới thiệu), projects.ts (helper)
├── i18n/         ui.ts (chuỗi giao diện), utils.ts (hàm xử lý ngôn ngữ, URL)
├── layouts/      BaseLayout.astro (khung chung mọi trang)
├── pages/        [lang]/... (các trang), 404.astro
└── styles/       global.css (biến màu, reset, layout)
public/           favicon, robots.txt, ảnh
```

## Deploy lên Vercel

1. Push repo lên GitHub.
2. Vào vercel.com → Add New Project → Import repo. Vercel tự nhận diện Astro (build `npm run build`, output `dist`).
3. Sau khi có URL thật, sửa `SITE_URL` trong `astro.config.mjs`, `url` trong `src/data/site.ts`, và `Sitemap:` trong `public/robots.txt`, rồi push lại.

Mỗi lần push lên nhánh chính, Vercel tự build và deploy lại.
