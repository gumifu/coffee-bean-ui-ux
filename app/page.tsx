import Image from "next/image";
import { IconCrop, IconHive, IconToast } from "./components/svg-assets";
import CoffeeBeanScene from "./components/CoffeeBeanScene";

export default function Home() {
  return (
    <div className="bg-[#241501] flex flex-col items-start relative min-h-screen w-full">
      {/* Navbar */}
      <nav className="bg-[#594a3c] flex flex-col items-center w-full">
        <div className="flex h-[72px] items-center justify-between px-16 md:px-[64px] w-full max-w-[1408px]">
          <div className="flex items-center justify-between w-full">
            <div className="h-[23px] w-[88px] text-white font-bold text-lg">
              COFFEE
            </div>
          </div>
        </div>
      </nav>

      {/* 3D Coffee Bean Scene - Fixed position, follows scroll */}
      <CoffeeBeanScene />

      {/* Hero Section */}
      <section className="bg-[#594a3c] flex flex-col items-center justify-center w-full px-6 md:px-16 py-20 relative z-10">
        <div className="flex items-start justify-center w-full max-w-[1280px]">
          <div className="flex flex-col gap-2 h-[640px] items-center justify-center overflow-hidden rounded-[80px] w-full relative bg-linear-to-b from-[#f5f5dc] to-[#e8dcc0]">
            {/* Title - Center Top */}
            <div className="absolute left-0 right-0 top-[60px] md:top-[80px] z-10 text-center">
              <h1 className="font-bold text-[48px] md:text-[56px] leading-tight text-[#616161]">
                Coffee Bean
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Origins Section */}
      <section className="bg-[#594a3c] flex flex-col items-center w-full px-6 md:px-16 py-28 relative z-10">
        <div className="flex flex-col items-start w-full max-w-[1280px]">
          <div className="flex flex-col lg:flex-row gap-20 items-center w-full">
            {/* Content */}
            <div className="flex flex-col gap-8 flex-1 relative z-20">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                    <p className="font-semibold text-base text-white">
                      Origins
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 text-white">
                    <h2 className="font-bold text-[48px] leading-tight">
                      What are coffee beans
                    </h2>
                    <p className="font-normal text-lg leading-relaxed">
                      Coffee beans are the seeds inside coffee cherries, the
                      fruit of the Coffea plant. Farmers harvest these cherries,
                      remove the fruit, and dry the beans. Then comes roasting,
                      where heat transforms the raw green beans into the dark,
                      fragrant beans we recognize. This simple journey from tree
                      to roaster creates the foundation for every cup.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 py-2">
                  <div className="flex gap-4 items-center">
                    <div className="shrink-0">
                      <IconCrop />
                    </div>
                    <p className="font-normal text-base leading-relaxed text-white">
                      Grown in tropical regions
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="shrink-0">
                      <IconHive />
                    </div>
                    <p className="font-normal text-base leading-relaxed text-white">
                      Harvested by hand or machine
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="shrink-0">
                      <IconToast />
                    </div>
                    <p className="font-normal text-base leading-relaxed text-white">
                      Roasted to develop flavor
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button className="border border-solid border-white px-6 py-3 text-white font-normal text-base hover:bg-white hover:text-[#594a3c] transition-colors">
                  Explore
                </button>
              </div>
            </div>

            {/* Image Container */}
            <div className="flex-1 relative w-full h-[640px] rounded-[80px] overflow-hidden">
              <Image
                src="/4d10d6064cf86817fb87f27f63253bfc83379840.png"
                alt="Coffee Bean Origin Background"
                fill
                className="object-cover rounded-[80px]"
              />
              <div className="absolute inset-0 bg-[rgba(153,153,153,0.6)] rounded-[80px]" />
              {/* 3Dコーヒー豆がこの上に重なります */}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section
        id="culture-section"
        className="bg-[#94887d] flex flex-col items-center w-full px-6 md:px-16 py-28 relative z-10"
      >
        <div className="flex flex-col items-start w-full max-w-[1280px]">
          <div className="flex flex-col lg:flex-row gap-20 items-center w-full h-[640px]">
            {/* Image Container */}
            <div className="flex-1 relative w-full h-full rounded-[80px] overflow-hidden">
              <Image
                src="/371a5ff833e4781c4a0e60a4ac8eda7526428998.png"
                alt="Coffee Culture Background"
                fill
                className="object-cover rounded-[80px]"
              />
              <div className="absolute inset-0 bg-[rgba(153,153,153,0.6)] rounded-[80px]" />
              {/* 3Dコーヒー豆がこの上に重なります */}
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-4 relative z-20">
              <div className="flex items-center">
                <p className="font-semibold text-base text-white">Culture</p>
              </div>
              <div className="flex flex-col gap-6 text-white">
                <h2 className="font-bold text-[48px] leading-tight">
                  Why people drink coffee
                </h2>
                <p className="font-normal text-lg leading-relaxed">
                  Coffee is more than caffeine. It&apos;s a ritual, a moment of
                  pause, a reason to gather. People drink coffee for the rich
                  aroma that fills a room, the complex flavors that change with
                  each sip, the gentle energy that sharpens the mind, and the
                  quiet comfort it brings. In kitchens and cafés around the
                  world, coffee connects us to tradition and to each other.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Two Beans Section */}
      <section
        id="about-section"
        className="bg-[#594a3c] flex flex-col items-center justify-center w-full px-6 md:px-16 py-20 relative z-10"
      >
        <div className="flex items-start justify-center w-full max-w-[1280px]">
          <div className="flex flex-col gap-2 h-[640px] items-center justify-center overflow-hidden rounded-[80px] w-full relative bg-linear-to-b from-[#f5f5dc] to-[#e8dcc0]">
            {/* 3Dコーヒー豆がこの上に重なります */}

            {/* Button - Bottom Center */}
            <div className="absolute left-0 right-0 bottom-[100px] z-10 text-center">
              <button className="border border-solid border-black px-6 py-3 text-black font-normal text-base hover:bg-black hover:text-white transition-colors">
                About Two Beans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#94887d] flex flex-col items-center w-full px-6 md:px-16 py-20 relative z-10">
        <div className="flex flex-col items-start w-full max-w-[1280px]">
          <div className="flex items-center justify-between w-full">
            <div className="h-[23px] w-[88px] text-white font-bold text-lg">
              COFFEE
            </div>
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
