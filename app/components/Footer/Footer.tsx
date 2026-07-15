export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">

      <div className="mx-auto max-w-7xl px-8 py-12">

        <div className="grid gap-8 md:grid-cols-5">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold">
              DELTA9
            </h2>

            <p className="mt-4 text-sm text-gray-300">
              Xây dựng quan hệ đối tác toàn cầu thông qua Việt Nam.
              Chúng tôi kết nối các cơ hội đầu tư và
              đổi mới trong tương lai.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-bold uppercase">
              LIÊN KẾT
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>Về chúng tôi</li>
              <li>Dịch vụ</li>
              <li>Dự án</li>
              <li>Cơ hội đầu tư</li>
              <li>Quan hệ chính phủ</li>
              <li>Liên hệ</li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="mb-4 font-bold uppercase">
              CÁC NGÀNH CÔNG NGHIỆP
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>Khai thác mỏ & Kim loại quý</li>
              <li>Tái tạo năng lượng</li>
              <li>Nông nghiệp & Chế biến thực phẩm</li>
              <li>Nuôi trồng thủy hải sản</li>
              <li>Cơ sở hạ tầng & Bất động sản</li>
              <li>Sản xuất & Hậu cần</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-bold uppercase">
              LIÊN HỆ VỚI CHÚNG TÔI
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>Mr. Trí Đức Nguyễn</li>
              <li>triducnguyen@thedelta9global.com</li>
              <li>(510) 703-4722</li>
              <li>Số giấy phép: E0107302019-9</li>
              <li>580 W Nye Lane Ste 202 Thành phố Carson, NV 89703, Hoa Kỳ</li>
            </ul>
          </div>

          {/* QR */}
          <div className="flex justify-center md:justify-end">

            <div className="flex h-28 w-28 items-center justify-center rounded bg-white text-black">

              QR

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 py-4 text-xs text-gray-400 md:flex-row">

          <p>
            © 2025 The Delta9 Global Corporation. All Rights Reserved.
          </p>

          <div className="flex gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>

        </div>

      </div>

    </footer>
  );
}