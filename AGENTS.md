# YU Academy - Development & Auto-Deployment Guidelines

Whenever any file or feature in this repository is modified or added:
1. Always run `npm run build` to verify there are 0 TypeScript or build errors.
2. Automatically commit the changes: `git add -A && git commit -m "<message>"`.
3. Automatically push to GitHub: `git push origin main`.
4. Vercel is integrated with GitHub `main` branch and automatically triggers a production deployment on every push.
