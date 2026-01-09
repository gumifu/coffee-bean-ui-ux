"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mountain, Flower, Coffee, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import CoffeeBeltMap from "../components/CoffeeBeltMap";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const bean1Ref = useRef<HTMLDivElement>(null);
  const bean2Ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!bean1Ref.current || !bean2Ref.current || !sectionRef.current) return;

    // パララックス効果: スクロールに応じて画像を上に移動
    gsap.to(bean1Ref.current, {
      y: -200,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(bean2Ref.current, {
      y: -160,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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
        ref={sectionRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-[#594a3c] flex flex-col items-center justify-center w-full px-6 md:px-16 py-16 mt-[72px]"
      >
        <div className="bg-[#faf9ef] flex flex-col gap-[8px] h-[400px] md:h-[500px] lg:h-[640px] items-center justify-center overflow-hidden relative rounded-[40px] md:rounded-[60px] lg:rounded-[80px] shrink-0 w-full max-w-[1280px]">
          {/* Text Content */}
          <div className="absolute left-1/2 top-[30px] md:top-[40px] lg:top-[53px] translate-x-[-50%] flex flex-col items-center text-center px-6 md:px-8 lg:px-12">
            <div
              className="flex flex-col font-bold leading-0 text-center"
              style={{
                fontFamily: "var(--font-cormorant-garamond)",
                color: "#616161",
              }}
            >
              <p className="leading-[40px] md:leading-[50px] lg:leading-[70px]">
                <span className="text-[24px] md:text-[32px] lg:text-[40px] whitespace-nowrap">
                  Introduction
                </span>
                <span className="text-[32px] md:text-[40px] lg:text-[64px] whitespace-nowrap">
                  <br aria-hidden="true" />
                  Arabica and Robusta
                </span>
              </p>
            </div>
          </div>

          {/* Coffee Beans Images */}
          <div className="absolute left-1/2 top-[300px] md:top-[300px] lg:top-[400px] translate-x-[-50%] flex gap-[20px] md:gap-[35px] lg:gap-[54.177px] items-end justify-center">
            <div
              ref={bean1Ref}
              className="h-[120px] md:h-[180px] lg:h-[249.5px] relative shrink-0 w-[85px] md:w-[130px] lg:w-[175.363px] overflow-hidden pointer-events-none"
            >
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
            <div
              ref={bean2Ref}
              className="h-[115px] md:h-[175px] lg:h-[239.52px] relative shrink-0 w-[93px] md:w-[140px] lg:w-[192.471px] overflow-hidden pointer-events-none"
            >
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
        className="flex flex-col items-center w-full px-6 md:px-16 py-16 relative"
        style={{
          backgroundImage: "url('/bg_image.webp')",
          backgroundRepeat: "repeat",
          backgroundSize: "70%",
          backgroundPosition: "0 0",
          backgroundColor: "#faf9ef",
        }}
      >
        <div className="flex flex-col items-center max-w-[1280px] w-full gap-12">
          {/* Section Title */}
          <div className="flex flex-col gap-4 md:gap-6 items-center text-center w-full px-4">
            <h2
              className="font-bold text-[32px] md:text-[40px] lg:text-[64px] leading-[1.2] text-white"
              style={{ fontFamily: "var(--font-cormorant-garamond)" }}
            >
              Arabica and Robusta
            </h2>
            <p className="font-bold text-[16px] md:text-[20px] lg:text-[24px] leading-[1.2] text-white">
              <span>Two main types</span>
              <br aria-hidden="true" />
              <span className="font-normal">
                Each type brings its own character to the cup
              </span>
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-8 items-start w-full">
            {/* Arabica Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#faf9ef] border border-solid border-black flex flex-col items-start overflow-hidden rounded-[40px] md:rounded-[60px] lg:rounded-[80px] w-full md:flex-1"
            >
              <div className="flex flex-col items-start px-6 md:px-10 lg:px-12 py-8 md:py-12 lg:py-20 w-full">
                <div className="flex flex-col gap-4 md:gap-6 items-start w-full">
                  <h3 className="font-semibold text-[28px] md:text-[32px] lg:text-[40px] leading-relaxed text-black">
                    Arabica
                  </h3>

                  {/* UI Copy */}
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-[16px] md:text-[18px] lg:text-[20px] leading-tight text-black">
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
              <div className="flex flex-col h-[200px] md:h-[250px] lg:h-[300px] items-center justify-end relative w-full">
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
              className="bg-[#faf9ef] border border-solid border-black flex flex-col items-start overflow-hidden rounded-[40px] md:rounded-[60px] lg:rounded-[80px] w-full md:flex-1"
            >
              <div className="flex flex-col items-start px-6 md:px-10 lg:px-12 py-8 md:py-12 lg:py-20 w-full">
                <div className="flex flex-col gap-4 md:gap-6 items-start w-full">
                  <h3 className="font-semibold text-[28px] md:text-[32px] lg:text-[40px] leading-relaxed text-black">
                    Robusta
                  </h3>

                  {/* UI Copy */}
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-[16px] md:text-[18px] lg:text-[20px] leading-tight text-black">
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
              <div className="flex flex-col h-[200px] md:h-[250px] lg:h-[300px] items-center justify-end relative w-full">
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
          <div className="flex flex-col items-center w-full mt-[40px]">
            {/* Content Header */}
            <div className="flex flex-col gap-4 md:gap-6 items-center text-center mb-8 md:mb-12 px-4">
              <h2
                className="font-bold text-[32px] md:text-[40px] lg:text-[64px] leading-[1.2] text-white"
                style={{ fontFamily: "var(--font-cormorant-garamond)" }}
              >
                Coffee Belt
              </h2>
              <p className="font-bold text-[16px] md:text-[20px] lg:text-[24px] leading-[1.5] text-white">
                <span>Two types grow in this region.</span>
                <br aria-hidden="true" />
                <span className="font-normal">
                  Each variety contributes unique flavors and characteristics to
                  the coffee experience.
                </span>
              </p>
            </div>

            {/* Map Container */}
            <div className="bg-[#faf9ef] rounded-[40px] md:rounded-[60px] lg:rounded-[80px] p-4 md:p-8 lg:p-16 w-full relative overflow-hidden">
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
        className="bg-[#94887d] flex flex-col items-center w-full px-6 md:px-16 py-16"
      >
        <div className="flex flex-col items-center justify-center w-full max-w-[1280px] gap-4">
          <Link href="/" className="h-[28px] w-[117px]">
            <Image
              src="/logo.svg"
              alt="COFFEE"
              width={117}
              height={28}
              className="h-full w-auto"
            />
          </Link>
          <div className="flex items-center justify-center">
            <p className="font-normal text-xs md:text-sm text-white text-center">
              © 2026 UI/UX Class Coffee.
              <br className="md:hidden" />
              All rights reserved
            </p>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
}
