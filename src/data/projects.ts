import { getCollection, type CollectionEntry } from 'astro:content';
import { isLang, localizePath } from '../i18n/utils';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'>;

/** Tách "<lang>/<slug>" từ id của entry. */
export function splitId(entry: Project): { lang: Lang; slug: string } {
  const [first, ...rest] = entry.id.split('/');
  if (!isLang(first) || rest.length === 0) {
    throw new Error(`Project "${entry.id}" phải nằm trong src/content/projects/<vi|en>/`);
  }
  return { lang: first, slug: rest.join('/') };
}

export function projectLang(entry: Project): Lang {
  return splitId(entry).lang;
}

export function projectSlug(entry: Project): string {
  return splitId(entry).slug;
}

export function projectUrl(entry: Project): string {
  const { lang, slug } = splitId(entry);
  return localizePath(lang, `projects/${slug}`);
}

/** Toàn bộ dự án, mới nhất trước. */
export async function getAllProjects(): Promise<Project[]> {
  const all = await getCollection('projects');
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Dự án theo ngôn ngữ, mới nhất trước. */
export async function getProjects(lang: Lang): Promise<Project[]> {
  const all = await getAllProjects();
  return all.filter((p) => projectLang(p) === lang);
}

/** Dự án nổi bật để hiện ở trang chủ. Nếu không có dự án nào được đánh dấu, lấy 3 dự án mới nhất. */
export async function getFeaturedProjects(lang: Lang, limit = 3): Promise<Project[]> {
  const projects = await getProjects(lang);
  const featured = projects.filter((p) => p.data.featured);
  return (featured.length > 0 ? featured : projects).slice(0, limit);
}

/** Bản dịch của một dự án ở ngôn ngữ khác, nếu có. */
export async function findTranslation(entry: Project, target: Lang): Promise<Project | undefined> {
  const all = await getAllProjects();
  return all.find(
    (p) => projectLang(p) === target && p.data.translationKey === entry.data.translationKey,
  );
}
