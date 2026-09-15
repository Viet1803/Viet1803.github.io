# Kế hoạch xây trang web cá nhân

## 1. Bối cảnh

- Thư mục dự án trống, đã có `.git` (branch `master`, chưa có commit).
- Máy có `git 2.55`, **chưa có Node.js/npm**. Đã đồng ý cài Node.js.
- Mục đích: giới thiệu bản thân, hồ sơ năng lực, liên hệ.
- Người xem: **nhà tuyển dụng / HR** và **đối tác / khách hàng freelance**.
- Trang: Trang chủ, Giới thiệu, Dự án, Liên hệ.
- **Đa ngôn ngữ VI/EN có nút chuyển** (đã chốt, khác brief ban đầu).
- Nội dung: chưa có, dùng nội dung mẫu (placeholder) để thay sau.
- Thiết kế: tối giản, nhiều khoảng trắng, sáng/tối.
- Deploy: Vercel miễn phí, tên miền `*.vercel.app`. Liên hệ qua email/mạng xã hội, không form.
- Ràng buộc: mobile tốt, tải nhanh, SEO cơ bản, tiếng Việt có dấu hiển thị đúng.
- Không cần: đăng nhập, database, CMS.

## 2. Stack đề xuất và lý do

| Thành phần | Chọn | Vì sao |
|---|---|---|
| Framework | **Astro 7** (static output, bản cài thực tế 7.3.2) | Sinh HTML tĩnh thuần, gần như 0 JS gửi xuống trình duyệt nên tải nhanh và SEO tốt mặc định. Có sẵn i18n routing, content collections (Markdown), sitemap. Cú pháp giống HTML, dễ bảo trì hơn React/Next cho site nội dung. |
| Đa ngôn ngữ | Astro i18n tích hợp, URL `/vi/...` và `/en/...` | Mỗi ngôn ngữ một URL riêng nên Google index được cả hai, có `hreflang`. Không cần thư viện ngoài. |
| Nội dung dự án | Content Collections + Markdown | Thêm dự án mới = thêm một file `.md`, không đụng code. Có kiểm tra schema (frontmatter) lúc build. |
| CSS | CSS thuần + CSS custom properties | Site nhỏ, không cần Tailwind. Ít dependency, dễ đọc, dark mode chỉ là đổi biến màu. |
| Font | Self-host **Inter** qua `@fontsource-variable/inter` | Inter hỗ trợ đầy đủ dấu tiếng Việt. Self-host tránh gọi Google Fonts, nhanh và ổn định hơn. |
| SEO | `@astrojs/sitemap` + component `SEO.astro` tự viết | Sitemap, canonical, Open Graph, hreflang, robots.txt. Đủ cho "SEO cơ bản". |
| Deploy | Vercel, không cần adapter | Astro static build ra thư mục `dist/`, Vercel tự nhận diện Astro, deploy mỗi lần push GitHub. |

Không dùng: Next.js (thừa cho site tĩnh), Tailwind (thêm build step và học cú pháp), thư viện i18n ngoài (Astro đã có).

## 3. Cấu trúc thư mục

```
Tranhoangviet/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       ├── avatar.jpg              (ảnh mẫu, thay sau)
│       └── projects/               (ảnh dự án mẫu)
├── src/
│   ├── data/
│   │   └── site.ts                 (tên, chức danh, email, link mạng xã hội, URL site)
│   ├── i18n/
│   │   ├── ui.ts                   (chuỗi giao diện VI/EN: menu, nút, tiêu đề)
│   │   └── utils.ts                (getLangFromUrl, useTranslations, đường dẫn đối chiếu giữa 2 ngôn ngữ)
│   ├── content/
│   │   └── projects/
│   │       ├── vi/
│   │       │   ├── du-an-mau-1.md
│   │       │   ├── du-an-mau-2.md
│   │       │   └── du-an-mau-3.md
│   │       └── en/
│   │           ├── sample-project-1.md
│   │           ├── sample-project-2.md
│   │           └── sample-project-3.md
│   ├── content.config.ts           (schema dự án: title, description, date, tags, image, links, slug đối chiếu)
│   ├── layouts/
│   │   └── BaseLayout.astro        (html/head/body, SEO, Header, Footer, script theme)
│   ├── components/
│   │   ├── SEO.astro               (title, description, canonical, og:*, hreflang)
│   │   ├── Header.astro            (logo/tên, menu, LangSwitcher, ThemeToggle, menu mobile)
│   │   ├── Footer.astro
│   │   ├── LangSwitcher.astro      (VI ⇄ EN, giữ nguyên trang đang xem)
│   │   ├── ThemeToggle.astro       (sáng/tối, lưu localStorage)
│   │   └── ProjectCard.astro
│   ├── pages/
│   │   ├── index.astro             (redirect / → /vi/)
│   │   ├── 404.astro
│   │   └── [lang]/
│   │       ├── index.astro         (Trang chủ)
│   │       ├── about.astro         (Giới thiệu)
│   │       ├── contact.astro       (Liên hệ)
│   │       └── projects/
│   │           ├── index.astro     (danh sách dự án)
│   │           └── [slug].astro    (chi tiết dự án)
│   └── styles/
│       └── global.css              (biến màu, reset, typography, layout, dark mode)
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── .gitignore
├── .nvmrc                          (ghim phiên bản Node)
├── README.md                       (cách chạy, cách thêm dự án, cách sửa nội dung)
└── PLAN.md                         (file này)
```

## 4. Danh sách file cần tạo (theo nhóm)

1. **Cấu hình**: `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`, `.nvmrc`, `README.md`, `PLAN.md`
2. **Dữ liệu & i18n**: `src/data/site.ts`, `src/i18n/ui.ts`, `src/i18n/utils.ts`
3. **Nội dung**: `src/content.config.ts`, 3 file `.md` VI + 3 file `.md` EN
4. **Giao diện**: `src/styles/global.css`, `src/layouts/BaseLayout.astro`, 6 component trong `src/components/`
5. **Trang**: 7 file trong `src/pages/`
6. **Tĩnh**: `public/favicon.svg`, `public/robots.txt`, ảnh mẫu trong `public/images/`

Tổng khoảng 30 file.

## 5. Thứ tự triển khai (mỗi bước có cách kiểm tra)

### Bước 0. Cài Node.js ✅ (xong 2026-09-09: Node v24.19.0, npm 11.17.0)
- Cài Node.js LTS qua `winget install OpenJS.NodeJS.LTS` (hoặc tải từ nodejs.org). Mở lại terminal.
- **Kiểm tra**: `node -v` in ra `v22.x` (hoặc LTS mới nhất), `npm -v` có kết quả.

### Bước 1. Khởi tạo dự án Astro ✅ (xong 2026-09-09: Astro 7.3.2, sitemap 3.7.4, Inter 5.3.0; build và dev đều chạy)
- Chạy `npm create astro@latest` với template `minimal` vào thư mục hiện tại, cài `@astrojs/sitemap`, `@fontsource-variable/inter`.
- Tạo `.gitignore` (node_modules, dist, .astro), `.nvmrc`.
- **Kiểm tra**: `npm run dev` → mở `http://localhost:4321` thấy trang mặc định. `npm run build` thành công, có thư mục `dist/`.

> Tiến độ 2026-09-09: Bước 2 → 9 và Bước 11 đã hoàn thành. Khác kế hoạch: nội dung dài trang Giới thiệu tách ra `src/data/profile.ts` thay vì `ui.ts`; helper dự án nằm ở `src/data/projects.ts`; thêm `vercel.json` để redirect `/` bằng HTTP thật; `z` import từ `astro/zod` (Astro 7). Còn lại Bước 10 (push GitHub, deploy Vercel, cập nhật URL thật).

### Bước 2. Cấu hình i18n và layout khung ✅
- `astro.config.mjs`: `site`, `i18n { defaultLocale: 'en', locales: ['en','vi'], routing: { prefixDefaultLocale: true } }`, tích hợp sitemap. (Đổi mặc định sang tiếng Anh ngày 2026-09-15 theo yêu cầu; tên tiếng Anh "Hoang Viet Tran", tiếng Việt "Trần Hoàng Việt".)
- Tạo `src/i18n/ui.ts`, `src/i18n/utils.ts`, `src/data/site.ts`.
- Tạo `global.css` (biến màu sáng/tối, font Inter, container, typography).
- Tạo `BaseLayout.astro`, `Header.astro`, `Footer.astro` (menu tạm).
- Tạo `src/pages/index.astro` redirect về `/vi/`, và `[lang]/index.astro` in "Xin chào" / "Hello".
- **Kiểm tra**: `/` chuyển sang `/vi/`. `/vi/` và `/en/` hiển thị đúng ngôn ngữ, `<html lang>` đúng. Chữ tiếng Việt có dấu render đúng với font Inter. `/fr/` trả 404.

### Bước 3. Nút chuyển ngôn ngữ ✅
- `LangSwitcher.astro`: từ URL hiện tại tính ra URL tương ứng ở ngôn ngữ kia.
- **Kiểm tra**: đang ở `/vi/about` bấm EN → sang `/en/about` (không về trang chủ). Ngược lại cũng đúng.

### Bước 4. Chế độ sáng/tối ✅
- `ThemeToggle.astro` + script inline trong `<head>` đọc `localStorage` / `prefers-color-scheme` trước khi render để không nháy màu.
- **Kiểm tra**: bấm nút đổi màu ngay lập tức. Tải lại trang giữ nguyên lựa chọn. Không có flash trắng khi mở ở dark mode. Xóa localStorage → theo hệ thống.

### Bước 5. Trang chủ và Giới thiệu ✅
- Trang chủ: ảnh đại diện, tên, chức danh, 2-3 câu giới thiệu, nút "Xem dự án" và "Liên hệ", 3 dự án nổi bật.
- Giới thiệu: tiểu sử, kỹ năng (nhóm), kinh nghiệm/học vấn dạng timeline, nút tải CV (link placeholder).
- Nội dung mẫu lưu trong `ui.ts` hoặc trực tiếp trong trang, có 2 bản VI/EN.
- **Kiểm tra**: cả 2 ngôn ngữ đầy đủ nội dung, không sót chuỗi chưa dịch. Thu nhỏ cửa sổ 375px không tràn ngang.

### Bước 6. Dự án (content collection) ✅
- `content.config.ts` với schema: `title`, `description`, `date`, `tags[]`, `image?`, `links { demo?, repo? }`, `featured?`, `translationKey` (để LangSwitcher nối đúng bài giữa VI/EN).
- 3 dự án mẫu × 2 ngôn ngữ. `ProjectCard.astro`.
- `[lang]/projects/index.astro` liệt kê theo ngày. `[lang]/projects/[slug].astro` dùng `getStaticPaths`.
- **Kiểm tra**: `/vi/projects` có 3 thẻ, bấm vào mở trang chi tiết. Thêm 1 file `.md` mới → tự xuất hiện. Cố tình bỏ `title` → `npm run build` báo lỗi schema. Chuyển ngôn ngữ trên trang chi tiết đi đúng bài tương ứng.

### Bước 7. Trang Liên hệ ✅
- Email (`mailto:`), GitHub, LinkedIn, các link khác từ `site.ts`. Không form.
- **Kiểm tra**: mỗi link mở đúng, `mailto:` mở ứng dụng mail.

### Bước 8. SEO cơ bản ✅
- `SEO.astro`: `<title>` theo mẫu "Tên trang · Tên bạn", meta description, canonical, `og:title/description/image/locale`, `hreflang` cho vi/en/x-default.
- `public/robots.txt` trỏ sitemap. `404.astro` hai ngôn ngữ.
- **Kiểm tra**: `npm run build` sinh `dist/sitemap-index.xml` chứa cả `/vi/` và `/en/`. View-source từng trang thấy đủ thẻ meta. URL sai trả trang 404 tùy chỉnh.

### Bước 9. Hoàn thiện responsive và hiệu năng ✅ (Lighthouse mobile: perf 98, a11y 100 sau sửa tương phản, best practices 100, SEO 100)
- Menu hamburger trên mobile, ảnh dùng `<Image>` của Astro (tự nén, lazy-load), kích thước font/khoảng cách hợp lý.
- **Kiểm tra**: Chrome DevTools Lighthouse (mobile) cho trang chủ và trang dự án: Performance, Accessibility, Best Practices, SEO đều ≥ 90. Thử trên 375px, 768px, 1280px.

### Bước 10. Đưa lên Git và deploy Vercel ✅ (2026-09-15: repo https://github.com/Viet1803/Viet1803.github.io, site https://tranhoangviet.vercel.app, `/` → `/vi/` trả 307, sitemap 14 URL)
- Commit toàn bộ, tạo repo GitHub, push.
- Vào vercel.com → Import repo → Vercel tự nhận Astro (build `npm run build`, output `dist`). Deploy.
- Cập nhật `site` trong `astro.config.mjs` thành URL Vercel thật, push lại để sitemap/canonical đúng.
- **Kiểm tra**: mở `https://<tên>.vercel.app` chạy được cả `/vi/` và `/en/`, redirect gốc đúng, dark mode và chuyển ngôn ngữ hoạt động. Push thêm một commit nhỏ → Vercel tự deploy lại.

### Bước 11. Bàn giao ✅ (README.md đã viết)
- `README.md`: cách chạy local, cách thêm dự án (copy file `.md`), cách sửa thông tin cá nhân (`site.ts`), cách sửa chuỗi giao diện (`ui.ts`).
- **Kiểm tra**: người khác đọc README làm theo được không cần hỏi.

## 6. Điểm cần quyết sau (không chặn việc bắt đầu)

- Tên hiển thị, chức danh, email, link GitHub/LinkedIn thật để thay vào `site.ts`.
- Ảnh đại diện và CV PDF thật.
- Có muốn thêm mục Blog sau này không (cấu trúc content collection đã sẵn sàng để mở rộng).
