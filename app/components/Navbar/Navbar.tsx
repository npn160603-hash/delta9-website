"use client";

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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

  const [openMobileMenuPath, setOpenMobileMenuPath] =
    useState<string | null>(null);

  const mobileMenuOpen =
    openMobileMenuPath === pathname;

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

  function createLanguagePath(
    newLanguage: Language,
  ): Route {
    const parts = pathname.split("/");

    if (
      parts[1] === "vi" ||
      parts[1] === "en"
    ) {
      parts[1] = newLanguage;
    } else {
      parts.splice(1, 0, newLanguage);
    }

    return (
      parts.join("/") || `/${newLanguage}`
    ) as Route;
  }

  function isActiveLink(href: Route) {
    const route = String(href);

    /*
      Trang chủ chỉ được đánh dấu khi URL khớp hoàn toàn.
    */
    if (route === `/${lang}`) {
      return pathname === route;
    }

    /*
      Trang con vẫn đánh dấu menu cha.
      Ví dụ:
      /vi/projects/nang-luong
      vẫn đánh dấu mục Dự án.
    */
    return (
      pathname === route ||
      pathname.startsWith(`${route}/`)
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-yellow-400/25 bg-[#000044]/95 text-white shadow-lg backdrop-blur-md">
      {/* Thanh Navbar chính */}
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:min-h-20 lg:gap-6">
        {/* Logo và tên công ty */}
        <Link
          href={`/${lang}` as Route}
          className="group flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
          aria-label="The Delta9 Global Corporation"
          onClick={() =>
            setOpenMobileMenuPath(null)
          }
        >
          {/* Khung logo nổi bật */}
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-[#f2bd16] bg-[#f7f3e9] p-1.5 shadow-[0_0_0_3px_rgba(242,189,22,0.14),0_5px_18px_rgba(0,0,0,0.3)] transition duration-300 group-hover:scale-105 group-hover:border-yellow-300 group-hover:shadow-[0_0_0_4px_rgba(242,189,22,0.2),0_0_22px_rgba(242,189,22,0.35)] sm:h-14 sm:w-14">
            {/* Ánh sáng nhẹ trong khung */}
            <div className="pointer-events-none absolute inset-0 rounded-[10px] bg-gradient-to-br from-white/40 via-transparent to-yellow-400/10" />

            <div className="relative h-full w-full">
              <Image
                src="/images/delta9-logo-v2.png"
                alt="The Delta9 Global Corporation logo"
                fill
                priority
                sizes="56px"
                className="object-contain p-0.5"
              />
            </div>
          </div>

          {/* Tên công ty */}
          <div className="min-w-0 leading-tight">
            <span className="block whitespace-nowrap text-sm font-extrabold tracking-wide text-white sm:text-base lg:text-xl">
              THE DELTA9
            </span>

            <span className="hidden whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.16em] text-yellow-400 sm:block sm:text-[9px] lg:text-[11px]">
              Global Corporation
            </span>
          </div>
        </Link>

        {/* Menu máy tính */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-4 xl:gap-6">
              {menuItems.map((item) => {
                const active = isActiveLink(
                  item.href,
                );

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`relative block whitespace-nowrap py-2 text-sm font-semibold transition ${
                        active
                          ? "text-yellow-400"
                          : "text-white/75 hover:text-yellow-300"
                      }`}
                    >
                      {item.label}

                      {active && (
                        <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-yellow-400" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Chuyển ngôn ngữ trên máy tính */}
          <div className="flex items-center rounded-lg border border-white/15 bg-[#17191a] p-1 text-sm shadow-md">
            <Link
              href={createLanguagePath("vi")}
              className={`rounded-md px-3 py-2 transition ${
                lang === "vi"
                  ? "bg-yellow-500 font-bold text-slate-950"
                  : "font-medium text-white/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              VI
            </Link>

            <Link
              href={createLanguagePath("en")}
              className={`rounded-md px-3 py-2 transition ${
                lang === "en"
                  ? "bg-yellow-500 font-bold text-slate-950"
                  : "font-medium text-white/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              EN
            </Link>
          </div>
        </div>

        {/* Điều khiển trên điện thoại */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          {/* Chuyển ngôn ngữ dạng gọn */}
          <div className="flex items-center rounded-lg border border-white/15 bg-[#17191a] p-1 text-xs shadow-md">
            <Link
              href={createLanguagePath("vi")}
              onClick={() =>
                setOpenMobileMenuPath(null)
              }
              className={`rounded-md px-2.5 py-2 transition sm:px-3 ${
                lang === "vi"
                  ? "bg-yellow-500 font-bold text-slate-950"
                  : "font-semibold text-white/75 hover:bg-white/10"
              }`}
            >
              VI
            </Link>

            <Link
              href={createLanguagePath("en")}
              onClick={() =>
                setOpenMobileMenuPath(null)
              }
              className={`rounded-md px-2.5 py-2 transition sm:px-3 ${
                lang === "en"
                  ? "bg-yellow-500 font-bold text-slate-950"
                  : "font-semibold text-white/75 hover:bg-white/10"
              }`}
            >
              EN
            </Link>
          </div>

          {/* Nút ba gạch */}
          <button
            type="button"
            onClick={() =>
              setOpenMobileMenuPath(
                (currentPath) =>
                  currentPath === pathname
                    ? null
                    : pathname,
              )
            }
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-yellow-400/40 bg-[#17191a] text-yellow-400 shadow-md transition hover:border-yellow-300 hover:bg-yellow-500 hover:text-slate-950"
            aria-label={
              mobileMenuOpen
                ? lang === "vi"
                  ? "Đóng menu"
                  : "Close navigation menu"
                : lang === "vi"
                  ? "Mở menu"
                  : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={23} />
            ) : (
              <Menu size={23} />
            )}
          </button>
        </div>
      </div>

      {/* Menu điện thoại */}
      <div
        className={`overflow-hidden border-t bg-[#2d2f63] transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "max-h-[600px] border-yellow-400/20 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav
          className="mx-auto max-w-7xl px-4 py-4 sm:px-6"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1.5">
            {menuItems.map((item) => {
              const active = isActiveLink(
                item.href,
              );

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() =>
                      setOpenMobileMenuPath(null)
                    }
                    className={`flex items-center justify-between rounded-lg px-4 py-3.5 text-sm font-semibold transition ${
                      active
                        ? "bg-yellow-500 text-slate-950"
                        : "text-white/80 hover:bg-white/10 hover:text-yellow-300"
                    }`}
                  >
                    <span>{item.label}</span>

                    {active && (
                      <span className="h-2 w-2 rounded-full bg-slate-950" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
