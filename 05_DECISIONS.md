# 05 — Quyết định quan trọng

> Cập nhật: 2026-08-10. Phần “lý do” chỉ ghi điều có thể suy ra trực tiếp từ code/lịch sử đã biết; chỗ thiếu bằng chứng được đánh dấu.

## 1. Nền tảng và triển khai

### Chọn Vercel thay vì Netlify

- **Quyết định:** production chạy trên Vercel.
- **Bằng chứng:** project `delta9-website`, custom domains và deployments đã cấu hình tại Vercel.
- **Lý do được xác minh:** dự án Next.js kết nối GitHub và Vercel tự deploy từ `main`.
- Lý do so sánh chi phí/kỹ thuật chi tiết với Netlify: **UNKNOWN / NEED CONFIRMATION**.

### GitHub `main` là nguồn triển khai

- **Quyết định:** Vercel theo dõi nhánh `main`.
- **Tác động:** commit trực tiếp lên `main` có thể lên production tự động.
- **Hiện trạng workflow:** các thay đổi form và ngôn ngữ mặc định đã được ghi trực tiếp vào `main`; chưa có branch protection/PR policy được xác nhận.

### Apex chuyển hướng sang `www`

- **Quyết định:** `thedelta9global-usa.com` redirect sang `www.thedelta9global-usa.com`.
- **Lý do:** tùy chọn được Vercel đánh dấu recommended và người dùng giữ lựa chọn này khi thêm domain.

## 2. Kiến trúc ứng dụng

### Next.js App Router + TypeScript strict

- **Quyết định hiện có:** route nằm trong `app/`, dùng Server Components mặc định, typed routes và TypeScript strict.
- **Lý do ban đầu:** **UNKNOWN / NEED CONFIRMATION**; repository được tạo bằng create-next-app.
- **Giới hạn:** `AGENTS.md` yêu cầu mọi AI đọc tài liệu trong `node_modules/next/dist/docs/` trước khi sửa vì Next.js 16 có breaking changes.

### Locale nằm trong URL

- **Quyết định:** `/en/...` và `/vi/...`, không dùng cookie/browser detection.
- **Lợi ích từ implementation:** URL rõ ràng, link chuyển ngôn ngữ có thể giữ nguyên route con, tạo tĩnh cả hai locale.
- **Locale được phép:** chỉ `vi`, `en`; locale khác 404.

### Tiếng Anh là mặc định nhưng vẫn giữ tiếng Việt

- **Thay đổi lớn:** root redirect từ `/vi` sang `/en` theo yêu cầu ngày 2026-08-09.
- **Không thay đổi:** route `/vi`, nội dung tiếng Việt và nút VI vẫn được giữ.

### Nội dung tĩnh trong source

- **Quyết định hiện tại:** dự án, đối tác, tin tức và nội dung trang nằm trong TS/JSON.
- **Tác động:** đơn giản, không cần database; mọi cập nhật nội dung cần commit/deploy.
- **CMS/admin:** không được yêu cầu và không tồn tại.
- **Giới hạn hiện tại:** content strategy bị phân tán giữa dictionary JSON, data modules và object cục bộ trong component.

### Healthy Natural Vietnam có landing page riêng

- **Quyết định:** ngoài project data chung, dự án này có `app/[lang]/projects/healthy-natural-vietnam/page.tsx` và teaser riêng.
- **Lý do:** đây là “Featured Venture” với nội dung/thiết kế/lộ trình chi tiết hơn sáu project sector thông thường.

### Chỉ hiển thị đối tác được công khai

- **Quyết định:** `publicPartners = partners.filter(partner => partner.published)`.
- **Tác động:** entry `published: false` không xuất hiện trên website.
- Không tự đổi trạng thái publish hoặc công khai thông tin đối tác chưa đủ dữ liệu.

## 3. Quyết định về biểu mẫu email

### Dùng Route Handler server-side

- **Quyết định:** browser chỉ gọi `/api/contact`; API key và Resend request nằm trong `app/api/contact/route.ts`.
- **Lý do:** giữ secret ngoài client/public bundle và cho phép validation server-side.

### Dùng Resend qua native `fetch`

- **Quyết định cuối:** không cài Resend SDK.
- **Lý do đã ghi nhận:** tránh dependency/lockfile change không cần thiết cho một HTTP call đơn giản.

### Gmail nhận thư là environment variable

- **Quyết định:** `CONTACT_TO_EMAIL` điều khiển recipient.
- **Tác động:** có thể đổi Gmail trong Vercel rồi redeploy mà không sửa code.
- **Không được làm:** hard-code Gmail mới vào repository khi chưa có yêu cầu rõ ràng.

### Sender thử nghiệm và sender production

- **Quyết định:** nếu thiếu `CONTACT_FROM_EMAIL`, dùng `Delta9 Website <onboarding@resend.dev>`.
- **Giới hạn:** sender test chỉ gửi tới email gắn với tài khoản Resend.
- **Production khuyến nghị:** verify domain/subdomain trong Resend và đặt `CONTACT_FROM_EMAIL` trên domain đó. Việc này chưa được xác nhận đã hoàn tất.

### Validation và honeypot

- **Quyết định:** validation ở cả HTML form và server; honeypot `website` làm bot nhận success giả.
- **Giới hạn:** chưa có rate limit/CAPTCHA/persistence vì người dùng chưa yêu cầu.

## 4. Quyết định giao diện/nội dung quan sát được

- Màu chủ đạo: xanh navy/đen, vàng, nền section tối; riêng Healthy Natural Vietnam dùng xanh lá/vàng muted.
- Layout dùng Tailwind responsive breakpoints.
- Navbar sticky, có menu mobile và nút VI/EN.
- Font Geist được load qua Next font.
- Ảnh nằm trong `public/`, kể cả thư mục có khoảng trắng `public/images 1/`; không tự đổi đường dẫn nếu chưa cập nhật toàn bộ references.
- Footer hiện chứa placeholder QR và nhãn pháp lý không có link; không tự tạo nội dung pháp lý.

Lý do thương hiệu chính thức cho màu sắc/font/hình ảnh: **UNKNOWN / NEED CONFIRMATION**.

## 5. Phương án đã bỏ hoặc chưa chọn

| Phương án | Quyết định |
|---|---|
| Netlify hosting | Không dùng; Vercel là production |
| Resend npm SDK | Bỏ; native `fetch` |
| Database lưu contact | Chưa chọn/không được yêu cầu |
| CMS/admin | Chưa chọn/không được yêu cầu |
| Browser language auto-detection | Chưa dùng; `/` cố định sang `/en` |
| PR-based release workflow | Chưa được xác nhận; hiện commit `main` deploy trực tiếp |

## 6. Giới hạn và nguyên tắc AI phải tuân theo

1. Không tự suy đoán requirement mới; dùng `UNKNOWN / NEED CONFIRMATION`.
2. Không commit secret, API key hoặc Gmail private ngoài biến môi trường.
3. Không dùng tiền tố `NEXT_PUBLIC_` cho secret email.
4. Không công khai partner có `published: false`.
5. Không sửa thông tin pháp lý, số liệu thành tích, contact, partner hoặc nội dung doanh nghiệp nếu chưa được người dùng xác nhận.
6. Không phá route `/vi` khi tiếng Anh là mặc định.
7. Không thay DNS theo giá trị lịch sử mà không đọc giá trị hiện tại từ Vercel.
8. Không chỉnh code ngoài phạm vi yêu cầu; giữ nguyên thay đổi của người dùng trong working tree.
9. Trước khi sửa Next.js, đọc tài liệu phù hợp trong `node_modules/next/dist/docs/` theo `AGENTS.md`.
10. Chạy ít nhất build và lint; báo trung thực lỗi có sẵn, không ghi “pass” nếu lint vẫn fail.
11. Sau thay đổi lớn, cập nhật bộ tài liệu `00`–`06` để handoff không bị lỗi thời.
12. Không coi các mục `NOT STARTED` trong `03_FEATURE_STATUS.md` là yêu cầu phải làm nếu người dùng chưa yêu cầu.

