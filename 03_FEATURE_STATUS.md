# 03 — Trạng thái tính năng

> Cập nhật: 2026-08-10. Trạng thái chỉ dùng: `DONE`, `PARTIAL`, `NOT STARTED`, `BROKEN`, `DEPRECATED`.

| Feature | Trạng thái | File liên quan | Ghi chú |
|---|---|---|---|
| Build production Next.js | DONE | `package.json`, toàn bộ `app/` | `npm run build` pass ngày 2026-08-10; tạo 33 trang tĩnh/SSG và 1 route API động |
| Trang chủ `/[lang]` | DONE | `app/[lang]/page.tsx`, `app/components/**` | Có Hero, giới thiệu, dịch vụ, dự án, venture, đối tác, lý do chọn, tin tức |
| Tiếng Anh mặc định | DONE | `app/page.tsx` | `/` redirect sang `/en`; commit `9cfe5db...` |
| Route song ngữ VI/EN | DONE | `app/dictionaries.ts`, `app/[lang]/layout.tsx` | Chỉ chấp nhận `vi` và `en`; locale khác trả 404 |
| Nội dung song ngữ toàn website | PARTIAL | `app/dictionaries/**`, các page/component | Phần lớn nội dung có VI/EN; trang `/en/news` vẫn hiển thị nội dung/metadata tiếng Việt |
| Thuộc tính ngôn ngữ HTML | BROKEN | `app/layout.tsx` | `<html lang="vi">` hard-code, nên `/en` vẫn báo document language là tiếng Việt |
| Navbar desktop/mobile | DONE | `app/components/Navbar/Navbar.tsx` | Điều hướng, active state và VI/EN hoạt động; menu tự đóng khi pathname đổi mà không dùng effect cập nhật state |
| ESLint toàn dự án | DONE | `app/components/Navbar/Navbar.tsx` | `npm run lint` pass sau khi thay state boolean bằng pathname của menu đang mở |
| Responsive UI | PARTIAL | các component/page | Có breakpoint Tailwind rộng rãi; chưa có kết quả QA thiết bị/trình duyệt chính thức |
| Trang Giới thiệu | DONE | `app/[lang]/about/page.tsx` | Song ngữ, metadata theo locale, CTA liên hệ |
| Trang Dịch vụ | DONE | `app/[lang]/services/page.tsx` | 4 nhóm dịch vụ song ngữ, metadata và CTA |
| Dữ liệu dịch vụ cũ | DEPRECATED | `app/data/services.ts` | Không được import ở source hiện tại; chưa xóa để tránh mất dữ liệu khi chưa xác nhận |
| Danh sách dự án | DONE | `app/[lang]/projects/page.tsx`, `app/data/projects.ts` | 6 lĩnh vực, song ngữ |
| Chi tiết dự án động | DONE | `app/[lang]/projects/[slug]/page.tsx` | SSG cho 6 slug × 2 locale, metadata theo dự án |
| Healthy Natural Vietnam | DONE | `FeaturedVenture.tsx`, `app/[lang]/projects/healthy-natural-vietnam/page.tsx` | Teaser trang chủ và landing page riêng song ngữ |
| Danh sách đối tác | DONE | `app/data/partners.ts`, `Partners.tsx`, `app/[lang]/partners/page.tsx` | Chỉ hiển thị `published: true`; một đối tác đang `published: false` |
| Trang Tin tức | PARTIAL | `app/[lang]/news/page.tsx`, `app/data/news.ts` | Có 3 mục tĩnh; không địa phương hóa theo route, link bài báo đều rỗng |
| Section tin tức trang chủ | DONE | `app/components/New/New.tsx` | Có nội dung VI/EN và ảnh; đây là dữ liệu riêng, không dùng `app/data/news.ts` |
| Thông tin liên hệ | DONE | `app/[lang]/contact/page.tsx`, `Footer.tsx` | Địa chỉ, email và điện thoại hiển thị song ngữ |
| UI biểu mẫu liên hệ | DONE | `ContactForm.tsx`, `app/[lang]/contact/page.tsx` | Required/min/max, trạng thái gửi/thành công/lỗi song ngữ |
| API biểu mẫu liên hệ | DONE | `app/api/contact/route.ts` | Parse/validate, escape HTML, gọi Resend, status 400/500/502 |
| Gửi biểu mẫu đến Gmail production | PARTIAL | `app/api/contact/route.ts`, Vercel env | Code và hai biến bắt buộc đã cấu hình; chưa có xác nhận end-to-end rằng Gmail đã nhận thư |
| Sender domain Resend production | PARTIAL | Vercel/Resend, `README.md` | `CONTACT_FROM_EMAIL` chưa được xác nhận; sender mặc định chỉ gửi thử tới email chủ tài khoản Resend |
| Chống bot/spam | PARTIAL | `ContactForm.tsx`, `app/api/contact/route.ts` | Có honeypot; chưa có rate limit, CAPTCHA, IP throttling hoặc persistence |
| Thay Gmail nhận không sửa code | DONE | `app/api/contact/route.ts`, Vercel env | Sửa `CONTACT_TO_EMAIL` rồi redeploy; có giới hạn sender test của Resend |
| GitHub → Vercel auto deploy | DONE | cấu hình ngoài repository | Vercel đã deploy các commit `main` trong lịch sử làm việc |
| Custom domain/DNS | DONE | cấu hình iNET/Vercel | Hai domain từng hiển thị `Valid Configuration`; apex redirect sang `www` |
| SSL production | PARTIAL | cấu hình Vercel | Ảnh chụp từng hiển thị `Generating SSL Certificate`; chưa có xác nhận bàn giao độc lập sau cùng |
| Metadata theo trang | PARTIAL | `app/layout.tsx`, nhiều `app/[lang]/**/page.tsx` | Nhiều trang có metadata song ngữ; root description và News còn tiếng Việt |
| Sitemap/robots/canonical/hreflang | NOT STARTED | chưa có file liên quan | Chưa phải yêu cầu người dùng đã xác nhận |
| Privacy Policy/Terms pages | NOT STARTED | `app/components/Footer/Footer.tsx` | Footer chỉ render nhãn bằng `<span>`, không có route/link |
| QR công ty | PARTIAL | `app/components/Footer/Footer.tsx` | Chỉ là ô placeholder chữ `QR`, chưa có mã QR thật |
| CMS/Admin | NOT STARTED | không có | Chưa phải yêu cầu đã xác nhận; nội dung nằm trong source |
| Database lưu liên hệ | NOT STARTED | không có | Không phải yêu cầu hiện tại; submission chỉ gửi email |
| Test tự động | NOT STARTED | không có test config/file | Chỉ có build và lint thủ công |
| Vercel Analytics/Speed Insights | NOT STARTED | cấu hình Vercel | Dashboard từng hiển thị nút bật Analytics; người dùng chưa yêu cầu |
| AI/model trong website | NOT STARTED | không có | Không có yêu cầu tích hợp AI vào runtime |
| Bộ tài liệu bàn giao | DONE | `00_PROJECT_OVERVIEW.md` … `06_NEXT_STEPS.md` | Được tạo ngày 2026-08-10; phải cập nhật cùng thay đổi lớn về sau |

## Quy ước cập nhật bảng

- `DONE`: code/cấu hình đã có và kiểm tra hợp lý trong phạm vi hiện có.
- `PARTIAL`: một phần đã có nhưng thiếu xác nhận end-to-end, nội dung hoặc hạ tầng.
- `NOT STARTED`: chưa có triển khai; không đồng nghĩa là yêu cầu bắt buộc.
- `BROKEN`: có lỗi xác định hoặc hành vi sai có thể tái hiện từ source/tooling.
- `DEPRECATED`: code/dữ liệu cũ không còn được luồng hiện tại sử dụng.
