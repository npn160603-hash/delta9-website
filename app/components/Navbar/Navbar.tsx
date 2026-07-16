import Link from "next/link";

const menuItems = [
  {
    title: "Trang chủ",
    href: "/",
  },
  {
    title: "Giới thiệu",
    href: "/about",
  },
  {
    title: "Dịch vụ",
    href: "/services",
  },
  {
    title: "Dự án",
    href: "/projects",
  },
  {
    title: "Tin tức",
    href: "/news",
  },
  {
    title: "Liên hệ",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950 text-white shadow-lg">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-8 px-6">
        <Link href="/" className="text-2xl font-bold">
          DELTA9
        </Link>

        <nav>
          <ul className="flex flex-wrap items-center justify-end gap-x-7 gap-y-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium transition hover:text-yellow-400"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}