import { ui, defaultLang, languages, type Lang, type UiKey } from './ui';

export const langs = Object.keys(languages) as Lang[];

export function isLang(value: string | undefined): value is Lang {
  return value !== undefined && value in languages;
}

/** Đọc ngôn ngữ từ phân đoạn đầu của URL, ví dụ /en/about → 'en'. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return isLang(first) ? first : defaultLang;
}

/** Trả về hàm t(key) cho ngôn ngữ đã chọn, fallback về ngôn ngữ mặc định. */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Ghép đường dẫn có tiền tố ngôn ngữ, luôn có dấu / ở cuối. */
export function localizePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

/** Bỏ tiền tố ngôn ngữ khỏi pathname, ví dụ /en/about/ → about. */
export function stripLang(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (isLang(parts[0])) parts.shift();
  return parts.join('/');
}

/** Đường dẫn tương ứng ở ngôn ngữ khác, giữ nguyên trang đang xem. */
export function getAlternatePath(pathname: string, target: Lang): string {
  return localizePath(target, stripLang(pathname));
}

/** Ngôn ngữ còn lại (site chỉ có 2 ngôn ngữ). */
export function otherLang(lang: Lang): Lang {
  return langs.find((l) => l !== lang) ?? defaultLang;
}

/** Dùng trong getStaticPaths của các trang [lang]/. */
export function langParams() {
  return langs.map((lang) => ({ params: { lang } }));
}

/** Locale BCP-47 cho Intl và thẻ meta. */
export const localeOf: Record<Lang, string> = {
  vi: 'vi-VN',
  en: 'en-US',
};

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(localeOf[lang], { month: 'long', year: 'numeric' }).format(date);
}
