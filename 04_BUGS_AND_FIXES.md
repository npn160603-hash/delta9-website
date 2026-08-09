# 04 — Lỗi và cách xử lý

> Cập nhật: 2026-08-10. Phân biệt rõ lỗi đã sửa, lỗi còn mở và thông tin chưa đủ để kết luận.

## 1. Lỗi/sự cố đã xuất hiện và đã xử lý

### 1.1 Vercel báo `Invalid Configuration` cho custom domain

- **Biểu hiện:** cả apex và `www` có biểu tượng đỏ sau khi thêm domain vào Vercel.
- **Nguyên nhân:** DNS tại iNET chưa khớp các record Vercel yêu cầu.
- **Cách sửa đã thực hiện:**
  - A record `@` → `216.198.79.1`;
  - CNAME `www` → `308af9257f99599a.vercel-dns-017.com`;
  - chờ DNS propagation rồi Refresh trong Vercel.
- **Kết quả quan sát:** Vercel chuyển sang `Valid Configuration` cho cả hai domain.
- **Lưu ý:** luôn lấy giá trị DNS hiện tại từ Vercel trước khi cấu hình lại; không mặc định các giá trị lịch sử sẽ tồn tại vĩnh viễn.

### 1.2 SSL ở trạng thái `Generating SSL Certificate`

- **Biểu hiện:** domain đã valid nhưng `www` hiển thị đang tạo chứng chỉ.
- **Nguyên nhân:** quá trình cấp SSL tự động sau khi DNS vừa xác thực; không có bằng chứng về lỗi cấu hình mới.
- **Xử lý:** chờ Vercel cấp certificate, không thêm record SSL thủ công.
- **Trạng thái cuối:** **UNKNOWN / NEED CONFIRMATION**. Website production về sau đã được dùng trong cuộc hội thoại, nhưng chưa có kiểm tra SSL độc lập được ghi lại.

### 1.3 Biểu mẫu liên hệ chỉ có giao diện, không gửi email

- **Biểu hiện:** form ban đầu không có submit flow/API gửi mail.
- **Nguyên nhân:** chưa có Client Component xử lý submit và chưa có backend/Route Handler.
- **Cách sửa:**
  - tạo `app/[lang]/contact/ContactForm.tsx`;
  - tạo `app/api/contact/route.ts`;
  - POST JSON tới API nội bộ;
  - validate server-side, honeypot, escape HTML;
  - gọi Resend API và đặt `reply_to` theo email khách;
  - thêm trạng thái sending/success/error;
  - bổ sung hướng dẫn environment variables trong `README.md`.
- **Commit production:** `be1454bbb1b3cbecb459e5a0200cdb1d62a5995d`.
- **Trạng thái:** code đã sửa; xác nhận Gmail nhận thư end-to-end vẫn còn thiếu.

### 1.4 API email thiếu cấu hình môi trường

- **Biểu hiện dự kiến từ code:** API trả 500 `Email service is not configured` nếu thiếu `RESEND_API_KEY` hoặc `CONTACT_TO_EMAIL`.
- **Nguyên nhân:** secret và recipient không được hard-code, nên Vercel cần cấu hình thủ công.
- **Cách sửa đã thực hiện:** người dùng thêm cả hai biến trong Vercel cho Production và Preview rồi redeploy.
- **Trạng thái:** biến đã xuất hiện trong dashboard; giá trị thật và kết quả gửi không thể kiểm tra từ source.

### 1.5 Trang mặc định mở tiếng Việt thay vì tiếng Anh

- **Biểu hiện:** `app/page.tsx` redirect `/` → `/vi`.
- **Nguyên nhân:** route gốc được viết với tiếng Việt là mặc định ban đầu.
- **Cách sửa:** đổi sang `redirect("/en")`.
- **Commit production:** `9cfe5db4239f2d61474a07ec9afbdf3c36209720`.
- **Trạng thái:** đã sửa.

### 1.6 Các lỗi giao diện nền tối trong lịch sử Git

Lịch sử commit cho thấy các lần sửa:

- `Fix Why Choose Us mobile background` (`da8e246...`);
- `Force dark background on Why Choose Us` (`a0f7b89...`);
- `Apply dark background to news section` (`7bccdb2...`);
- `Update website dark sections` (`1b512d9...`).

Source hiện tại dùng màu nền inline/class rõ ràng cho các section liên quan. Nguyên nhân chi tiết của từng lỗi cũ: **UNKNOWN / NEED CONFIRMATION**.

### 1.7 `npm run lint` thất bại trong Navbar

- **File:** `app/components/Navbar/Navbar.tsx`.
- **Biểu hiện cũ:** effect theo `pathname` gọi `setMobileMenuOpen(false)` đồng bộ, vi phạm `react-hooks/set-state-in-effect`.
- **Nguyên nhân:** state boolean phải được cập nhật sau mỗi route change chỉ để đóng menu, tạo thêm một vòng render trong effect.
- **Cách sửa:** bỏ `useEffect`; lưu pathname tại thời điểm menu được mở trong `openMobileMenuPath`. `mobileMenuOpen` được suy ra bằng phép so sánh với pathname hiện tại, nên route change và Back/Forward tự làm menu đóng mà không set state trong effect.
- **Kết quả:** targeted lint, full-project lint và production build đều pass ngày 2026-08-10.

## 2. Lỗi còn chưa giải quyết

### 2.1 `/en/news` không thực sự là tiếng Anh

- **File:** `app/[lang]/news/page.tsx`, `app/data/news.ts`.
- **Biểu hiện:** page không đọc `params.lang`; tiêu đề, metadata, ngày và nội dung đều chủ yếu tiếng Việt ở cả `/vi/news` và `/en/news`.
- **Nguyên nhân:** data model `newsItems` chỉ có một chuỗi, không có `{ vi, en }`.
- **Tình trạng:** chưa sửa vì bản dịch và link nguồn chưa được người dùng cung cấp/xác nhận.

### 2.2 `<html lang>` sai trên trang tiếng Anh

- **File:** `app/layout.tsx`.
- **Biểu hiện:** `lang="vi"` được hard-code cho mọi route, kể cả `/en`.
- **Ảnh hưởng:** accessibility, screen reader và SEO language signal không chính xác.
- **Tình trạng:** chưa sửa. Cần chọn kiến trúc root layout theo locale phù hợp với Next.js 16 và route redirect `/`.

### 2.3 Metadata mặc định vẫn ưu tiên tiếng Việt

- **File:** `app/layout.tsx`, `app/[lang]/news/page.tsx`.
- **Biểu hiện:** root description là tiếng Việt dù tiếng Anh đã là mặc định; News metadata luôn tiếng Việt.
- **Tình trạng:** chưa sửa cùng lý do địa phương hóa/SEO ở trên.

### 2.4 Footer có mục trông như chức năng nhưng chưa hoạt động

- **File:** `app/components/Footer/Footer.tsx`.
- **Biểu hiện:** Privacy Policy và Terms of Use là `<span>`, không phải link; QR chỉ là ô chữ `QR`.
- **Nguyên nhân:** chưa có nội dung pháp lý/asset QR hoặc route tương ứng.
- **Tình trạng:** chưa sửa vì người dùng chưa cung cấp nội dung/đích QR.

### 2.5 Tin tức chưa có link bài viết

- **File:** `app/data/news.ts`.
- **Biểu hiện:** cả ba `link` đều là chuỗi rỗng; UI hiển thị “Link bài báo sẽ được cập nhật”.
- **Nguyên nhân:** chưa có URL nguồn.
- **Tình trạng:** chờ nội dung từ người dùng.

### 2.6 Gửi email production chưa được xác minh end-to-end

- **Source:** code và env bắt buộc đã có.
- **Rủi ro:** sender mặc định `onboarding@resend.dev` chỉ gửi đến email sở hữu tài khoản Resend. Đổi `CONTACT_TO_EMAIL` sang Gmail khác có thể nhận 403 cho đến khi xác minh domain gửi và cấu hình `CONTACT_FROM_EMAIL`.
- **Tình trạng:** **UNKNOWN / NEED CONFIRMATION** liệu Gmail đã nhận một submission production thành công.

### 2.7 Chống spam còn giới hạn

- **Hiện có:** honeypot ẩn và validation độ dài/định dạng.
- **Thiếu:** rate limiting, CAPTCHA, IP throttling, audit log/persistence.
- **Phân loại:** giới hạn kỹ thuật, chưa phải bug được người dùng báo.

## 3. Giải pháp/phương án đã thử nhưng không giữ lại

### Resend npm SDK

- Trong quá trình triển khai form, dependency `resend` từng được thêm/cân nhắc.
- Sau đó package changes được hoàn nguyên và code chuyển sang native `fetch` tới REST API.
- Lý do: chức năng chỉ cần một API call; tránh thêm runtime dependency và thay đổi lockfile không cần thiết.
- Đây không phải lỗi production; là phương án triển khai đã bỏ.

### GitHub CLI trong môi trường tài liệu bàn giao

- `gh` không có trong môi trường làm việc ngày 2026-08-10.
- Không thể dùng luồng local push/PR tiêu chuẩn.
- Phương án thay thế: dùng GitHub app đã kết nối để tạo blob/tree/commit và cập nhật ref, sau đó fetch commit để xác minh.
- Đây là giới hạn công cụ phát triển, không phải lỗi website.

## 4. Kiểm tra hồi quy tối thiểu

Sau mỗi thay đổi quan trọng:

```bash
npm ci
npm run build
npm run lint
```

Kiểm tra thủ công:

1. `/` chuyển đến `/en`.
2. VI/EN giữ đúng trang hiện tại.
3. Menu mobile mở/đóng và đóng sau khi điều hướng.
4. Sáu project detail mở được ở cả hai locale.
5. Healthy Natural Vietnam mở được ở cả hai locale.
6. Contact form kiểm tra cả dữ liệu hợp lệ và không hợp lệ.
7. Resend Events ghi nhận email; Gmail kiểm tra Inbox, Promotions và Spam.
8. Apex redirect sang `www`; HTTPS hợp lệ.
