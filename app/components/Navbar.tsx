"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // スクロールダウン時は非表示、スクロールアップ時は表示
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // 下にスクロールしている
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // 上にスクロールしている
        setIsVisible(true);
      }

      // トップに近い場合は常に表示
      if (currentScrollY < 100) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-[rgba(89,74,60,0.8)] backdrop-blur-md border-b border-[rgba(255,255,255,0.1)] flex flex-col items-center w-full fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex h-[72px] items-center justify-between px-6 w-full max-w-[1408px]">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="h-[28px] w-[117px]">
            <Image
              src="/logo.svg"
              alt="COFFEE"
              width={117}
              height={28}
              className="h-full w-auto"
            />
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-white font-normal text-sm md:text-base hover:opacity-80 transition-opacity"
            >
              About Two Beans
            </Link>
            <Link
              href="/design-system"
              className="text-white font-normal text-sm md:text-base hover:opacity-80 transition-opacity"
            >
              Design System
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
