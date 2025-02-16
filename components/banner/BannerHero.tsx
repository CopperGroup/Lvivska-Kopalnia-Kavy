import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function BannerHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#1C0A00]">
      <Image
        src="/assets/banner-hero.jpg"
        alt="Lviv Coffee Mine interior with antique coffee roasting equipment"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C0A00] via-[#1C0A00]/80 to-transparent">
        <div className="container mx-auto h-full flex items-center">
          <div className="max-w-2xl space-y-8">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Lvivs'ka Kopalnia Kavy logo"
                width={100}
                height={100}
                className="mb-4"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-[#E6C2A0] leading-tight">
              Lvivs&apos;ka
              <br />
              <span className="text-[#8B4513]">Kopalnia Kavy</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#D2B48C] max-w-xl font-light">
              Unearth the rich flavors of Lviv&apos;s coffee heritage, where tradition meets modern craftsmanship.
            </p>
            <div className="flex space-x-4">
              <Button
                size="lg"
                className="bg-[#8B4513] text-[#E6C2A0] rounded-none hover:bg-[#A0522D] px-8 py-6 text-lg font-semibold"
              >
                Order Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-[#E6C2A0] border-[#E6C2A0] rounded-none hover:bg-[#E6C2A0]/10 px-8 py-6 text-lg font-semibold"
              >
                Our Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1C0A00] to-transparent"></div>
    </section>
  )
}

