---
title: Website bán hàng cho cửa hàng thời trang
description: Cửa hàng trực tuyến tĩnh với giỏ hàng, thanh toán qua Stripe và tốc độ tải dưới 1 giây trên mobile.
date: 2025-06-15
tags: [Astro, TypeScript, Stripe, Tailwind]
links:
  demo: https://example.com
  repo: https://github.com/username/storefront
featured: true
translationKey: storefront
---

## Bối cảnh

Một cửa hàng thời trang nhỏ cần bán hàng trực tuyến nhưng không muốn trả phí hàng tháng cho nền tảng thương mại điện tử. Yêu cầu chính là trang tải nhanh trên điện thoại, dễ cập nhật sản phẩm và chi phí vận hành gần như bằng 0.

## Giải pháp

- Xây dựng site tĩnh bằng Astro, sản phẩm quản lý bằng file Markdown để chủ cửa hàng tự thêm.
- Giỏ hàng chạy hoàn toàn ở trình duyệt, thanh toán qua Stripe Checkout nên không cần backend.
- Tối ưu ảnh tự động, lazy-load và preload font để đạt điểm Lighthouse trên 95.

## Kết quả

- Thời gian tải trang chủ trên 4G: dưới 1 giây.
- Chi phí hosting: 0 đồng nhờ Vercel gói miễn phí.
- Tỷ lệ chuyển đổi trên mobile tăng khoảng 25% so với trang cũ.
