"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Language = "vi" | "en";

type NavbarLabels = {
  home: string;
  about: string;
  services: string;
  projects: string;
  news: string;
  contact: string;
  partners: string;
};

type NavbarProps = {
  lang: Language;
  labels: NavbarLabels;
};

export default function Navbar({
  lang,
  labels,
}: NavbarProps) {
  const pathname = usePathname();

  const menuItems: {
    label: string;
    href: Route;
  }[] = [
    {
      label: labels.home,
      href: `/${lang}` as Route,
    },
    {
      label: labels.about,
      href: `/${lang}/about` as Route,
    },
    {
      label: labels.services,
      href: `/${lang}/services` as Route,
    },
    {
      label: labels.projects,
      href: `/${lang}/projects` as Route,
    },
    {
      label: labels.news,
      href: `/${lang}/news` as Route,
    },
    {
      label: labels.partners,
      href: `/${lang}/partners` as Route,
    },
    {
      label: labels.contact,
      href: `/${lang}/contact` as Route,
    },
  ];

  function createLanguagePath(newLanguage: Language): Route {
    const parts = pathname.split("/");

    if (parts[1] === "vi" || parts[1] === "en") {
      parts[1] = newLanguage;
    } else {
      parts.splice(1, 0, newLanguage);
    }

    return (parts.join("/") || `/${newLanguage}`) as Route;
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950 text-white shadow-lg">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-8 px-6">
        <Link
          href={`/${lang}` as Route}
          className="text-2xl font-bold"
        >
          DELTA9
        </Link>

        <div className="flex items-center gap-7">
          <nav>
            <ul className="flex items-center gap-7">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium transition hover:text-yellow-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center rounded-lg border border-white/20 p-1 text-sm">
            <Link
              href={createLanguagePath("vi")}
              className={`rounded px-3 py-2 transition ${
                lang === "vi"
                  ? "bg-yellow-500 font-bold text-slate-950"
                  : "hover:bg-white/10"
              }`}
            >
              VI
            </Link>

            <Link
              href={createLanguagePath("en")}
              className={`rounded px-3 py-2 transition ${
                lang === "en"
                  ? "bg-yellow-500 font-bold text-slate-950"
                  : "hover:bg-white/10"
              }`}
            >
              EN
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}