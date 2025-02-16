"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const milestones = [
  { year: 1675, event: "Юрій Кульчицький заклав кавові зерна в шахті як корисні копалини" },
  { year: 1941, event: "Ярослав Стецько проголосив 'Акт відновлення Української державності' з балкона будинку" },
  { year: 2009, event: "Заснування 'Львівської Копальні Кави'" },
  { year: 2024, event: "Популяризація запаяної кави та кавового пива" },
]

export default function History() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={sectionRef}
      className="w-full py-24 bg-[#1C0A00] text-[#E6C2A0]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-heading2-bold mb-12 text-center font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Тут народжується львівська кава
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#8B4513] text-[#E6C2A0] flex items-center justify-center border-2 border-[#E6C2A0]">
                  <span className="text-heading4-medium font-serif">{milestone.year}</span>
                </div>
                <div className="pt-4">
                  <p className="text-base-semibold">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="relative aspect-[4/3] mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Image
              src="/assets/history-image.jpg"
              alt="Львівська Копальня Кави"
              width={800}
              height={600}
              className="rounded-sm object-cover"
            />
            <div className="absolute inset-0 bg-[#1C0A00] bg-opacity-30 flex items-center justify-center">
              <p className="text-heading3-bold text-[#E6C2A0] text-center font-serif px-4">
                Запаяна кава, кавове пиво, шахти повні ароматних зерен… Ще не чув?
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
