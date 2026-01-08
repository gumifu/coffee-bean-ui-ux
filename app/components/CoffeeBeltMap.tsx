"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CoffeeBeltMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef<boolean>(false);
  const [svgContent, setSvgContent] = useState<string>("");

  // コーヒーベルト地域の説明
  const beltDescription =
    "The Coffee Belt is a region between the Tropics of Cancer and Capricorn where coffee thrives. This area provides the ideal climate, altitude, and soil conditions for growing Arabica and Robusta coffee beans.";

  useEffect(() => {
    // SVGファイルを読み込む
    fetch("/map.svg")
      .then((res) => res.text())
      .then((text) => {
        // SVGをパースして、茶色の要素をグループ化
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(text, "image/svg+xml");
        const svgElement = svgDoc.querySelector("svg");

        if (svgElement) {
          // 茶色の要素をすべて取得
          const brownPaths = svgElement.querySelectorAll(".coffee-belt-region");

          if (brownPaths.length > 0) {
            // Coffee Beltグループを作成
            const beltGroup = svgDoc.createElementNS(
              "http://www.w3.org/2000/svg",
              "g"
            );
            beltGroup.setAttribute("class", "coffee-belt");
            beltGroup.setAttribute("data-tooltip", beltDescription);

            // 茶色の要素をグループに移動
            brownPaths.forEach((path) => {
              const parent = path.parentNode;
              if (parent) {
                parent.removeChild(path);
                beltGroup.appendChild(path);
              }
            });

            // グループをSVGに追加（最初の要素の前に挿入）
            const firstChild = svgElement.firstChild;
            if (firstChild) {
              svgElement.insertBefore(beltGroup, firstChild);
            } else {
              svgElement.appendChild(beltGroup);
            }

            // 更新されたSVGを文字列に変換
            const serializer = new XMLSerializer();
            const updatedSvg = serializer.serializeToString(svgElement);
            setSvgContent(updatedSvg);
          } else {
            setSvgContent(text);
          }
        } else {
          setSvgContent(text);
        }
      })
      .catch((err) => console.error("Failed to load SVG:", err));
  }, [beltDescription]);

  useEffect(() => {
    if (
      !containerRef.current ||
      !svgContent ||
      !tooltipRef.current ||
      !overlayRef.current
    )
      return;

    const container = containerRef.current;
    const svg = container.querySelector("svg");
    const tooltip = tooltipRef.current;
    const overlay = overlayRef.current;
    if (!svg) return;

    const belt = svg.querySelector(".coffee-belt") as SVGGElement;
    if (!belt) return;

    // 初期設定：オーバーレイを非表示
    gsap.set(overlay, {
      scaleX: 0,
      transformOrigin: "center center",
    });

    gsap.set(tooltip, {
      autoAlpha: 0,
    });

    // ホバー時のアニメーション
    const handleMouseEnter = () => {
      isHoveredRef.current = true;

      // Coffee Belt全体を1.05倍に
      gsap.to(belt, {
        scale: 1.05,
        duration: 0.4,
        ease: "power3.out",
        transformOrigin: "center center",
      });

      // オーバーレイを中央から広がる
      gsap.to(overlay, {
        scaleX: 1,
        duration: 0.5,
        ease: "power2.out",
      });

      // ツールチップを表示
      gsap.to(tooltip, {
        autoAlpha: 1,
        duration: 0.2,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHoveredRef.current) return;

      // ツールチップの位置を更新
      gsap.set(tooltip, {
        x: e.clientX + 16,
        y: e.clientY + 16,
      });
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;

      // Coffee Beltを元のサイズに
      gsap.to(belt, {
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
      });

      // オーバーレイを閉じる
      gsap.to(overlay, {
        scaleX: 0,
        duration: 0.4,
        ease: "power2.in",
      });

      // ツールチップを非表示
      gsap.to(tooltip, {
        autoAlpha: 0,
        duration: 0.2,
      });
    };

    // 茶色の豆エリアでマウスイベントを監視
    belt.addEventListener("mouseenter", handleMouseEnter);
    belt.addEventListener("mousemove", handleMouseMove);
    belt.addEventListener("mouseleave", handleMouseLeave);

    // クリーンアップ
    return () => {
      belt.removeEventListener("mouseenter", handleMouseEnter);
      belt.removeEventListener("mousemove", handleMouseMove);
      belt.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [svgContent, beltDescription]);

  return (
    <div className="relative w-full aspect-1143/522">
      {/* 黒幕（オーバーレイ）- SVG背景全体を覆う */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-[rgba(0,0,0,0.6)] pointer-events-none z-10"
        style={{
          transformOrigin: "center center",
          transform: "scaleX(0)",
        }}
      />

      <div ref={containerRef} className="w-full h-full relative z-0">
        {svgContent && (
          <div
            dangerouslySetInnerHTML={{ __html: svgContent }}
            className="w-full h-full [&_svg]:w-full [&_svg]:h-full [&_svg]:pointer-events-none [&_svg_*]:pointer-events-none [&_svg_.coffee-belt]:pointer-events-auto [&_svg_.coffee-belt_*]:pointer-events-auto"
          />
        )}
      </div>

      {/* ツールチップ */}
      <div
        ref={tooltipRef}
        className="fixed z-50 bg-[#111] text-white px-4 py-3 rounded-lg shadow-lg pointer-events-none max-w-xs"
        style={{
          willChange: "opacity, transform",
          opacity: 0,
        }}
      >
        <p className="font-semibold text-sm mb-1">Coffee Belt</p>
        <p className="text-xs leading-relaxed">{beltDescription}</p>
      </div>
    </div>
  );
}
