export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        <h1 className="text-2xl font-bold text-white">
          DELTA
        </h1>

        <nav>
          <ul className="flex gap-8 text-white">

            <li>
              <a href="#">Trang chủ</a>
            </li>

            <li>
              <a href="#">Giới thiệu</a>
            </li>

            <li>
              <a href="#">Dịch vụ</a>
            </li>

            <li>
              <a href="#">Dự án</a>
            </li>

            <li>
              <a href="#">Tin tức</a>
            </li>

            <li>
              <a href="#">Liên hệ</a>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
}