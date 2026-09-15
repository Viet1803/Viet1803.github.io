/**
 * Thông tin cá nhân dùng chung toàn site.
 * Thay các giá trị placeholder bên dưới bằng thông tin thật của bạn.
 */
export const site = {
  /** Tên hiển thị theo ngôn ngữ (header, footer, tiêu đề trang). */
  name: {
    en: 'Hoang Viet Tran',
    vi: 'Trần Hoàng Việt',
  },
  /** Chữ viết tắt cho avatar placeholder. */
  initials: 'TV',
  /** URL công khai của site. Phải trùng với `site` trong astro.config.mjs. */
  url: 'https://tranhoangviet.vercel.app',
  /** Email liên hệ (placeholder, thay bằng email thật). */
  email: 'email@example.com',
  /** Ảnh đại diện. Thay bằng /images/avatar.jpg khi có ảnh thật. */
  avatar: '/images/avatar.svg',
  /** Link tải CV theo ngôn ngữ. Để chuỗi rỗng nếu chưa có, nút sẽ tự ẩn. */
  cv: {
    vi: '',
    en: '',
  },
  /** Mạng xã hội hiển thị ở trang Liên hệ và footer. */
  social: [
    { key: 'github', label: 'GitHub', url: 'https://github.com/username' },
    { key: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/username' },
  ],
} as const;
