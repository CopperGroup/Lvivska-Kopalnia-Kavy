"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Coffee, Award, Users } from "lucide-react"

const brandValues = [
  {
    icon: Coffee,
    title: "Якість кави",
    description:
      "Ми ретельно відбираємо та обсмажуємо найкращі кавові зерна, щоб забезпечити неперевершений смак кожної чашки.",
  },
  {
    icon: Award,
    title: "Традиції та інновації",
    description:
      "Поєднуємо вікові львівські традиції кавярства з сучасними методами приготування для створення унікального досвіду.",
  },
  {
    icon: Users,
    title: "Атмосфера спільноти",
    description:
      "Наша кав'ярня - це місце, де люди збираються, щоб насолодитися не лише кавою, але й теплою, привітною атмосферою.",
  },
]

export default function Brand() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={sectionRef}
      className="w-full py-24 bg-[#F5E6D3]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-heading2-bold mb-12 text-center text-[#8B4513] font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Наш Бренд
        </motion.h2>
        <motion.p
          className="text-body-medium text-[#5D4037] text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Львівська Копальня Кави - це не просто кав'ярня, а справжній символ львівської кавової культури. Ми поєднуємо
          багатовікові традиції з інноваціями, створюючи неповторний досвід для кожного відвідувача.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {brandValues.map((value, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="mb-6 p-4 rounded-full bg-[#8B4513]">
                <value.icon className="w-8 h-8 text-[#F5E6D3]" />
              </div>
              <h3 className="text-heading4-medium mb-4 text-[#8B4513] font-serif">{value.title}</h3>
              <p className="text-base-regular text-[#5D4037]">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

