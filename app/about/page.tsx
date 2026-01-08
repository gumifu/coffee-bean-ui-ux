"use client";

import Image from "next/image";
import Link from "next/link";
import { Mountain, Flower, Coffee, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import CoffeeBeltMap from "../components/CoffeeBeltMap";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#594a3c] flex flex-col items-start relative min-h-screen w-full"
    >
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-[#594a3c] flex flex-col items-center justify-center w-full px-6 md:px-16 py-20 mt-[72px]"
      >
        <div className="bg-[#faf9ef] flex flex-col gap-[8px] h-[640px] items-center justify-center overflow-hidden relative rounded-[80px] shrink-0 w-full max-w-[1280px]">
          {/* Text Content */}
          <div className="absolute left-1/2 top-[53px] translate-x-[-50%] flex flex-col items-center text-center">
            <div
              className="flex flex-col font-bold leading-0 text-center"
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                color: "#616161",
              }}
            >
              <p className="leading-[70px]">
                <span className="text-[40px]">Introduction</span>
                <span className="text-[64px]">
                  <br aria-hidden="true" />
                  Arabica and Robusta
                </span>
              </p>
            </div>
          </div>

          {/* Coffee Beans Images */}
          <div className="absolute left-1/2 top-[242px] translate-x-[-50%] flex gap-[54.177px] items-end justify-center">
            <div className="h-[249.5px] relative shrink-0 w-[175.363px] overflow-hidden pointer-events-none">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  src="/d63578138e307e5f077acc57ace1289c70eed5a4.png"
                  alt="Coffee beans"
                  className="absolute object-contain"
                  style={{
                    height: "121.71%",
                    left: "-11.38%",
                    maxWidth: "none",
                    top: "-17.14%",
                    width: "243.9%",
                  }}
                />
              </div>
            </div>
            <div className="h-[239.52px] relative shrink-0 w-[192.471px] overflow-hidden pointer-events-none">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  src="/d63578138e307e5f077acc57ace1289c70eed5a4.png"
                  alt="Coffee beans"
                  className="absolute object-contain"
                  style={{
                    height: "126.79%",
                    left: "-114.81%",
                    maxWidth: "none",
                    top: "-20.83%",
                    width: "222.22%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Cards and Coffee Belt Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center w-full px-6 md:px-16 py-20 md:py-28 relative"
        style={{
          backgroundImage: "url('/bg_image.webp')",
          backgroundRepeat: "repeat",
          backgroundSize: "70%",
          backgroundPosition: "0 0",
          backgroundColor: "#faf9ef",
        }}
      >
        <div className="flex flex-col items-center max-w-[1280px] w-full gap-20">
          {/* Cards */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-8 items-start w-full">
            {/* Arabica Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#faf9ef] border border-solid border-black flex flex-col items-start overflow-hidden rounded-[80px] w-full md:flex-1"
            >
              <div className="flex flex-col items-start px-6 md:px-12 py-12 md:py-20 w-full">
                <div className="flex flex-col gap-6 items-start w-full">
                  <h3 className="font-semibold text-[40px] leading-relaxed text-black">
                    Arabica
                  </h3>

                  {/* UI Copy */}
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-[20px] leading-tight text-black">
                      Smooth and aromatic
                    </p>
                    <p className="font-normal text-base leading-relaxed text-black">
                      Loved for its refined taste
                    </p>
                  </div>

                  {/* Comparison Info */}
                  <div className="flex flex-col md:grid md:grid-cols-2 gap-4 w-full">
                    <div className="flex gap-3 items-start">
                      <Mountain size={24} className="shrink-0 text-black" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm text-black">
                          Growing area
                        </p>
                        <p className="font-normal text-sm text-black">
                          High-altitude mountains
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Flower size={24} className="shrink-0 text-black" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm text-black">
                          Flavor
                        </p>
                        <p className="font-normal text-sm text-black">
                          Smooth, aromatic, mild acidity
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Coffee size={24} className="shrink-0 text-black" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm text-black">
                          Caffeine
                        </p>
                        <p className="font-normal text-sm text-black">
                          Lower caffeine
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Trophy size={24} className="shrink-0 text-black" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm text-black">Use</p>
                        <p className="font-normal text-sm text-black">
                          Specialty coffee, filter
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[300px] items-center justify-end relative w-full">
                <div className="relative w-full h-full">
                  <Image
                    src="/216b34d9806cdc994789f03549d5f779fca7a73c.png"
                    alt="Arabica coffee beans"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Robusta Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#faf9ef] border border-solid border-black flex flex-col items-start overflow-hidden rounded-[80px] w-full md:flex-1"
            >
              <div className="flex flex-col items-start px-6 md:px-12 py-12 md:py-20 w-full">
                <div className="flex flex-col gap-6 items-start w-full">
                  <h3 className="font-semibold text-[40px] leading-relaxed text-black">
                    Robusta
                  </h3>

                  {/* UI Copy */}
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-[20px] leading-tight text-black">
                      Bold and powerful
                    </p>
                    <p className="font-normal text-base leading-relaxed text-black">
                      Built for strength and crema
                    </p>
                  </div>

                  {/* Comparison Info */}
                  <div className="flex flex-col md:grid md:grid-cols-2 gap-4 w-full">
                    <div className="flex gap-3 items-start">
                      <Mountain size={24} className="shrink-0 text-black" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm text-black">
                          Growing area
                        </p>
                        <p className="font-normal text-sm text-black">
                          Warm, low-altitude regions
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Flower size={24} className="shrink-0 text-black" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm text-black">
                          Flavor
                        </p>
                        <p className="font-normal text-sm text-black">
                          Strong, bitter, earthy
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Coffee size={24} className="shrink-0 text-black" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm text-black">
                          Caffeine
                        </p>
                        <p className="font-normal text-sm text-black">
                          Higher caffeine
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Trophy size={24} className="shrink-0 text-black" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm text-black">Use</p>
                        <p className="font-normal text-sm text-black">
                          Espresso, blends
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[300px] items-center justify-end relative w-full">
                <div className="relative w-full h-full">
                  <Image
                    src="/c5f8246aa367081ff392e01baec4c12de097fab5.png"
                    alt="Robusta coffee beans"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Coffee Belt */}
          <div className="flex flex-col items-center w-full">
            {/* Content Header */}
            <div className="flex flex-col gap-4 items-center text-center mb-12">
              <h2 className="font-bold text-[48px] md:text-[56px] leading-tight text-white">
                Coffee Belt
              </h2>
              <p className="font-normal text-lg leading-relaxed text-white max-w-2xl">
                Within this region, two primary types of coffee thrive.
              </p>
              <p className="font-normal text-lg leading-relaxed text-white max-w-2xl">
                Each variety contributes unique flavors and characteristics to
                the coffee experience.
              </p>
            </div>

            {/* Map Container */}
            <div className="bg-[#faf9ef] rounded-[80px] p-8 md:p-16 w-full relative overflow-hidden">
              <CoffeeBeltMap />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-[#94887d] flex flex-col items-center w-full px-6 md:px-16 py-20"
      >
        <div className="flex flex-col items-start max-w-[1280px] w-full">
          <div className="flex items-center justify-between w-full">
            <Link href="/" className="h-[24px] w-[114px]">
              <Image
                src="/footer_logo.svg"
                alt="COFFEE"
                width={114}
                height={24}
                className="h-full w-auto"
              />
            </Link>
            <div className="flex items-center">
              <p className="font-normal text-sm text-white">
                © 2026 UI/UX Class Coffee. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
}
