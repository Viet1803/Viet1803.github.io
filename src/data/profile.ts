import type { Lang } from '../i18n/ui';

/**
 * Nội dung dài của trang Giới thiệu, có 2 bản VI/EN.
 * Toàn bộ là nội dung mẫu, thay bằng thông tin thật của bạn.
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
      'Tôi là lập trình viên web với hơn 3 năm kinh nghiệm xây dựng sản phẩm cho doanh nghiệp nhỏ và startup. Tôi làm việc chủ yếu với TypeScript, React và Node.js, và thích những giải pháp đơn giản, chạy nhanh và dễ bảo trì.',
      'Tôi tin rằng một website tốt phải tải nhanh, dùng được trên mọi thiết bị và dễ hiểu với người dùng. Ngoài viết code, tôi thường tham gia từ giai đoạn lên ý tưởng đến khi bàn giao, nên quen với việc trao đổi trực tiếp với khách hàng và đội ngũ thiết kế.',
      'Hiện tôi nhận công việc toàn thời gian hoặc dự án freelance liên quan đến phát triển web.',
    ],
    skills: [
      { name: 'Frontend', items: ['HTML', 'CSS', 'TypeScript', 'React', 'Astro', 'Next.js'] },
      { name: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'REST API'] },
      { name: 'Công cụ', items: ['Git', 'GitHub Actions', 'Docker', 'Vercel', 'Figma'] },
    ],
    experience: [
      {
        period: '2024 – nay',
        title: 'Lập trình viên frontend',
        org: 'Công ty ABC',
        description:
          'Xây dựng và duy trì giao diện web cho sản phẩm SaaS quản lý bán hàng. Cải thiện tốc độ tải trang chính giảm 40% và dẫn dắt việc chuyển sang TypeScript.',
      },
      {
        period: '2022 – 2024',
        title: 'Lập trình viên web (freelance)',
        org: 'Tự do',
        description:
          'Hoàn thành hơn 10 website cho cửa hàng, phòng khám và dịch vụ địa phương. Phụ trách từ thiết kế, lập trình đến triển khai và hướng dẫn khách hàng sử dụng.',
      },
    ],
    education: [
      {
        period: '2018 – 2022',
        title: 'Cử nhân Công nghệ thông tin',
        org: 'Đại học XYZ',
        description: 'Chuyên ngành Kỹ thuật phần mềm. Đồ án tốt nghiệp về hệ thống quản lý học tập trực tuyến.',
      },
    ],
  },
  en: {
    bio: [
      'I am a web developer with 3+ years of experience building products for small businesses and startups. I work mostly with TypeScript, React and Node.js, and I prefer solutions that are simple, fast and easy to maintain.',
      'I believe a good website loads quickly, works on every device and is easy to understand. Beyond writing code, I usually take part from the idea stage through to hand-off, so I am used to working directly with clients and designers.',
      'I am currently open to full-time roles and freelance web development projects.',
    ],
    skills: [
      { name: 'Frontend', items: ['HTML', 'CSS', 'TypeScript', 'React', 'Astro', 'Next.js'] },
      { name: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'REST API'] },
      { name: 'Tools', items: ['Git', 'GitHub Actions', 'Docker', 'Vercel', 'Figma'] },
    ],
    experience: [
      {
        period: '2024 – present',
        title: 'Frontend Developer',
        org: 'ABC Company',
        description:
          'Build and maintain the web UI of a retail management SaaS product. Cut main page load time by 40% and led the migration to TypeScript.',
      },
      {
        period: '2022 – 2024',
        title: 'Web Developer (freelance)',
        org: 'Self-employed',
        description:
          'Delivered 10+ websites for shops, clinics and local services. Handled design, development, deployment and client training end to end.',
      },
    ],
    education: [
      {
        period: '2018 – 2022',
        title: 'B.Sc. in Information Technology',
        org: 'XYZ University',
        description: 'Major in Software Engineering. Graduation project on an online learning management system.',
      },
    ],
  },
};
