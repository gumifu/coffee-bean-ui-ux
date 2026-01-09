"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import OpeningAnimation from "./OpeningAnimation";
import CoffeeBeanScene from "./CoffeeBeanScene";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // AboutページとDesign Systemページではコーヒー豆を非表示
  const showCoffeeBean = pathname !== "/about" && pathname !== "/design-system";

  return (
    <>
      <OpeningAnimation />
      {/* 3D Coffee Bean Scene - ページ遷移アニメーションの影響を受けないように外に配置 */}
      {showCoffeeBean && <CoffeeBeanScene pathname={pathname} />}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.98 }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full bg-[#594a3c] min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
