"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import OpeningAnimation from "./OpeningAnimation";
import CoffeeBeanScene from "./CoffeeBeanScene";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const contentRef = useRef<HTMLDivElement>(null);
  const prevPathnameRef = useRef<string | null>(null);

  useEffect(() => {
    // 初回レンダリング時はスキップ
    if (prevPathnameRef.current === null) {
      prevPathnameRef.current = pathname;
      return;
    }

    // パスが変更された場合のみアニメーション
    if (prevPathnameRef.current !== pathname && contentRef.current) {
      const tl = gsap.timeline();

      // フェードアウト
      tl.to(contentRef.current, {
        opacity: 0,
        y: -30,
        scale: 0.98,
        duration: 0.4,
        ease: "power2.in",
      })
        // フェードイン
        .fromTo(
          contentRef.current,
          {
            opacity: 0,
            y: 30,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          }
        );

      prevPathnameRef.current = pathname;
    }
  }, [pathname]);

  // Aboutページではコーヒー豆を非表示
  const showCoffeeBean = pathname !== "/about";

  return (
    <>
      <OpeningAnimation />
      {/* 3D Coffee Bean Scene - ページ遷移アニメーションの影響を受けないように外に配置 */}
      {showCoffeeBean && <CoffeeBeanScene />}
      <div ref={contentRef} className="w-full">
        {children}
      </div>
    </>
  );
}
