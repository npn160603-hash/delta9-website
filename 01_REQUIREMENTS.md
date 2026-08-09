# 01 — Yêu cầu dự án

> Cập nhật: 2026-08-10. Chỉ ghi yêu cầu đã được người dùng nêu hoặc trạng thái có thể xác minh từ source/deployment. Không coi đề xuất kỹ thuật là yêu cầu mới.

## 1. Toàn bộ yêu cầu đã được xác nhận

### Website và nội dung

1. Sử dụng website đã được code hoàn chỉnh làm nền tảng tiếp tục phát triển.
2. Gắn tên miền đã mua tại iNET vào website.
3. Triển khai website bằng Vercel; Netlify từng được nhắc như một lựa chọn nhưng không được sử dụng trong cấu hình cuối cùng.
4. Duy trì website song ngữ tiếng Việt (`vi`) và tiếng Anh (`en`).
5. Ưu tiên giao diện tiếng Anh làm mặc định: truy cập `/` phải chuyển đến `/en`.
6. Giữ khả năng chuyển đổi thủ công giữa VI và EN.

### Tên miền và triển khai

1. Kết nối `thedelta9global-usa.com` và `www.thedelta9global-usa.com` với project Vercel.
2. Tên miền gốc chuyển hướng sang phiên bản `www` theo lựa chọn được thực hiện trong Vercel.
3. Source code đặt tại repository công khai:
   `https://github.com/thedelta9global-prog/delta9-website`.
4. Commit lên nhánh `main` phải kích hoạt Vercel tự cập nhật website bằng tên miền chính.
5. Khi người dùng yêu cầu đẩy thay đổi, sử dụng kết nối/plugin GitHub thay vì yêu cầu họ tự chép mã.

### Biểu mẫu liên hệ và email

1. Trang liên hệ phải có biểu mẫu hoạt động, không chỉ là giao diện tĩnh.
2. Người truy cập nhập họ tên, email và nội dung cần trao đổi.
3. Khi gửi thành công, thông tin phải được chuyển đến Gmail được cấu hình.
4. Gmail nhận thư phải có thể thay đổi mà không cần sửa source code; biến cấu hình là `CONTACT_TO_EMAIL`.
5. API key không được lộ trong trình duyệt hoặc source code công khai.
6. Người dùng đã cấu hình `RESEND_API_KEY` và `CONTACT_TO_EMAIL` trong Vercel cho Production và Preview.
7. Sau khi thay đổi biến môi trường, phải tạo deployment mới để cấu hình có hiệu lực.

### Bàn giao

1. Tạo 7 file bàn giao từ `00_PROJECT_OVERVIEW.md` đến `06_NEXT_STEPS.md`.
2. Một AI mới phải hiểu trạng thái dự án chỉ từ source code và bộ tài liệu này.
3. Không được suy đoán yêu cầu mới.
4. Thông tin không chắc chắn phải ghi `UNKNOWN / NEED CONFIRMATION`.
5. Ưu tiên độ chính xác và khả năng tiếp tục phát triển hơn độ ngắn gọn.

## 2. Chức năng bắt buộc trong phạm vi hiện tại

| Chức năng | Tiêu chí bắt buộc |
|---|---|
| Trang doanh nghiệp công khai | Truy cập được qua tên miền đã gắn với Vercel |
| Song ngữ | Có route `/en` và `/vi`, menu và nội dung chính đổi theo ngôn ngữ |
| Tiếng Anh mặc định | `/` chuyển đến `/en` |
| Điều hướng | Có Trang chủ, Giới thiệu, Dịch vụ, Dự án, Tin tức, Đối tác, Liên hệ |
| Dự án | Có danh sách lĩnh vực, trang chi tiết và dự án Healthy Natural Vietnam |
| Đối tác | Chỉ hiển thị đối tác có `published: true` |
| Biểu mẫu liên hệ | Gửi `name`, `email`, `message`, `locale` tới `/api/contact` |
| Gửi email | API server gửi thông tin biểu mẫu qua Resend tới `CONTACT_TO_EMAIL` |
| Bảo mật secret | Chỉ đọc biến môi trường phía server; không dùng tiền tố `NEXT_PUBLIC_` |
| Triển khai tự động | Commit trên `main` tạo deployment Vercel mới |
| Tài liệu bàn giao | 7 file trong root repository, phản ánh đúng trạng thái hiện tại |

## 3. Chức năng tùy chọn hoặc chưa bắt buộc

Các mục sau xuất hiện dưới dạng cấu hình tùy chọn, đề xuất tiếp theo hoặc phần giao diện chưa hoàn thiện; người dùng chưa xác nhận chúng là yêu cầu bắt buộc:

- `CONTACT_FROM_EMAIL` dùng domain gửi đã xác minh trong Resend;
- rate limiting, CAPTCHA hoặc dịch vụ chống spam nâng cao ngoài honeypot hiện có;
- Vercel Web Analytics và Speed Insights;
- CMS hoặc trang quản trị để cập nhật nội dung;
- cơ sở dữ liệu;
- trang Privacy Policy và Terms of Use thực sự;
- mã QR thật trong footer;
- liên kết bài báo thật cho mục Tin tức;
- test tự động/unit/integration/E2E;
- sitemap, robots, canonical và `hreflang` nâng cao;
- quy trình pull request/branch protection thay cho commit trực tiếp lên `main`.

Không tự triển khai các mục này nếu người dùng chưa yêu cầu hoặc xác nhận nội dung.

## 4. Yêu cầu đã thay đổi hoặc phương án đã bỏ

| Nội dung | Trạng thái trước | Quyết định hiện tại |
|---|---|---|
| Nền tảng hosting | Người dùng nói “Vercel hoặc Netlify” | Đã chọn Vercel; Netlify không dùng |
| Ngôn ngữ mặc định | Source ban đầu chuyển `/` đến `/vi` | Đã đổi sang `/en` theo yêu cầu ngày 2026-08-09 |
| Biểu mẫu liên hệ | Chỉ có giao diện, chưa gửi dữ liệu | Đã thêm client form + server API + Resend |
| Email nhận biểu mẫu | Chưa có cấu hình | Dùng `CONTACT_TO_EMAIL` để có thể thay đổi trên Vercel |
| Gửi email bằng thư viện | Từng cân nhắc/thử dependency `resend` trong quá trình triển khai | Dependency bị loại bỏ; dùng native `fetch` tới Resend API |
| Tên miền chuẩn | Có cả apex và `www` | Apex chuyển hướng sang `www`; `www` phục vụ production |

Không có bằng chứng về yêu cầu sản phẩm nào khác đã bị hủy bỏ.

## 5. Thông tin cần xác nhận, không được tự suy đoán

- Gmail thực tế đang nhận biểu mẫu là địa chỉ nào.
- Biểu mẫu đã được kiểm thử end-to-end trên production và Gmail đã nhận thư hay chưa.
- Domain/subdomain gửi email đã được xác minh trong Resend hay chưa.
- `CONTACT_FROM_EMAIL` đã được thêm vào Vercel hay chưa.
- SSL của cả apex và `www` đã hoàn tất ở mọi khu vực hay chưa; ảnh chụp từng hiển thị giai đoạn tạo certificate.
- Nội dung, số liệu `15+ năm`, `200+ khách hàng`, `500+ dự án`, thông tin công ty, đối tác, email, điện thoại và giấy phép đã được chủ sở hữu pháp lý duyệt hay chưa.
- Người dùng có muốn các trang Privacy Policy, Terms of Use, QR thật, Analytics hoặc CMS hay không.
- Chính sách branch/PR mong muốn trong tương lai; lịch sử gần nhất đang commit trực tiếp lên `main`.
- Phiên bản Node.js chuẩn dùng cho local và Vercel.

