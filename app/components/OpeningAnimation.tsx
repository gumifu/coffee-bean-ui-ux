"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function OpeningAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !containerRef.current ||
      !topRef.current ||
      !bottomRef.current ||
      !indicatorRef.current
    )
      return;

    // 初期状態を設定
    gsap.set(indicatorRef.current, { opacity: 0 });
    gsap.set(topRef.current, { y: 0 });
    gsap.set(bottomRef.current, { y: 0 });
    gsap.set(containerRef.current, { opacity: 1 });

    const tl = gsap.timeline();

    // ロゴのフェードインアニメーション
    tl.to(indicatorRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power1.out",
      force3D: true,
    })
      // ロゴのフェードアウトとカーテンが開くアニメーションを同時に実行
      .to(
        indicatorRef.current,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power1.in",
          force3D: true,
        },
        "-=0.1"
      )
      // 上下に開くアニメーション（短縮・軽量化）
      .to(
        topRef.current,
        {
          y: "-100%",
          duration: 0.6,
          ease: "power2.inOut",
          force3D: true,
        },
        "<" // ロゴのフェードアウトと同時に実行
      )
      .to(
        bottomRef.current,
        {
          y: "100%",
          duration: 0.6,
          ease: "power2.inOut",
          force3D: true,
        },
        "<" // 同時に実行
      )
      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.2,
        },
        "-=0.1"
      )
      .set(containerRef.current, {
        display: "none",
      })
      .call(() => {
        setIsVisible(false);
      });
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] pointer-events-none"
      style={{ willChange: "opacity" }}
    >
      {/* 上部カーテン */}
      <div
        ref={topRef}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#241501] z-10"
        style={{ willChange: "transform" }}
      />

      {/* 下部カーテン */}
      <div
        ref={bottomRef}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#241501] z-10"
        style={{ willChange: "transform" }}
      />

      {/* インジケーター */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div
          ref={indicatorRef}
          className="flex items-center justify-center"
          style={{ willChange: "opacity", opacity: 0 }}
        >
          <div className="h-[24px] w-[114px]">
            <Image
              src="/footer_logo.svg"
              alt="COFFEE"
              width={114}
              height={24}
              className="h-full w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

