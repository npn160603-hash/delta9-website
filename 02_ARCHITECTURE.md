# 02 — Kiến trúc dự án

> Cập nhật: 2026-08-10. Kiến trúc được mô tả từ source code trên nhánh `main`.

## 1. Tổng quan kiến trúc

Dự án là một ứng dụng **Next.js App Router** trong một repository duy nhất:

- phần lớn trang được tạo tĩnh cho hai locale `vi` và `en`;
- nội dung lấy từ object TypeScript/JSON trong source, không có CMS/database;
- component mặc định là Server Component;
- chỉ `Navbar` và `ContactForm` là Client Component vì cần state/sự kiện trình duyệt;
- `/api/contact` là Route Handler chạy Node.js và gọi Resend API;
- Vercel build/deploy từ GitHub `main`;
- iNET giữ DNS trỏ tên miền đến Vercel.

## 2. Cấu trúc thư mục

```text
delta9-website/
├── app/
│   ├── [lang]/
│   │   ├── about/page.tsx
│   │   ├── contact/
│   │   │   ├── ContactForm.tsx
│   │   │   └── page.tsx
│   │   ├── news/page.tsx
│   │   ├── partners/page.tsx
│   │   ├── projects/
│   │   │   ├── [slug]/page.tsx
│   │   │   ├── healthy-natural-vietnam/page.tsx
│   │   │   └── page.tsx
│   │   ├── services/page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── api/contact/route.ts
│   ├── components/
│   │   ├── About/About.tsx
│   │   ├── FeaturedVenture/FeaturedVenture.tsx
│   │   ├── Footer/Footer.tsx
│   │   ├── Hero/Hero.tsx
│   │   ├── HomeAbout/HomeAbout.tsx
│   │   ├── Navbar/Navbar.tsx
│   │   ├── New/New.tsx
│   │   ├── Partners/Partners.tsx
│   │   ├── Projects/Projects.tsx
│   │   └── WhyChooseUs/WhyChooseUs.tsx
│   ├── data/
│   │   ├── news.ts
│   │   ├── partners.ts
│   │   ├── projects.ts
│   │   └── services.ts
│   ├── dictionaries/
│   │   ├── en.json
│   │   └── vi.json
│   ├── dictionaries.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── images/
│   └── images 1/
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
└── tsconfig.json
```

## 3. Vai trò các file/module quan trọng

### Khung ứng dụng và locale

| File | Vai trò |
|---|---|
| `app/layout.tsx` | Root layout, metadata mặc định, font Geist, `<html>` và `<body>` |
| `app/page.tsx` | Redirect route `/` sang `/en` |
| `app/[lang]/layout.tsx` | Xác thực locale, tải dictionary, bao mọi trang ngôn ngữ bằng Navbar/Footer, tạo static params cho `vi`/`en` |
| `app/dictionaries.ts` | Danh sách locale, type `Locale`, kiểm tra locale và dynamic import dictionary |
| `app/dictionaries/en.json` | Nhãn Navbar, Hero và một phần nội dung tiếng Anh |
| `app/dictionaries/vi.json` | Nhãn Navbar, Hero và một phần nội dung tiếng Việt |

Lưu ý: chiến lược nội dung hiện không đồng nhất. Một phần dùng JSON dictionary; nhiều component/page khác chứa object `vi/en` trực tiếp trong file.

### Trang chủ và component dùng lại

| File | Vai trò |
|---|---|
| `app/[lang]/page.tsx` | Ghép các section của trang chủ |
| `Hero/Hero.tsx` | Hero ảnh nền, tiêu đề theo dictionary, CTA tới Contact |
| `HomeAbout/HomeAbout.tsx` | Giới thiệu doanh nghiệp và ba giá trị nổi bật |
| `About/About.tsx` | Section dịch vụ trên trang chủ |
| `Projects/Projects.tsx` | Lưới 6 lĩnh vực dự án từ `app/data/projects.ts` |
| `FeaturedVenture/FeaturedVenture.tsx` | Teaser cho Healthy Natural Vietnam |
| `Partners/Partners.tsx` | Hiển thị tối đa 4 đối tác công khai |
| `WhyChooseUs/WhyChooseUs.tsx` | Các số liệu/điểm nổi bật |
| `New/New.tsx` | Section tin tức và cơ hội đầu tư trên trang chủ |
| `Navbar/Navbar.tsx` | Menu desktop/mobile, active state, chuyển locale giữ nguyên path |
| `Footer/Footer.tsx` | Thông tin công ty, quick links, ngành, liên hệ, placeholder QR |

### Trang nội dung

| File | Vai trò |
|---|---|
| `app/[lang]/about/page.tsx` | Giới thiệu, câu chuyện, tầm nhìn, sứ mệnh, giá trị |
| `app/[lang]/services/page.tsx` | Danh sách 4 nhóm dịch vụ song ngữ |
| `app/[lang]/projects/page.tsx` | Danh sách dự án từ data source |
| `app/[lang]/projects/[slug]/page.tsx` | Tạo route tĩnh và trang chi tiết cho 6 project slug |
| `app/[lang]/projects/healthy-natural-vietnam/page.tsx` | Trang landing riêng, nội dung song ngữ cho dự án nổi bật |
| `app/[lang]/partners/page.tsx` | Danh sách chi tiết đối tác có `published: true` |
| `app/[lang]/news/page.tsx` | Danh sách tin từ `app/data/news.ts`; hiện chủ yếu tiếng Việt |
| `app/[lang]/contact/page.tsx` | Nội dung liên hệ song ngữ và host `ContactForm` |

### Dữ liệu

| File | Người dùng trực tiếp | Nội dung |
|---|---|---|
| `app/data/projects.ts` | Trang dự án, project detail, section Projects | 6 dự án, text `vi/en`, ảnh, highlights |
| `app/data/partners.ts` | Section/trang Partners | Đối tác, thông tin liên hệ, `published`; export `publicPartners` |
| `app/data/news.ts` | Trang News | 3 mục tin tĩnh tiếng Việt, link đang rỗng |
| `app/data/services.ts` | Không tìm thấy import hiện tại | Dữ liệu dịch vụ tiếng Việt kiểu cũ; khả năng là dư thừa, chưa được xác nhận để xóa |

### API liên hệ

| File | Vai trò |
|---|---|
| `app/[lang]/contact/ContactForm.tsx` | Client form, HTML validation, trạng thái submitting/success/error, POST JSON |
| `app/api/contact/route.ts` | Server validation, honeypot, escape HTML, gọi Resend, trả JSON status |
| `README.md` | Ghi cách cấu hình các biến môi trường email |

### Cấu hình

| File | Vai trò |
|---|---|
| `package.json` | Script và dependencies |
| `package-lock.json` | Khóa phiên bản dependency |
| `tsconfig.json` | TypeScript strict, bundler resolution, alias `@/*` |
| `eslint.config.mjs` | Next Core Web Vitals + TypeScript lint |
| `postcss.config.mjs` | Tailwind CSS PostCSS plugin |
| `next.config.ts` | Hiện không có tùy chỉnh Next.js |
| `AGENTS.md` | Yêu cầu AI đọc tài liệu Next.js cục bộ vì phiên bản có breaking changes |
| `CLAUDE.md` | Tham chiếu lại `AGENTS.md` |

## 4. Luồng hoạt động

### 4.1 Truy cập và render trang

1. Truy cập `/`.
2. `app/page.tsx` gọi `redirect("/en")`.
3. Segment `[lang]` nhận `en` hoặc `vi`.
4. `app/[lang]/layout.tsx` dùng `hasLocale`; locale khác trả 404.
5. Layout tải dictionary tương ứng và truyền nhãn cho Navbar.
6. Page lấy nội dung tĩnh theo `lang`, render Server Component/SSG.
7. Navbar và Footer bọc toàn bộ trang locale.

### 4.2 Chuyển ngôn ngữ

1. `Navbar` đọc `usePathname()`.
2. `createLanguagePath()` thay segment đầu tiên giữa `vi` và `en`.
3. Người dùng vẫn ở trang tương đương, ví dụ `/vi/projects` → `/en/projects`.
4. Các slug dự án không được dịch; chỉ nội dung hiển thị được dịch.

### 4.3 Dữ liệu dự án và đối tác

- Project page/detail đọc `projects` từ `app/data/projects.ts`.
- `generateStaticParams()` tạo trước hai locale cho mỗi project slug.
- Partner UI chỉ đọc `publicPartners`, là danh sách đã lọc `published: true`.
- Không có API/database để chỉnh nội dung; thay đổi phải sửa source rồi deploy.

### 4.4 Biểu mẫu liên hệ

1. `ContactForm` chặn submit mặc định và tạo JSON gồm `name`, `email`, `message`, `website`, `locale`.
2. Browser POST tới `/api/contact`.
3. Route Handler parse JSON; body lỗi trả 400.
4. Nếu honeypot `website` có dữ liệu, API trả success giả và không gửi email.
5. Server kiểm tra độ dài và định dạng email.
6. Server đọc `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
7. Server escape HTML, tạo email HTML + plain text.
8. Server POST tới `https://api.resend.com/emails` với `reply_to` là email người gửi.
9. Resend thành công → API trả `{ ok: true }`; lỗi upstream → 502; thiếu cấu hình → 500.
10. Client hiện thông báo song ngữ và reset form khi thành công.

Không có lưu trữ submission trong database. Nếu Resend/Gmail thất bại thì website không có bản sao cục bộ.

### 4.5 CI/CD và domain

1. Thay đổi được commit lên GitHub `main`.
2. Vercel phát hiện commit và build Next.js.
3. Deployment production được gắn với domain `www.thedelta9global-usa.com`.
4. DNS iNET chuyển request đến Vercel.
5. Apex domain chuyển hướng đến `www`.

Không thấy file GitHub Actions trong repository. CI/CD hiện do Vercel quản lý.

## 5. Quan hệ phụ thuộc giữa file

| File nguồn | Phụ thuộc trực tiếp quan trọng |
|---|---|
| `app/[lang]/layout.tsx` | `app/dictionaries.ts`, `Navbar.tsx`, `Footer.tsx` |
| `app/[lang]/page.tsx` | 8 component section trang chủ, `app/dictionaries.ts` |
| `Navbar.tsx` | `next/link`, `next/image`, `next/navigation`, `lucide-react`; nhận labels từ dictionary |
| `Hero.tsx` | Nội dung `dictionary.hero` do home page truyền vào |
| `Projects.tsx` | `app/data/projects.ts` |
| `app/[lang]/projects/page.tsx` | `app/data/projects.ts`, `app/dictionaries.ts` |
| `app/[lang]/projects/[slug]/page.tsx` | `app/data/projects.ts`, `app/dictionaries.ts` |
| `Partners.tsx` | `app/data/partners.ts` qua `publicPartners` |
| `app/[lang]/partners/page.tsx` | `app/data/partners.ts`, `app/dictionaries.ts` |
| `app/[lang]/news/page.tsx` | `app/data/news.ts` |
| `app/[lang]/contact/page.tsx` | `app/dictionaries.ts`, `ContactForm.tsx` |
| `ContactForm.tsx` | `/api/contact` qua HTTP |
| `app/api/contact/route.ts` | Resend REST API, Vercel environment variables |
| Mọi component dùng ảnh | File tương ứng dưới `public/images` hoặc `public/images 1` |

## 6. Dependencies và dịch vụ bên ngoài

### Runtime/npm

- `next 16.2.10`
- `react 19.2.4`
- `react-dom 19.2.4`
- `lucide-react ^1.24.0`

### Build/dev

- TypeScript, ESLint, eslint-config-next
- Tailwind CSS 4 và PostCSS plugin
- type definitions cho Node/React

### Dịch vụ ngoài

| Dịch vụ | Mục đích | Secret/cấu hình |
|---|---|---|
| GitHub | Source control | Repository public; quyền ghi qua tài khoản/plugin |
| Vercel | Build, hosting, deployment, SSL/domain mapping | Project settings và environment variables |
| iNET OnePortal/OneShield | Registrar/DNS/WAF interface | A/CNAME/Nameserver bên ngoài source |
| Resend | Gửi email biểu mẫu | `RESEND_API_KEY`, sender domain |
| Gmail | Hộp thư nhận | `CONTACT_TO_EMAIL` |

### AI/model

Không có API AI, model AI hoặc thư viện AI trong runtime của website. AI chỉ được dùng như công cụ hỗ trợ phát triển ngoài ứng dụng.

## 7. Ranh giới và đặc tính kiến trúc

- Không có database, queue, CMS, auth hoặc persistent logging riêng.
- Nội dung công khai nằm trực tiếp trong source; mọi chỉnh sửa nội dung tạo deployment mới.
- Email API là phần động duy nhất được xác minh.
- Secret chỉ tồn tại trong Vercel hoặc `.env.local` và không được đưa vào Git.
- Các trang dùng `generateStaticParams` để tạo route tĩnh cho locale/project.
- Root `<html lang>` hiện bị hard-code `vi`; đây là lỗi kiến trúc đối với `/en`, xem `04_BUGS_AND_FIXES.md`.
