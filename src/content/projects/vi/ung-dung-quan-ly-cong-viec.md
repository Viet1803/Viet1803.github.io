---
title: Ứng dụng quản lý công việc cho nhóm nhỏ
description: Ứng dụng web theo dõi công việc theo bảng Kanban, cập nhật thời gian thực, dùng cho nhóm 5-20 người.
date: 2025-02-01
tags: [React, Node.js, PostgreSQL, WebSocket]
links:
  repo: https://github.com/username/taskboard
featured: true
translationKey: task-manager
---

## Bối cảnh

Một công ty thiết kế nội thất quản lý công việc bằng bảng tính và tin nhắn, dẫn đến trễ hạn và khó biết ai đang làm gì. Họ cần một công cụ đơn giản hơn Jira, phù hợp với nhóm không chuyên về kỹ thuật.

## Giải pháp

- Giao diện Kanban kéo thả bằng React, tối ưu cho cả màn hình lớn và máy tính bảng.
- Backend Node.js với PostgreSQL, đồng bộ thời gian thực qua WebSocket để mọi người thấy thay đổi ngay.
- Phân quyền theo vai trò, thông báo qua email khi việc sắp đến hạn.

## Kết quả

- Nhóm 12 người dùng hằng ngày sau 2 tuần triển khai.
- Số công việc trễ hạn giảm hơn một nửa trong quý đầu tiên.
