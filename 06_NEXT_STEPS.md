# 06 — Công việc tiếp theo

> Cập nhật: 2026-08-10. Danh sách này phân biệt việc cần xác minh/sửa với ý tưởng tùy chọn. Không tự triển khai mục chưa được người dùng xác nhận.

## 1. Tình trạng bàn giao hiện tại

- Không có feature code đang chỉnh dở trong commit production đã đối chiếu.
- Build production pass.
- Lint còn một lỗi xác định trong Navbar.
- Form email đã có code và hai biến bắt buộc đã được thêm vào Vercel, nhưng chưa có bằng chứng end-to-end rằng Gmail production nhận được submission.
- Domain đã từng đạt `Valid Configuration`; trạng thái SSL cuối cùng chưa được ghi nhận độc lập.
- Tiếng Anh đã là route mặc định.
- Bộ tài liệu bàn giao phải được commit cùng repository.

## 2. Thứ tự ưu tiên đề xuất

| Ưu tiên | Việc cần làm | Kết quả mong muốn | File/cấu hình dự kiến |
|---|---|---|---|
| P0 | Kiểm thử biểu mẫu production end-to-end | Submit trên `/en/contact` và `/vi/contact`; Resend báo Delivered; Gmail nhận đủ name/email/message/locale | Không nhất thiết sửa code; kiểm tra Vercel env, Resend Events, Gmail |
| P0 | Hoàn thiện sender domain nếu recipient khác email tài khoản Resend | Gửi được đến Gmail bất kỳ đã phê duyệt, không gặp 403 của `resend.dev` | Resend Domains, DNS iNET, biến `CONTACT_FROM_EMAIL` |
| P0 | Xác nhận HTTPS/domain production | Apex redirect đúng, `www` có certificate hợp lệ và mở website | Vercel Domains, iNET DNS; không sửa source trừ khi phát hiện lỗi app |
| P1 | Sửa lỗi lint Navbar | `npm run lint` pass và menu vẫn đóng đúng sau navigation | `app/components/Navbar/Navbar.tsx` |
| P1 | Sửa document language theo locale | `/en` render `lang="en"`, `/vi` render `lang="vi"` | `app/layout.tsx`, có thể `app/[lang]/layout.tsx`; đọc docs Next.js 16 trước khi đổi kiến trúc layout |
| P1 | Hoàn thiện News song ngữ | `/en/news` có metadata/content English, `/vi/news` Vietnamese | `app/data/news.ts`, `app/[lang]/news/page.tsx`; cần bản dịch/URL đã duyệt |
| P1 | Đồng bộ metadata với English default | Root/home English metadata đúng, metadata locale nhất quán | `app/layout.tsx`, `app/[lang]/page.tsx`, News page |
| P2 | Thêm kiểm thử tự động | Có test route, locale, API validation và contact submit mock | **UNKNOWN / NEED CONFIRMATION** về framework; có thể tạo test config/files mới |
| P2 | Hoàn thiện Privacy/Terms | Footer link tới nội dung pháp lý đã được phê duyệt | `Footer.tsx`, route mới; cần nội dung pháp lý từ người dùng |
| P2 | Thay QR placeholder | QR dẫn đến URL/contact được người dùng xác nhận | Asset mới dưới `public/images`, `Footer.tsx` |
| P2 | Tăng chống spam | Giảm abuse mà không phá UX | `app/api/contact/route.ts`, có thể provider/config mới; phải xác nhận giải pháp |
| P3 | SEO kỹ thuật | sitemap, robots, canonical, alternate/hreflang chính xác | metadata files/config mới; cần xác nhận domain canonical |
| P3 | Analytics/Speed Insights | Đo traffic nếu người dùng yêu cầu | Vercel dashboard và có thể package/config |
| P3 | Chuẩn hóa content architecture | Giảm nội dung trùng/rải rác | `app/dictionaries/**`, page/component/data; chỉ làm khi có yêu cầu refactor |

## 3. Hướng xử lý chi tiết cho các việc gần nhất

### P0 — Kiểm thử contact form

1. Xác nhận deployment mới nhất ở trạng thái Ready và có hai env:
   `RESEND_API_KEY`, `CONTACT_TO_EMAIL`.
2. Gửi một submission thử trên domain production.
3. Nếu UI báo lỗi, mở Vercel Function Logs cho `/api/contact`.
4. Mở Resend Events:
   - không có event → kiểm tra API key/project env/redeploy;
   - 403 với `resend.dev` → recipient không phải email tài khoản Resend;
   - Delivered nhưng Gmail không thấy → kiểm tra Spam/Promotions/filter.
5. Nếu cần gửi tới Gmail khác:
   - thêm domain/subdomain trong Resend;
   - thêm đúng DNS records Resend cung cấp tại iNET;
   - chờ Verified;
   - thêm `CONTACT_FROM_EMAIL=Delta9 Website <website@verified-domain>`;
   - redeploy và thử lại.
6. Không ghi API key hoặc Gmail thật vào tài liệu/commit.

### P1 — Sửa Navbar lint

1. Đọc tài liệu React/Next.js cục bộ liên quan Client Components/navigation.
2. Viết test/checklist cho ba luồng: click menu, click VI/EN, browser Back/Forward.
3. Loại bỏ `setState` đồng bộ trong effect hoặc thiết kế state gắn với route key.
4. Chạy:

```bash
npm run lint
npm run build
```

5. Kiểm tra desktop/mobile trước khi merge.

### P1 — News song ngữ

Không tự dịch hoặc bịa link nguồn nếu chưa được duyệt. Cần người dùng xác nhận:

- tiêu đề/mô tả/date cho cả VI và EN;
- URL bài gốc;
- có cần trang chi tiết nội bộ hay chỉ link ngoài;
- ngày xuất bản chính xác.

Sau đó đổi data model sang field localized và để page đọc `params.lang` + `hasLocale` như các trang còn lại.

## 4. Những phần không được thay đổi nếu chưa cần thiết

- DNS A/CNAME/nameserver và redirect apex → `www`.
- Vercel project, GitHub repository và nhánh production `main`.
- `RESEND_API_KEY`, Gmail recipient và mọi secret.
- Route `/en`, `/vi`; tiếng Anh mặc định nhưng phải giữ tiếng Việt.
- Project slugs hiện tại vì URL đã có thể được chia sẻ/index.
- Thông tin liên hệ, địa chỉ, giấy phép, số liệu thành tích và nội dung doanh nghiệp.
- Danh sách/chi tiết đối tác và cờ `published`.
- Nội dung Healthy Natural Vietnam, đặc biệt thông tin tài chính/nội bộ không được công bố.
- Asset logo/ảnh và đường dẫn `public/images 1/` trừ khi cập nhật toàn bộ references.
- Giao diện màu sắc/brand nếu không có yêu cầu thiết kế mới.
- Không xóa `app/data/services.ts` chỉ vì đang unused trước khi người dùng xác nhận.
- Không thêm database/CMS/auth/AI/analytics chỉ vì có thể hữu ích.

## 5. Checklist cho AI tiếp quản

1. Đọc `AGENTS.md` và toàn bộ file `00`–`06`.
2. Kiểm tra `git status -sb`, branch và remote trước khi sửa.
3. Đối chiếu commit mới nhất trên remote `main`; không tin một checkout cục bộ cũ.
4. Đọc file nguồn liên quan và tài liệu Next.js 16 cục bộ trước khi chỉnh.
5. Chỉ thay đổi file nằm trong scope người dùng yêu cầu.
6. Không đọc/hiển thị secret; dùng placeholder trong tài liệu.
7. Chạy build + lint và ghi rõ lỗi mới/lỗi có sẵn.
8. Nếu thay đổi behavior, architecture, dependency, domain, email hoặc requirement, cập nhật tài liệu tương ứng.
9. Xác nhận cách phát hành: direct `main` hiện là workflow quan sát được, nhưng PR policy tương lai là **UNKNOWN / NEED CONFIRMATION**.
10. Sau deploy, kiểm tra domain production, không chỉ URL preview.

