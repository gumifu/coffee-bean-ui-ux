"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { Mountain, Flower, Coffee, Trophy, Info, ArrowUpRight } from "lucide-react";

export default function DesignSystemPage() {
  return (
    <div className="bg-[#594a3c] flex flex-col items-start relative min-h-screen w-full">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="w-full px-6 md:px-16 py-20 mt-[72px]">
        <div className="max-w-[1280px] mx-auto">
          {/* Page Title */}
          <div className="mb-16">
            <h1
              className="font-bold text-[48px] md:text-[56px] lg:text-[64px] text-white mb-4"
              style={{ fontFamily: "var(--font-cormorant-garamond)" }}
            >
              Design System
            </h1>
            <p className="text-white text-lg">
              Colors, typography, and components used throughout the site.
            </p>
          </div>

          {/* Site Overview Section */}
          <section className="mb-20">
            <h2
              className="font-bold text-[32px] md:text-[40px] text-white mb-8"
              style={{ fontFamily: "var(--font-cormorant-garamond)" }}
            >
              Site Overview
            </h2>
            <div className="bg-[#faf9ef] rounded-lg p-8 md:p-12 space-y-6">
              <div>
                <h3 className="text-black font-semibold text-xl mb-3">About This Site</h3>
                <p className="text-black leading-relaxed">
                  Coffee Bean is a modern, interactive web project showcasing coffee beans using Next.js, Tailwind CSS, GSAP, and Three.js. This website explores the world of coffee beans, their origins, and the two main types: Arabica and Robusta, featuring immersive 3D animations and smooth parallax effects.
                </p>
              </div>
              <div>
                <h3 className="text-black font-semibold text-xl mb-3">Pages</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-black font-semibold mb-1">Home Page (/)</h4>
                    <ul className="text-black text-sm space-y-1 ml-4 list-disc">
                      <li>Hero section with 3D animated coffee bean</li>
                      <li>Origins section: "What are coffee beans"</li>
                      <li>Culture section: "Why people drink coffee"</li>
                      <li>About Two Beans section with navigation button</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-black font-semibold mb-1">About Two Beans Page (/about)</h4>
                    <ul className="text-black text-sm space-y-1 ml-4 list-disc">
                      <li>Header section introducing Arabica and Robusta</li>
                      <li>Comparison cards with detailed information</li>
                      <li>Coffee Belt map with interactive info section</li>
                      <li>Visual comparison with coffee bean images</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-black font-semibold text-xl mb-3">Key Features</h3>
                <ul className="text-black text-sm space-y-2 ml-4 list-disc">
                  <li><strong>3D Graphics:</strong> Three.js-powered interactive coffee bean model with scroll-triggered animations</li>
                  <li><strong>Parallax Effects:</strong> Smooth parallax scrolling on coffee bean images</li>
                  <li><strong>Page Animations:</strong> Custom opening animation and smooth page transitions</li>
                  <li><strong>Interactive Components:</strong> Coffee Belt map with hover/click interactions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-black font-semibold text-xl mb-3">Links</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-black font-semibold text-sm">GitHub:</span>
                    <a
                      href="https://github.com/gumifu/coffee-bean-ui-ux"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#594a3c] hover:underline text-sm truncate max-w-full"
                      title="https://github.com/gumifu/coffee-bean-ui-ux"
                    >
                      https://github.com/gumifu/coffee-bean-ui-ux
                    </a>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-black font-semibold text-sm">Figma:</span>
                    <a
                      href="https://www.figma.com/design/NyrYLIUkQhGnQcSxhTvIOV/coffee?node-id=0-1&t=ok7exVF7gJrZLQoy-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#594a3c] hover:underline text-sm truncate max-w-full"
                      title="https://www.figma.com/design/NyrYLIUkQhGnQcSxhTvIOV/coffee?node-id=0-1&t=ok7exVF7gJrZLQoy-1"
                    >
                      https://www.figma.com/design/NyrYLIUkQhGnQcSxhTvIOV/coffee?node-id=0-1&t=ok7exVF7gJrZLQoy-1
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Colors Section */}
          <section className="mb-20">
            <h2
              className="font-bold text-[32px] md:text-[40px] text-white mb-8"
              style={{ fontFamily: "var(--font-cormorant-garamond)" }}
            >
              Colors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Primary Brown */}
              <div className="bg-[#594a3c] rounded-lg p-6 border border-white/20">
                <div className="w-full h-24 rounded mb-4 bg-[#594a3c]"></div>
                <h3 className="text-white font-semibold mb-2">Primary Brown</h3>
                <p className="text-white/80 text-sm mb-1">#594a3c</p>
                <p className="text-white/60 text-xs">Background, main sections</p>
              </div>

              {/* Beige */}
              <div className="bg-[#594a3c] rounded-lg p-6 border border-white/20">
                <div className="w-full h-24 rounded mb-4 bg-[#faf9ef]"></div>
                <h3 className="text-white font-semibold mb-2">Beige</h3>
                <p className="text-white/80 text-sm mb-1">#faf9ef</p>
                <p className="text-white/60 text-xs">FV sections, cards</p>
              </div>

              {/* Gray Text */}
              <div className="bg-[#594a3c] rounded-lg p-6 border border-white/20">
                <div className="w-full h-24 rounded mb-4 bg-[#616161]"></div>
                <h3 className="text-white font-semibold mb-2">Gray Text</h3>
                <p className="text-white/80 text-sm mb-1">#616161</p>
                <p className="text-white/60 text-xs">FV section text</p>
              </div>

              {/* Info Background */}
              <div className="bg-[#594a3c] rounded-lg p-6 border border-white/20">
                <div className="w-full h-24 rounded mb-4 bg-[#F7EBD8]"></div>
                <h3 className="text-white font-semibold mb-2">Info Background</h3>
                <p className="text-white/80 text-sm mb-1">#F7EBD8</p>
                <p className="text-white/60 text-xs">Info section background</p>
              </div>

              {/* Footer Brown */}
              <div className="bg-[#594a3c] rounded-lg p-6 border border-white/20">
                <div className="w-full h-24 rounded mb-4 bg-[#94887d]"></div>
                <h3 className="text-white font-semibold mb-2">Footer Brown</h3>
                <p className="text-white/80 text-sm mb-1">#94887d</p>
                <p className="text-white/60 text-xs">Footer background</p>
              </div>

              {/* Coffee Belt Region */}
              <div className="bg-[#594a3c] rounded-lg p-6 border border-white/20">
                <div className="w-full h-24 rounded mb-4 bg-[#8b4a2f]"></div>
                <h3 className="text-white font-semibold mb-2">Coffee Belt Region</h3>
                <p className="text-white/80 text-sm mb-1">#8b4a2f</p>
                <p className="text-white/60 text-xs">Map region color</p>
              </div>
            </div>
          </section>

          {/* Typography Section */}
          <section className="mb-20">
            <h2
              className="font-bold text-[32px] md:text-[40px] text-white mb-8"
              style={{ fontFamily: "var(--font-cormorant-garamond)" }}
            >
              Typography
            </h2>
            <div className="bg-[#faf9ef] rounded-lg p-8 space-y-8">
              {/* Headings */}
              <div>
                <h3 className="text-black font-semibold mb-4">Headings (Cormorant Garamond Bold)</h3>
                <div className="space-y-4">
                  <h1
                    className="font-bold text-[64px] text-black"
                    style={{ fontFamily: "var(--font-cormorant-garamond)" }}
                  >
                    Heading 1
                  </h1>
                  <h2
                    className="font-bold text-[48px] text-black"
                    style={{ fontFamily: "var(--font-cormorant-garamond)" }}
                  >
                    Heading 2
                  </h2>
                  <h3
                    className="font-bold text-[40px] text-black"
                    style={{ fontFamily: "var(--font-cormorant-garamond)" }}
                  >
                    Heading 3
                  </h3>
                  <h4
                    className="font-bold text-[32px] text-black"
                    style={{ fontFamily: "var(--font-cormorant-garamond)" }}
                  >
                    Heading 4
                  </h4>
                </div>
              </div>

              {/* Body Text */}
              <div>
                <h3 className="text-black font-semibold mb-4">Body Text (Roboto)</h3>
                <div className="space-y-3">
                  <p className="font-normal text-lg text-black">
                    Regular (400): The quick brown fox jumps over the lazy dog.
                  </p>
                  <p className="font-semibold text-lg text-black">
                    Semibold (600): The quick brown fox jumps over the lazy dog.
                  </p>
                  <p className="font-bold text-lg text-black">
                    Bold (700): The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
              </div>

              {/* Font Sizes */}
              <div>
                <h3 className="text-black font-semibold mb-4">Font Sizes</h3>
                <div className="space-y-2 text-black">
                  <p className="text-xs">text-xs (12px)</p>
                  <p className="text-sm">text-sm (14px)</p>
                  <p className="text-base">text-base (16px)</p>
                  <p className="text-lg">text-lg (18px)</p>
                  <p className="text-xl">text-xl (20px)</p>
                  <p className="text-2xl">text-2xl (24px)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Components Section */}
          <section className="mb-20">
            <h2
              className="font-bold text-[32px] md:text-[40px] text-white mb-8"
              style={{ fontFamily: "var(--font-cormorant-garamond)" }}
            >
              Components
            </h2>

            {/* Header and Footer */}
            <div className="mb-12">
              <h3 className="text-white font-semibold mb-4">Header and Footer</h3>
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <h4 className="text-white/80 font-medium mb-2 text-sm">Header</h4>
                  <div className="bg-[#594a3c] rounded-lg p-4 border border-white/20">
                    <Navbar />
                  </div>
                </div>
                {/* Footer */}
                <div>
                  <h4 className="text-white/80 font-medium mb-2 text-sm">Footer</h4>
                  <div className="bg-[#94887d] rounded-lg p-8 border border-white/20">
                    <div className="flex flex-col items-center justify-center w-full gap-4">
                      <Link href="/" className="h-[24px] w-[114px]">
                        <Image
                          src="/footer_logo.svg"
                          alt="COFFEE"
                          width={114}
                          height={24}
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
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mb-12">
              <h3 className="text-white font-semibold mb-4">Buttons</h3>
              <div className="bg-[#faf9ef] rounded-lg p-8">
                <Link
                  href="/about"
                  className="inline-block bg-[#594a3c] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition-opacity"
                >
                  About Two Beans
                </Link>
              </div>
            </div>

            {/* Cards */}
            <div className="mb-12">
              <h3 className="text-white font-semibold mb-4">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#faf9ef] border border-black rounded-[40px] md:rounded-[60px] lg:rounded-[80px] p-6 md:p-10 overflow-hidden">
                  <h4 className="font-semibold text-[28px] md:text-[32px] lg:text-[40px] text-black mb-4">
                    Card Title
                  </h4>
                  <p className="font-normal text-base text-black mb-4">
                    Card content goes here. This is an example of a card component used throughout the site.
                  </p>
                  <div className="h-[200px] bg-[#594a3c] rounded-lg"></div>
                </div>
                <div className="bg-[#faf9ef] border border-black rounded-[40px] md:rounded-[60px] lg:rounded-[80px] p-6 md:p-10 overflow-hidden">
                  <h4 className="font-semibold text-[28px] md:text-[32px] lg:text-[40px] text-black mb-4">
                    Card Title
                  </h4>
                  <p className="font-normal text-base text-black mb-4">
                    Card content goes here. This is an example of a card component used throughout the site.
                  </p>
                  <div className="h-[200px] bg-[#594a3c] rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Icons */}
            <div className="mb-12">
              <h3 className="text-white font-semibold mb-4">Icons (Lucide React)</h3>
              <div className="bg-[#faf9ef] rounded-lg p-8">
                <div className="grid grid-cols-4 md:grid-cols-6 gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <Mountain size={32} className="text-[#594a3c]" />
                    <span className="text-black text-xs">Mountain</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Flower size={32} className="text-[#594a3c]" />
                    <span className="text-black text-xs">Flower</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Coffee size={32} className="text-[#594a3c]" />
                    <span className="text-black text-xs">Coffee</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Trophy size={32} className="text-[#594a3c]" />
                    <span className="text-black text-xs">Trophy</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Info size={32} className="text-[#594a3c]" />
                    <span className="text-black text-xs">Info</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <ArrowUpRight size={32} className="text-[#594a3c]" />
                    <span className="text-black text-xs">ArrowUpRight</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="mb-12">
              <h3 className="text-white font-semibold mb-4">Info Section</h3>
              <div className="bg-[#F7EBD8] rounded-[4px] p-4 max-w-[480px]">
                <div className="flex gap-3 items-start mb-2">
                  <Info size={16} className="w-4 h-4 shrink-0 text-[#594a3c] mt-0.5" />
                  <h3 className="font-bold text-[16px] text-[#594a3c]">About Coffee belt</h3>
                </div>
                <p className="font-normal text-[16px] leading-relaxed text-[#594a3c] pl-7">
                  The Coffee Belt is a region spanning 25 degrees north and south of the equator, ideal for coffee cultivation.
                </p>
              </div>
            </div>
          </section>

          {/* Spacing Section */}
          <section className="mb-20">
            <h2
              className="font-bold text-[32px] md:text-[40px] text-white mb-8"
              style={{ fontFamily: "var(--font-cormorant-garamond)" }}
            >
              Spacing & Layout
            </h2>
            <div className="bg-[#faf9ef] rounded-lg p-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-black font-semibold mb-2">Container Max Width</h3>
                  <p className="text-black">max-w-[1280px]</p>
                </div>
                <div>
                  <h3 className="text-black font-semibold mb-2">Section Padding</h3>
                  <p className="text-black">px-6 md:px-16 py-16 md:py-20</p>
                </div>
                <div>
                  <h3 className="text-black font-semibold mb-2">Border Radius</h3>
                  <div className="space-y-2 text-black">
                    <p>Small: rounded-[4px]</p>
                    <p>Medium: rounded-[40px] md:rounded-[60px]</p>
                    <p>Large: rounded-[40px] md:rounded-[60px] lg:rounded-[80px]</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

