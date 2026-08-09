# 00 — Tổng quan dự án

> Cập nhật: 2026-08-10  
> Source of truth đã đối chiếu: nhánh `main`, commit `9cfe5db4239f2d61474a07ec9afbdf3c36209720`  
> Repository: <https://github.com/thedelta9global-prog/delta9-website>

## 1. Dự án dùng để làm gì

Đây là website giới thiệu doanh nghiệp của **The Delta9 Global Corporation**. Website trình bày:

- thông tin và định vị doanh nghiệp;
- dịch vụ tư vấn kinh doanh quốc tế, đầu tư, phát triển dự án và quan hệ chính phủ;
- các lĩnh vực dự án/đầu tư;
- dự án nổi bật Healthy Natural Vietnam;
- mạng lưới đối tác;
- tin tức và cơ hội đầu tư;
- thông tin liên hệ và biểu mẫu gửi yêu cầu tư vấn qua email.

Website hỗ trợ tiếng Anh và tiếng Việt. Tiếng Anh là ngôn ngữ mặc định khi truy cập tên miền không có tiền tố ngôn ngữ.

## 2. Mục tiêu cuối cùng đã được xác nhận

1. Có một website doanh nghiệp hoạt động công khai trên tên miền đã mua tại iNET.
2. Source code được quản lý trên GitHub và tự động triển khai lên Vercel khi nhánh `main` thay đổi.
3. Người truy cập có thể xem nội dung bằng tiếng Anh hoặc tiếng Việt.
4. Khi truy cập `/`, người dùng được chuyển đến `/en`.
5. Người truy cập có thể điền biểu mẫu liên hệ; hệ thống gửi nội dung đến Gmail được cấu hình mà không làm lộ khóa API trên trình duyệt.
6. Dự án có tài liệu bàn giao đủ để một AI mới tiếp tục làm việc mà không cần lịch sử hội thoại.

Không có yêu cầu đã xác nhận về đăng nhập, trang quản trị, cơ sở dữ liệu, thanh toán, CMS hoặc mô hình AI.

## 3. Người dùng dự kiến

- doanh nghiệp và tổ chức quan tâm đến hợp tác quốc tế;
- nhà đầu tư và đối tác dự án;
- cơ quan/tổ chức cần dịch vụ tư vấn hoặc kết nối;
- người muốn tìm hiểu về Delta9 Global và gửi yêu cầu liên hệ;
- quản trị viên kỹ thuật duy trì nội dung và triển khai website qua GitHub/Vercel.

Phân khúc chi tiết, lưu lượng dự kiến và yêu cầu truy cập nội bộ: **UNKNOWN / NEED CONFIRMATION**.

## 4. Công nghệ đang sử dụng

| Thành phần | Công nghệ/phiên bản đã xác minh |
|---|---|
| Framework | Next.js `16.2.10`, App Router |
| UI runtime | React `19.2.4`, React DOM `19.2.4` |
| Ngôn ngữ | TypeScript `^5`, cấu hình `strict: true` |
| CSS | Tailwind CSS `^4` qua `@tailwindcss/postcss` |
| Icon | `lucide-react ^1.24.0` |
| Font | Geist và Geist Mono qua `next/font/google` |
| Lint | ESLint `^9`, `eslint-config-next 16.2.10` |
| Package manager | npm; lockfile: `package-lock.json` |
| Email | Resend HTTP API, gọi bằng `fetch` phía server |
| Hosting | Vercel |
| Source control | GitHub, nhánh triển khai `main` |
| DNS/registrar | iNET OnePortal/OneShield |

Không có dependency SDK Resend trong `package.json`; API được gọi trực tiếp để tránh thêm thư viện không cần thiết.

## 5. Môi trường chạy

### Production

- Vercel project: `delta9-website`.
- Git source: `thedelta9global-prog/delta9-website`, nhánh `main`.
- Vercel URL từng được quan sát: `delta9-website-puce.vercel.app`.
- Tên miền chính: `www.thedelta9global-usa.com`.
- Tên miền gốc `thedelta9global-usa.com` được cấu hình chuyển hướng đến `www.thedelta9global-usa.com`.
- Vercel tự tạo deployment mới khi có commit trên `main`.

DNS từng được cấu hình và Vercel hiển thị `Valid Configuration`:

| Type | Name | Value đã quan sát |
|---|---|---|
| A | `@` | `216.198.79.1` |
| CNAME | `www` | `308af9257f99599a.vercel-dns-017.com` |

Các giá trị DNS ở trên là trạng thái đã quan sát trong quá trình cấu hình. Trước khi thay đổi DNS, phải đối chiếu lại yêu cầu hiện tại trong Vercel vì nhà cung cấp có thể thay đổi giá trị đích.

### Biến môi trường

| Biến | Bắt buộc | Mục đích |
|---|---:|---|
| `RESEND_API_KEY` | Có | Xác thực yêu cầu gửi email tới Resend |
| `CONTACT_TO_EMAIL` | Có | Địa chỉ nhận biểu mẫu liên hệ |
| `CONTACT_FROM_EMAIL` | Không khi thử nghiệm; nên có ở production | Địa chỉ gửi thuộc domain đã xác minh trong Resend |

`RESEND_API_KEY` và `CONTACT_TO_EMAIL` đã được người dùng thêm vào Vercel cho **Production and Preview**. Giá trị thật bị che và không nằm trong source code. `CONTACT_FROM_EMAIL` chưa được xác nhận là đã cấu hình.

Phiên bản Node.js thực tế trong Vercel: **UNKNOWN / NEED CONFIRMATION**.

## 6. Cách khởi động dự án cục bộ

### Yêu cầu

- Node.js tương thích với Next.js 16.2.10; phiên bản chuẩn của dự án chưa được khóa trong `.nvmrc` hoặc `engines`.
- npm.

### Cài đặt và chạy

```bash
git clone https://github.com/thedelta9global-prog/delta9-website.git
cd delta9-website
npm ci
npm run dev
```

Mở <http://localhost:3000>. Route `/` sẽ chuyển đến `/en`.

### Cấu hình email cục bộ

Tạo `.env.local` và không commit file này:

```text
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=your-account-email@example.com
CONTACT_FROM_EMAIL=Delta9 Website <website@verified-domain.example>
```

`CONTACT_FROM_EMAIL` có thể bỏ trống khi thử nghiệm; code sẽ dùng `Delta9 Website <onboarding@resend.dev>`. Sender thử nghiệm này chỉ gửi được đến email gắn với tài khoản Resend.

### Kiểm tra

```bash
npm run build
npm run lint
```

Trạng thái ngày 2026-08-10:

- `npm run build`: **PASS**.
- `npm run lint`: **FAIL**, còn một lỗi đã biết tại `app/components/Navbar/Navbar.tsx`; xem `04_BUGS_AND_FIXES.md`.

## 7. Các route chính

| Route | Chức năng |
|---|---|
| `/` | Chuyển hướng đến `/en` |
| `/en`, `/vi` | Trang chủ theo ngôn ngữ |
| `/[lang]/about` | Giới thiệu |
| `/[lang]/services` | Dịch vụ |
| `/[lang]/projects` | Danh sách lĩnh vực dự án |
| `/[lang]/projects/[slug]` | Chi tiết dự án từ dữ liệu tĩnh |
| `/[lang]/projects/healthy-natural-vietnam` | Trang dự án nổi bật riêng |
| `/[lang]/partners` | Đối tác công khai |
| `/[lang]/news` | Tin tức tĩnh; hiện chưa địa phương hóa đầy đủ |
| `/[lang]/contact` | Thông tin và biểu mẫu liên hệ |
| `/api/contact` | POST API gửi biểu mẫu qua Resend |

