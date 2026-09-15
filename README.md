# Personal Website

English below · [Tiếng Việt ở phía dưới](#trang-web-cá-nhân)

A static personal website built with [Astro](https://astro.build): bilingual (VI/EN), light/dark mode, deployed on Vercel.

- Live site: https://tranhoangviet.vercel.app
- Source: https://github.com/Viet1803/MyPortfolio

Every push to the `main` branch triggers a new Vercel build and deploy within about a minute.

## Run locally

Requires Node.js 22 or newer (currently using 24, see `.nvmrc`).

```sh
npm install        # install dependencies (first time only)
npm run dev        # dev server at http://localhost:4321
npm run build      # build to dist/
npm run preview    # preview the production build
npx astro check    # TypeScript and template checks
```

The root `/` redirects to `/en/` (English is the default). The Vietnamese version lives under `/vi/`.

## Edit personal info

Open [src/data/site.ts](src/data/site.ts) and replace:

- `name.en`, `name.vi`: display name per language in the header, footer and page titles.
- `email`, `social`: shown on the Contact page and in the footer.
- `avatar`: image path inside `public/`. Put a real photo at `public/images/avatar.jpg` and update this value.
- `cv.vi`, `cv.en`: PDF paths inside `public/`. Leave empty to hide the CV button.
- `url`: public site URL. Must match `SITE_URL` in `astro.config.mjs` and `Sitemap:` in `public/robots.txt`.

Bio, skills, experience and education live in [src/data/profile.ts](src/data/profile.ts), one block per language.

## Edit UI text

All menu labels, buttons, headings and SEO descriptions live in [src/i18n/ui.ts](src/i18n/ui.ts). Every key needs both a `vi` and an `en` value; TypeScript reports an error if one is missing.

## Add a project

1. Create a `.md` file in `src/content/projects/vi/` and a matching one in `src/content/projects/en/`.
2. The file name becomes the URL slug, e.g. `en/online-storefront.md` → `/en/projects/online-storefront/`.
3. Required frontmatter: `title`, `description`, `date`, `translationKey`. The VI and EN versions of the same project must share the same `translationKey` so the language switcher links them together.
4. Optional: `tags`, `image` (path inside `public/`), `links.demo`, `links.repo`, `featured: true` to show it on the home page.

Template:

```md
---
title: Project name
description: One short sentence.
date: 2025-06-15
tags: [Astro, TypeScript]
links:
  demo: https://example.com
  repo: https://github.com/username/repo
featured: true
translationKey: project-name
---

Full description written in Markdown.
```

If a required field is missing, `npm run build` fails and names the file.

## Structure

```
src/
├── components/   Header, Footer, SEO, LangSwitcher, ThemeToggle, ProjectCard
├── content/      Projects as Markdown, split by language
├── data/         site.ts (personal info), profile.ts (about page), projects.ts (helpers)
├── i18n/         ui.ts (UI strings), utils.ts (language and URL helpers)
├── layouts/      BaseLayout.astro (shared shell for every page)
├── pages/        [lang]/... (pages), 404.astro
└── styles/       global.css (color tokens, reset, layout)
public/           favicon, robots.txt, images
```

## Deploy to Vercel

1. Push the repo to GitHub.
2. On vercel.com → Add New Project → Import the repo. Vercel detects Astro automatically (build `npm run build`, output `dist`).
3. Once you have the real URL, update `SITE_URL` in `astro.config.mjs`, `url` in `src/data/site.ts`, and `Sitemap:` in `public/robots.txt`, then push again.

---

# Trang web cá nhân

[English above](#personal-website)

Site tĩnh xây bằng [Astro](https://astro.build), hai ngôn ngữ (VI/EN), chế độ sáng/tối, deploy trên Vercel.

- Site: https://tranhoangviet.vercel.app
- Mã nguồn: https://github.com/Viet1803/MyPortfolio

Mỗi lần push lên nhánh `main`, Vercel tự build và deploy lại trong khoảng 1 phút.

## Chạy trên máy

Cần Node.js 22 trở lên (đang dùng bản 24, xem `.nvmrc`).

```sh
npm install        # cài dependencies (chỉ lần đầu)
npm run dev        # dev server tại http://localhost:4321
npm run build      # build ra thư mục dist/
npm run preview    # xem thử bản build
npx astro check    # kiểm tra lỗi TypeScript và template
```

Trang gốc `/` tự chuyển sang `/en/` (tiếng Anh là mặc định). Bản tiếng Việt ở `/vi/`.

## Sửa thông tin cá nhân

Mở [src/data/site.ts](src/data/site.ts) và thay:

- `name.en`, `name.vi`: tên hiển thị theo ngôn ngữ ở header, footer, tiêu đề trang.
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
