"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Info } from "lucide-react";

export default function CoffeeBeltMap() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const infoButtonRef = useRef<HTMLButtonElement>(null);
  const infoSectionRef = useRef<HTMLDivElement>(null);

  // 外側クリックで閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isInfoOpen &&
        infoButtonRef.current &&
        infoSectionRef.current &&
        !infoButtonRef.current.contains(event.target as Node) &&
        !infoSectionRef.current.contains(event.target as Node)
      ) {
        setIsInfoOpen(false);
      }
    };

    if (isInfoOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isInfoOpen]);

  return (
    <div className="relative w-full aspect-1143/522 group">
      <Image
        src="/map_item.webp"
        alt="Coffee Belt Map"
        fill
        className="object-contain"
      />
      {/* Info Button - SPのみ表示、左端に配置 */}
      <button
        ref={infoButtonRef}
        onClick={() => setIsInfoOpen(!isInfoOpen)}
        className="md:hidden absolute bottom-4 left-0 rounded-[4px] p-2 shadow-lg flex items-center justify-center z-10"
        style={{ backgroundColor: "#F7EBD8" }}
        aria-label="Show coffee belt information"
      >
        <Info size={20} className="text-[#594a3c]" />
      </button>
      {/* Info Section - 左下に配置 */}
      <div
        ref={infoSectionRef}
        className={`absolute bottom-4 left-0 flex flex-col gap-2 md:gap-3 rounded-[4px] p-3 md:p-4 shadow-lg transition-opacity duration-300 max-w-[320px] md:max-w-[480px] z-10 ${
          isInfoOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none md:opacity-0 md:pointer-events-auto md:group-hover:opacity-100"
        }`}
        style={{ backgroundColor: "#F7EBD8" }}
      >
        <div className="flex gap-2 md:gap-3 items-start">
          <Info size={16} className="w-4 h-4 shrink-0 text-[#594a3c] mt-0.5" />
          <h3 className="font-bold text-[16px] text-[#594a3c]">
            About Coffee belt
          </h3>
        </div>
        <p className="font-normal text-[16px] leading-relaxed text-[#594a3c] pl-6 md:pl-7">
          The Coffee Belt is a region spanning 25 degrees north and south of the
          equator, ideal for coffee cultivation.
        </p>
      </div>
    </div>
  );
}
