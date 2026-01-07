"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function OpeningAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !containerRef.current ||
      !topRef.current ||
      !bottomRef.current ||
      !indicatorRef.current ||
      !spinnerRef.current
    )
      return;

    // 初期状態を設定
    gsap.set(indicatorRef.current, { scale: 0, opacity: 0 });
    gsap.set(topRef.current, { y: 0 });
    gsap.set(bottomRef.current, { y: 0 });
    gsap.set(containerRef.current, { opacity: 1 });

    // スピナーの回転アニメーション（継続）
    gsap.to(spinnerRef.current, {
      rotation: 360,
      duration: 1,
      repeat: -1,
      ease: "none",
      force3D: true, // GPUアクセラレーション
    });

    const tl = gsap.timeline();

    // インジケーターのアニメーション（短縮）
    tl.to(indicatorRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: "power1.out",
      force3D: true,
    })
      .to(indicatorRef.current, {
        scale: 1.05,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
        force3D: true,
      })
      // 上下に開くアニメーション（短縮・軽量化）
      .to(
        topRef.current,
        {
          y: "-100%",
          duration: 0.6,
          ease: "power2.inOut",
          force3D: true,
        },
        "-=0.1"
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
          className="flex flex-col items-center gap-4"
          style={{ willChange: "transform, opacity" }}
        >
          <div
            ref={spinnerRef}
            className="w-16 h-16 border-4 border-white border-t-transparent rounded-full"
            style={{ willChange: "transform" }}
          />
          <p className="text-white font-semibold text-lg">COFFEE</p>
        </div>
      </div>
    </div>
  );
}

