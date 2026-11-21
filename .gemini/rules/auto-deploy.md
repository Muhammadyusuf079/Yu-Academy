---
description: Always automatically build, commit and push changes to GitHub and Vercel
globs: **/*
alwaysApply: true
---

# Automatic GitHub & Vercel Deployment Rule

Har qanday o'zgarish, qo'shimcha yoki yangilanish kiritilganda:
1. Loyihani tekshiring (`npm run build`).
2. Barcha o'zgarishlarni avtomatik git orqali commit qiling (`git add -A && git commit -m "..."`).
3. GitHub repositoryga avtomatik push qiling (`git push origin main`).
4. Vercel GitHub-ga ulanganligi sababli, har bir push bilan yangi versiya avtomatik deploy bo'ladi.
5. Har doim yakunda foydalanuvchiga qilingan o'zgarishlar GitHub va Vercel-ga yuklanganini tasdiqlang.
