---
title: Sales analytics dashboard
description: A dashboard showing revenue, best-selling products and trends over time from internal sales data.
date: 2024-10-20
tags: [Next.js, TypeScript, Recharts, REST API]
links:
  demo: https://example.com
translationKey: analytics-dashboard
---

## Context

The owner of three grocery stores wanted a quick view of how the business was doing each morning without exporting reports from the point-of-sale software.

## Solution

- Next.js pulls data from the POS API and aggregates it by day, week and month.
- Charts with Recharts, filterable by store and date range.
- Mobile-first layout, since the owner mostly checks it on a phone.

## Results

- Fully replaced the manual weekly Excel report.
- Surfaced two product groups with excess stock early enough to adjust purchasing.
