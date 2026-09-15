---
title: Dashboard phân tích dữ liệu bán hàng
description: Bảng điều khiển hiển thị doanh thu, sản phẩm bán chạy và xu hướng theo thời gian từ dữ liệu bán hàng nội bộ.
date: 2024-10-20
tags: [Next.js, TypeScript, Recharts, REST API]
links:
  demo: https://example.com
translationKey: analytics-dashboard
---

## Bối cảnh

Chủ chuỗi 3 cửa hàng tạp hóa muốn xem nhanh tình hình kinh doanh mỗi sáng mà không phải xuất báo cáo từ phần mềm bán hàng.

## Giải pháp

- Next.js lấy dữ liệu từ API của phần mềm bán hàng, tổng hợp theo ngày, tuần, tháng.
- Biểu đồ bằng Recharts, có bộ lọc theo cửa hàng và khoảng thời gian.
- Giao diện ưu tiên mobile vì chủ cửa hàng chủ yếu xem trên điện thoại.

## Kết quả

- Thay thế hoàn toàn báo cáo Excel thủ công mỗi tuần.
- Phát hiện sớm 2 nhóm sản phẩm tồn kho cao để điều chỉnh nhập hàng.
