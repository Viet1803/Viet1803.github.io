# Personal Website

English below · [Tiếng Việt ở phía dưới](#trang-web-cá-nhân)

A static personal website built with [Astro](https://astro.build): bilingual (VI/EN), light/dark mode, deployed on Vercel.

- Live site: https://tranhoangviet.vercel.app
- Source: https://github.com/Viet1803/MyPortfolio

Every push to the `main` branch triggers a new Vercel build and deploy within about a minute.

## Technologies

- **Astro 7**: static site generator, outputs plain HTML with almost no client-side JavaScript
- **TypeScript**: typed data files, i18n helpers and content schema
- **HTML / CSS**: hand-written layout with CSS custom properties for light/dark themes, no CSS framework
- **Markdown**: each project is a Markdown file validated by a schema at build time
- **Inter** (self-hosted variable font) with full Vietnamese diacritics support
- **Vercel**: hosting and automatic deploys from GitHub
- **Git / GitHub**: version control and source hosting

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

## What I learned

- How to plan a project before coding: clarify the brief, choose a stack, and break the work into small verifiable steps (see [PLAN.md](PLAN.md)).
- How Astro turns components and Markdown into a fully static site, and why that makes the site fast and easy to host.
- How to build a bilingual site with URL-based routing (`/en/`, `/vi/`), `hreflang` tags and a language switcher that keeps the current page.
- How to implement a light/dark theme that respects the system setting and remembers the user's choice without flashing on load.
- Basic SEO: canonical URLs, Open Graph tags, sitemap and robots.txt.
- The Git workflow used throughout: edit → `git add` → `git commit` → `git push`, and how Vercel deploys automatically from the `main` branch.
- How to measure quality with Lighthouse and fix what it reports (a color-contrast issue in dark mode was found and fixed this way).

## Future improvements

- Replace all placeholder content (bio, projects, avatar, email, social links) with real information.
- Add a real CV in PDF form for both languages.
- Add an Open Graph image so shared links show a preview card.
- Add a blog section using the same content-collection setup as projects.
- Consider a contact form (e.g. Formspree) if email alone is not enough.
- Add a custom domain.

---

# Trang web cá nhân

[English above](#personal-website)

Site tĩnh xây bằng [Astro](https://astro.build), hai ngôn ngữ (VI/EN), chế độ sáng/tối, deploy trên Vercel.

- Site: https://tranhoangviet.vercel.app
- Mã nguồn: https://github.com/Viet1803/MyPortfolio

Mỗi lần push lên nhánh `main`, Vercel tự build và deploy lại trong khoảng 1 phút.

## Công nghệ

- **Astro 7**: sinh site tĩnh, xuất HTML thuần, gần như không có JavaScript phía client
- **TypeScript**: file dữ liệu có kiểu, hàm i18n và schema nội dung
- **HTML / CSS**: tự viết layout, dùng CSS custom properties cho chế độ sáng/tối, không dùng framework CSS
- **Markdown**: mỗi dự án là một file Markdown, được kiểm tra schema lúc build
- **Inter** (font biến thiên self-host) hỗ trợ đầy đủ dấu tiếng Việt
- **Vercel**: hosting và tự động deploy từ GitHub
- **Git / GitHub**: quản lý phiên bản và lưu mã nguồn

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

## Điều đã học được

- Cách lập kế hoạch trước khi viết code: làm rõ yêu cầu, chọn stack, chia việc thành các bước nhỏ kiểm tra được (xem [PLAN.md](PLAN.md)).
- Cách Astro biến component và Markdown thành site tĩnh hoàn toàn, và vì sao điều đó giúp site nhanh và dễ host.
- Cách xây site hai ngôn ngữ theo URL (`/en/`, `/vi/`), thẻ `hreflang` và nút chuyển ngôn ngữ giữ nguyên trang đang xem.
- Cách làm chế độ sáng/tối theo hệ thống, nhớ lựa chọn của người dùng và không nháy màu khi tải.
- SEO cơ bản: canonical, Open Graph, sitemap và robots.txt.
- Quy trình Git dùng xuyên suốt: sửa → `git add` → `git commit` → `git push`, và cách Vercel tự deploy từ nhánh `main`.
- Cách đo chất lượng bằng Lighthouse và sửa theo báo cáo (một lỗi tương phản màu ở dark mode được phát hiện và sửa nhờ cách này).

## Hướng cải tiến

- Thay toàn bộ nội dung mẫu (tiểu sử, dự án, ảnh đại diện, email, mạng xã hội) bằng thông tin thật.
- Thêm CV PDF thật cho cả hai ngôn ngữ.
- Thêm ảnh Open Graph để khi chia sẻ link có thẻ xem trước.
- Thêm mục Blog dùng cùng cơ chế content collection như dự án.
- Cân nhắc form liên hệ (ví dụ Formspree) nếu chỉ email là chưa đủ.
- Thêm tên miền riêng.

