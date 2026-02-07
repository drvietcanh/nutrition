# Hướng dẫn Deploy

## Build đã thành công ✓

Ứng dụng đã được build thành công và sẵn sàng để deploy.

## Các bước deploy lên Vercel

### Option 1: Deploy qua Vercel Dashboard (Khuyến nghị)

1. **Push code lên Git repository:**
   ```bash
   git add .
   git commit -m "Optimize UI and prepare for deployment"
   git push origin main
   ```

2. **Kết nối với Vercel:**
   - Truy cập [vercel.com](https://vercel.com)
   - Đăng nhập và chọn "Add New Project"
   - Import repository từ GitHub/GitLab/Bitbucket
   - Vercel sẽ tự động phát hiện Next.js và cấu hình

3. **Cấu hình Project Settings:**
   - **Root Directory:** `clinical-nutrition`
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build` (tự động)
   - **Output Directory:** `.next` (tự động)
   - **Install Command:** `npm install` (tự động)

4. **Deploy:**
   - Click "Deploy"
   - Vercel sẽ tự động build và deploy

### Option 2: Deploy bằng Vercel CLI

1. **Cài đặt Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login vào Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   cd clinical-nutrition
   vercel
   ```

4. **Deploy production:**
   ```bash
   vercel --prod
   ```

## Cấu hình đã được thiết lập

- ✅ `vercel.json` đã được cấu hình cho monorepo
- ✅ `next.config.ts` đã được tối ưu
- ✅ `robots.txt` và `sitemap.xml` đã được tạo
- ✅ Metadata SEO đã được cấu hình
- ✅ Build thành công không có lỗi

## Environment Variables (nếu cần)

Nếu có environment variables, thêm vào Vercel Dashboard:
- Settings → Environment Variables

## Kiểm tra sau khi deploy

1. Kiểm tra trang chủ: `https://your-domain.vercel.app`
2. Kiểm tra tools: `https://your-domain.vercel.app/tools/energy-protein-calculator`
3. Kiểm tra robots.txt: `https://your-domain.vercel.app/robots.txt`
4. Kiểm tra sitemap: `https://your-domain.vercel.app/sitemap.xml`

## Lưu ý

- Vercel sẽ tự động deploy mỗi khi push code lên branch chính
- Preview deployments sẽ được tạo cho mỗi pull request
- Custom domain có thể được thêm vào Settings → Domains
