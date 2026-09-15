/**
 * Chuỗi giao diện theo ngôn ngữ.
 * Mọi chữ hiển thị trên menu, nút, tiêu đề đều lấy từ đây.
 * Nội dung dài (tiểu sử, kỹ năng, kinh nghiệm) nằm ở src/data/profile.ts.
 */
export const languages = {
  en: 'English',
  vi: 'Tiếng Việt',
} as const;

export type Lang = keyof typeof languages;

/** Ngôn ngữ mặc định: trang gốc `/` chuyển về đây, hreflang x-default trỏ về đây. */
export const defaultLang: Lang = 'en';

export const ui = {
  vi: {
    'site.tagline': 'Sinh viên năm nhất Khoa học máy tính',
    'site.description':
      'Trang cá nhân của Trần Hoàng Việt, sinh viên năm nhất Khoa học máy tính: giới thiệu, kỹ năng, dự án và thông tin liên hệ.',

    'nav.home': 'Trang chủ',
    'nav.about': 'Giới thiệu',
    'nav.projects': 'Dự án',
    'nav.contact': 'Liên hệ',
    'nav.menu.open': 'Mở menu',
    'nav.menu.close': 'Đóng menu',

    'lang.switch': 'Switch to English',
    'lang.short': 'EN',
    'theme.toggle': 'Đổi chế độ sáng/tối',

    'home.title': 'Trang chủ',
    'home.greeting': 'Xin chào, tôi là',
    'home.intro':
      'Tôi đang học những nền tảng đầu tiên của lập trình và cách phần mềm được xây dựng. Trang này ghi lại các dự án và quá trình học của tôi, được tạo với sự hỗ trợ của Claude.',
    'home.cta.projects': 'Xem dự án',
    'home.cta.contact': 'Liên hệ',
    'home.featured': 'Dự án nổi bật',
    'home.viewAll': 'Xem tất cả dự án',

    'about.title': 'Giới thiệu',
    'about.description': 'Tiểu sử, kỹ năng, kinh nghiệm làm việc và học vấn của Trần Hoàng Việt.',
    'about.skills': 'Kỹ năng',
    'about.experience': 'Kinh nghiệm',
    'about.education': 'Học vấn',
    'about.cv': 'Tải CV (PDF)',

    'projects.title': 'Dự án',
    'projects.description': 'Các dự án tiêu biểu đã thực hiện, kèm công nghệ sử dụng và kết quả đạt được.',
    'projects.intro': 'Một số dự án tôi đã thực hiện. Bấm vào từng dự án để xem chi tiết.',
    'projects.demo': 'Xem demo',
    'projects.repo': 'Mã nguồn',
    'projects.back': 'Tất cả dự án',
    'projects.empty': 'Chưa có dự án nào.',

    'contact.title': 'Liên hệ',
    'contact.description': 'Cách liên hệ với Trần Hoàng Việt qua email và mạng xã hội.',
    'contact.intro':
      'Bạn có cơ hội hợp tác, dự án cần triển khai, hoặc chỉ muốn trò chuyện? Hãy gửi email hoặc kết nối qua mạng xã hội, tôi sẽ phản hồi sớm.',
    'contact.email': 'Email',
    'contact.social': 'Mạng xã hội',

    'footer.rights': 'Bản quyền thuộc về',
    'footer.built': 'Xây dựng với Astro',

    '404.title': 'Không tìm thấy trang',
    '404.text': 'Trang bạn tìm không tồn tại hoặc đã được chuyển đi.',
    '404.home': 'Về trang chủ',
  },
  en: {
    'site.tagline': 'Computer Science Freshman',
    'site.description':
      'Personal website of Hoang Viet Tran, computer science freshman: about, skills, projects and contact information.',

    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.menu.open': 'Open menu',
    'nav.menu.close': 'Close menu',

    'lang.switch': 'Chuyển sang tiếng Việt',
    'lang.short': 'VI',
    'theme.toggle': 'Toggle light/dark mode',

    'home.title': 'Home',
    'home.greeting': "Hi, I'm",
    'home.intro':
      'I am learning the fundamentals of programming and how software is built. This site documents my projects and progress, and was created with the help of Claude.',
    'home.cta.projects': 'View projects',
    'home.cta.contact': 'Get in touch',
    'home.featured': 'Featured projects',
    'home.viewAll': 'View all projects',

    'about.title': 'About',
    'about.description': 'Bio, skills, work experience and education of Hoang Viet Tran.',
    'about.skills': 'Skills',
    'about.experience': 'Experience',
    'about.education': 'Education',
    'about.cv': 'Download CV (PDF)',

    'projects.title': 'Projects',
    'projects.description': 'Selected projects with the technologies used and the results achieved.',
    'projects.intro': 'A selection of things I have built. Click a project to read more.',
    'projects.demo': 'Live demo',
    'projects.repo': 'Source code',
    'projects.back': 'All projects',
    'projects.empty': 'No projects yet.',

    'contact.title': 'Contact',
    'contact.description': 'How to reach Hoang Viet Tran by email and on social networks.',
    'contact.intro':
      'Have an opportunity, a project to build, or just want to say hello? Send an email or connect on social media and I will get back to you soon.',
    'contact.email': 'Email',
    'contact.social': 'Social',

    'footer.rights': 'All rights reserved by',
    'footer.built': 'Built with Astro',

    '404.title': 'Page not found',
    '404.text': 'The page you are looking for does not exist or has been moved.',
    '404.home': 'Back to home',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
