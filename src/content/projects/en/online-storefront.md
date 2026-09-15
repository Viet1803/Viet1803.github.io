---
title: Online storefront for a fashion boutique
description: A static online shop with a cart, Stripe checkout and sub-second load times on mobile.
date: 2025-06-15
tags: [Astro, TypeScript, Stripe, Tailwind]
links:
  demo: https://example.com
  repo: https://github.com/username/storefront
featured: true
translationKey: storefront
---

## Context

A small fashion boutique wanted to sell online without paying a monthly fee for an e-commerce platform. The key requirements were fast loading on phones, easy product updates and near-zero running costs.

## Solution

- Built a static site with Astro, with products managed as Markdown files so the owner can add them without help.
- The cart runs entirely in the browser and payment goes through Stripe Checkout, so no backend is needed.
- Automatic image optimisation, lazy loading and font preloading to keep Lighthouse scores above 95.

## Results

- Home page load time on 4G: under one second.
- Hosting cost: zero, on Vercel's free tier.
- Mobile conversion rate up roughly 25% compared to the old site.
