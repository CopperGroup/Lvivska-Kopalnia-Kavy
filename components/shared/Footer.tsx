import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1C0A00] text-[#E6C2A0] z-40 pt-16 pb-8 w-full min-w-[320px]">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="w-full">
            <h3 className="text-heading4-medium font-serif mb-4">Меню</h3>
            <ul className="space-y-2 text-base-regular">
              <li>
                <Link href="/menu/coffee" className="hover:text-[#D2B48C] transition-colors">
                  Кава
                </Link>
              </li>
              <li>
                <Link href="/menu/desserts" className="hover:text-[#D2B48C] transition-colors">
                  Десерти
                </Link>
              </li>
              <li>
                <Link href="/menu/snacks" className="hover:text-[#D2B48C] transition-colors">
                  Закуски
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h3 className="text-heading4-medium font-serif mb-4">Про нас</h3>
            <ul className="space-y-2 text-base-regular">
              <li>
                <Link href="/about/history" className="hover:text-[#D2B48C] transition-colors">
                  Історія
                </Link>
              </li>
              <li>
                <Link href="/about/coffee-mine" className="hover:text-[#D2B48C] transition-colors">
                  Кавова шахта
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="hover:text-[#D2B48C] transition-colors">
                  Наша команда
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h3 className="text-heading4-medium font-serif mb-4">Послуги</h3>
            <ul className="space-y-2 text-base-regular">
              <li>
                <Link href="/services/catering" className="hover:text-[#D2B48C] transition-colors">
                  Кейтеринг
                </Link>
              </li>
              <li>
                <Link href="/services/coffee-school" className="hover:text-[#D2B48C] transition-colors">
                  Школа кави
                </Link>
              </li>
              <li>
                <Link href="/services/events" className="hover:text-[#D2B48C] transition-colors">
                  Організація подій
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h3 className="text-heading4-medium font-serif mb-4">Контакти</h3>
            <p className="mb-2 text-base-regular">Тел: +380 32 235 51 54</p>
            <p className="mb-4 text-base-regular">Email: info@lviv-coffee-mine.com</p>
            <h4 className="text-base-semibold mb-2">Ми в соцмережах</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#E6C2A0] hover:text-[#D2B48C] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-[#E6C2A0] hover:text-[#D2B48C] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-[#E6C2A0] hover:text-[#D2B48C] transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#8B4513] pt-8 mt-8 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-small-regular text-[#D2B48C] mb-4 lg:mb-0 text-center lg:text-left">
              © {currentYear} <span className="font-semibold">Львівська Копальня Кави</span>. Всі права захищені.
            </p>
            <div className="flex flex-col items-center lg:items-end space-y-2 lg:space-y-0">
              <span className="text-small-regular text-[#D2B48C] text-center lg:text-right">
                Традиції кави з 1829 року
              </span>
              <div className="flex space-x-2 mt-2 lg:mt-1">
                <Image
                  className="h-12 w-auto"
                  width={120}
                  height={48}
                  src="/logo.png"
                  alt="Львівська Копальня Кави лого"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

