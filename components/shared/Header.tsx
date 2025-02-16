"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"
import Auth from "./Auth"
import AdminLink from "./AdminLink"
import { TransitionLink } from "../interface/TransitionLink"
import { usePathname } from "next/navigation"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import BurgerMenu from "./BurgerMenu"
import { trackFacebookEvent } from "@/helpers/pixel"
import Image from "next/image"

const Links = [
  { label: "Головна", href: "/" },
  { label: "Меню", href: "/menu" },
  { label: "Резервації", href: "/reservations" },
  { label: "Історія", href: "/history" },
  { label: "Інформація", href: "/info" },
]

const infoNames = ["Контакти", "Години роботи", "Локації"]

export default function Header({ email, user }: { email: string; user: string }) {
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const isInView = useInView(headerRef, { once: true })

  const userInfo = JSON.parse(user)

  const handleLead = (label: string) => {
    trackFacebookEvent("Lead", {
      lead_type: label,
    })
  }

  return (
    <header ref={headerRef} className="w-full min-w-[320px] h-20 flex justify-center items-center bg-[#1C0A00]">
      <div className="w-full max-w-[1680px] h-full flex justify-between items-center px-5 max-[600px]:px-9 max-[500px]:px-7">
        <div className="size-5 hidden max-lg:flex"></div>
        <div>
          <Link href="/" className="w-fit flex gap-2 justify-center items-center">
            <Image src="/logo.png" alt="Lvivs'ka Kopalnia Kavy Logo" width={40} height={40} />
          </Link>
        </div>
        <nav className="w-fit h-11 flex gap-1 justify-center items-center rounded-full bg-[#8B4513] px-2 max-lg:hidden">
          <AdminLink />
          {Links.map(({ label, href }, index) => {
            const isActive = (pathname.includes(href) && href.length > 1) || pathname === href

            if (label === "Інформація") {
              return (
                <div key={label}>
                  <Menubar className="h-8 border-0 p-0 space-x-0">
                    <MenubarMenu>
                      <MenubarTrigger
                        className={`w-fit h-8 text-[#E6C2A0] flex justify-center items-center border-[#E6C2A0] rounded-full cursor-pointer px-[0.885rem] ${isActive && "bg-[#5D4037] text-white border"}`}
                      >
                        <p
                          className={`text-small-medium font-normal hover:text-white transition-all ${isActive && "text-white"}`}
                        >
                          {label}
                        </p>
                      </MenubarTrigger>
                      <MenubarContent className="min-w-[9rem] bg-[#8B4513] text-[#E6C2A0] border-0 rounded-2xl">
                        {["contacts", "hours", "locations"].map((subItem, index) => (
                          <MenubarItem
                            key={subItem}
                            className="text-small-medium font-normal cursor-pointer hover:text-white transition-all"
                          >
                            <TransitionLink href={`/info/${subItem}`} onClick={() => handleLead(`/info/${subItem}`)}>
                              {infoNames[index]}
                            </TransitionLink>
                          </MenubarItem>
                        ))}
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                </div>
              )
            } else {
              return (
                <div key={label}>
                  <div
                    className={`w-fit h-8 text-[#E6C2A0] flex justify-center items-center border-[#E6C2A0] rounded-full px-[0.885rem] ${isActive && "bg-[#5D4037] text-white border"}`}
                  >
                    <TransitionLink
                      href={href}
                      className={`text-small-medium font-normal hover:text-white transition-all ${isActive && "text-white"}`}
                      onClick={() => handleLead(label)}
                    >
                      {label}
                    </TransitionLink>
                  </div>
                </div>
              )
            }
          })}
        </nav>
        <div className="w-fit flex justify-center items-center max-lg:hidden pointer-events-none opacity-0">
          <Auth email={email} user={user} />
        </div>
        <div className="w-fit h-8 hidden mt-1">
          <BurgerMenu email={email} user={user} />
        </div>
      </div>
    </header>
  )
}

