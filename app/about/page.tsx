import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  Flower,
  Coffee,
  Trophy,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#241501] flex flex-col items-start relative min-h-screen w-full">
      {/* Navbar */}
      <nav className="bg-[#594a3c] flex flex-col items-center w-full">
        <div className="flex h-[72px] items-center justify-between px-6 md:px-16 w-full max-w-[1408px]">
          <div className="flex items-center justify-between w-full">
            <Link href="/" className="h-[23px] w-[88px] text-white font-bold text-lg">
              COFFEE
            </Link>
            <div className="flex gap-4 items-center">
              <Link
                href="/about"
                className="border border-solid border-white px-5 py-2 text-white font-normal text-base hover:bg-white hover:text-[#594a3c] transition-colors"
              >
                Learn
              </Link>
              <Link
                href="/"
                className="bg-white border border-solid border-white px-5 py-2 text-[#594a3c] font-normal text-base hover:bg-[#594a3c] hover:text-white transition-colors"
              >
                Brew
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="bg-[#594a3c] flex flex-col items-center justify-center w-full px-6 md:px-16 py-20">
        <div className="flex flex-col h-[640px] items-center justify-center px-0 py-20 rounded-[80px] w-full relative overflow-hidden">
          {/* Background with opacity */}
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.8)] rounded-[80px]" />
          <div className="absolute inset-0 opacity-10 rounded-[80px] overflow-hidden">
            <Image
              src="/7d687662751a23511c2e2743d62e53a54c0d51e0.png"
              alt="Coffee beans background"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 items-center relative z-10 text-center w-full">
            <h1 className="font-bold text-[48px] md:text-[56px] leading-tight text-black">
              Arabica and Robusta
            </h1>
            <h2 className="font-bold text-[24px] leading-tight text-black">
              Two main types
            </h2>
            <p className="font-normal text-lg leading-relaxed text-black max-w-2xl">
              Each type brings its own character to the cup
            </p>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="bg-[#94887d] flex flex-col items-center w-full px-6 md:px-16 py-20 md:py-28">
        <div className="flex flex-col items-center max-w-[1280px] w-full">
          <div className="flex flex-col md:flex-row gap-8 md:gap-8 items-start w-full">
            {/* Arabica Card */}
            <div className="bg-white border border-solid border-black flex flex-col items-start overflow-hidden rounded-[80px] w-full md:flex-1">
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
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex gap-3 items-start">
                      <Mountain size={24} className="shrink-0 text-black" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm text-black">Growing area</p>
                        <p className="font-normal text-sm text-black">High-altitude mountains</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Flower size={24} className="shrink-0 text-black" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm text-black">Flavor</p>
                        <p className="font-normal text-sm text-black">Smooth, aromatic, mild acidity</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Coffee size={24} className="shrink-0 text-black" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm text-black">Caffeine</p>
                        <p className="font-normal text-sm text-black">Lower caffeine</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Trophy size={24} className="shrink-0 text-black" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm text-black">Use</p>
                        <p className="font-normal text-sm text-black">Specialty coffee, filter</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[360px] items-center justify-end relative w-full">
                <div className="relative w-full h-full">
                  <Image
                    src="/216b34d9806cdc994789f03549d5f779fca7a73c.png"
                    alt="Arabica coffee beans"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Robusta Card */}
            <div className="bg-white border border-solid border-black flex flex-col items-start overflow-hidden rounded-[80px] w-full md:flex-1">
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
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex gap-3 items-start">
                      <Mountain size={24} className="shrink-0 text-black" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm text-black">Growing area</p>
                        <p className="font-normal text-sm text-black">Warm, low-altitude regions</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Flower size={24} className="shrink-0 text-black" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm text-black">Flavor</p>
                        <p className="font-normal text-sm text-black">Strong, bitter, earthy</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Coffee size={24} className="shrink-0 text-black" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm text-black">Caffeine</p>
                        <p className="font-normal text-sm text-black">Higher caffeine</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Trophy size={24} className="shrink-0 text-black" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm text-black">Use</p>
                        <p className="font-normal text-sm text-black">Espresso, blends</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[360px] items-center justify-end relative w-full">
                <div className="relative w-full h-full">
                  <Image
                    src="/c5f8246aa367081ff392e01baec4c12de097fab5.png"
                    alt="Robusta coffee beans"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#94887d] flex flex-col items-center w-full px-6 md:px-16 py-20">
        <div className="flex flex-col items-start max-w-[1280px] w-full">
          <div className="flex items-center justify-between w-full">
            <Link href="/" className="h-[23px] w-[88px] text-white font-bold text-lg">
              COFFEE
            </Link>
            <div className="flex items-center">
              <p className="font-normal text-sm text-white">
                © 2026 UI/UX Class Coffee. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

