import type { Lang } from '../i18n/ui';

/**
 * Nội dung dài của trang Giới thiệu, có 2 bản VI/EN.
 * Tên trường và mốc thời gian là placeholder, thay bằng thông tin thật của bạn.
 */
export interface TimelineItem {
  period: string;
  title: string;
  org: string;
  description: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Profile {
  bio: string[];
  skills: SkillGroup[];
  experience: TimelineItem[];
  education: TimelineItem[];
}

export const profile: Record<Lang, Profile> = {
  vi: {
    bio: [
      'Tôi là sinh viên năm nhất ngành Khoa học máy tính. Tôi đang học những nền tảng đầu tiên về lập trình, giải quyết vấn đề và cách phần mềm được xây dựng, từ dòng code đầu tiên đến khi đưa một sản phẩm lên mạng.',
      'Trang web này là dự án cá nhân đầu tiên của tôi. Nó được tạo ra với sự hỗ trợ của Claude, trợ lý AI của Anthropic: tôi đưa ra yêu cầu, cùng lên kế hoạch, rà soát từng bước và học cách mọi thứ hoạt động, còn Claude giúp viết code và kiểm tra. Toàn bộ mã nguồn được công khai trên GitHub.',
      'Trong bốn năm tới, tôi sẽ dùng trang này để ghi lại quá trình học: bài lab, đồ án môn học, dự án cá nhân và sau này là thực tập hoặc nghiên cứu.',
    ],
    skills: [
      { name: 'Đang học', items: ['Tư duy lập trình', 'Giải quyết vấn đề', 'HTML', 'CSS', 'TypeScript'] },
      { name: 'Công cụ', items: ['Git', 'GitHub', 'GitHub Actions', 'VS Code', 'Vercel'] },
      { name: 'Đã dùng trong dự án', items: ['Astro', 'Markdown', 'GitHub Pages'] },
    ],
    experience: [
      {
        period: '2026 – nay',
        title: 'Dự án cá nhân: trang web portfolio',
        org: 'Tự thực hiện, với sự hỗ trợ của Claude',
        description:
          'Xây dựng website hai ngôn ngữ bằng Astro, quản lý mã nguồn bằng Git và GitHub, deploy tự động lên Vercel và GitHub Pages. Học cách lập kế hoạch, kiểm tra từng bước và viết tài liệu cho dự án.',
      },
    ],
    education: [
      {
        period: '2026 – nay',
        title: 'Cử nhân Khoa học máy tính, năm nhất',
        org: 'Tên trường của bạn',
        description: 'Các môn đang học: nhập môn lập trình, GitHub và portfolio ngành CS (CSE 1106).',
      },
    ],
  },
  en: {
    bio: [
      'I am a computer science freshman. I am learning the fundamentals of programming and problem solving, and how software is built, from the first line of code to a product running online.',
      'This website is my first personal project. It was created with the help of Claude, the AI assistant made by Anthropic: I set the requirements, planned the work together, reviewed each step and learned how things work, while Claude helped write and test the code. The full source code is public on GitHub.',
      'Over the next four years I will use this site to document my progress: labs, coursework, personal projects and, later, internships or research.',
    ],
    skills: [
      { name: 'Learning', items: ['Programming fundamentals', 'Problem solving', 'HTML', 'CSS', 'TypeScript'] },
      { name: 'Tools', items: ['Git', 'GitHub', 'GitHub Actions', 'VS Code', 'Vercel'] },
      { name: 'Used in projects', items: ['Astro', 'Markdown', 'GitHub Pages'] },
    ],
    experience: [
      {
        period: '2026 – present',
        title: 'Personal project: portfolio website',
        org: 'Self-directed, with help from Claude',
        description:
          'Built a bilingual website with Astro, managed the source with Git and GitHub, and set up automatic deployment to Vercel and GitHub Pages. Learned to plan, verify each step and document a project.',
      },
    ],
    education: [
      {
        period: '2026 – present',
        title: 'B.Sc. in Computer Science, first year',
        org: 'Your University',
        description: 'Current courses: introduction to programming, GitHub and CS portfolio (CSE 1106).',
      },
    ],
  },
};
