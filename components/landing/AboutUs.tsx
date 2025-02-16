"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const features = [
  { title: "Якість", description: "Відбірні кавові зерна та майстерне обсмаження" },
  { title: "Традиції", description: "Львівські кавові традиції з 1829 року" },
  { title: "Атмосфера", description: "Унікальний досвід підземної кав'ярні" },
]

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={sectionRef}
      className="w-full py-24 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-heading2-bold text-[#8B4513] font-serif">Про Львівську Копальню Кави</h2>
              <p className="text-body-medium text-[#5D4037]">
                Львівська Копальня Кави - це унікальне місце, де традиції львівського кавярства зустрічаються з
                сучасністю. Наша кава - це поєднання багатовікового досвіду та інновацій, що створює неповторний смак та
                атмосферу.
              </p>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-px h-6 bg-[#D7CCC8] mt-2" />
                    <div>
                      <h3 className="text-base-semibold text-[#8B4513]">{feature.title}</h3>
                      <p className="text-base-regular text-[#5D4037]">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <Button className="bg-[#8B4513] text-white rounded-none hover:bg-[#A0522D] px-8 py-6 text-base-semibold">
                  Відвідати Копальню
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <Image
                  src="/assets/traditions.jpg"
                  alt="Львівська Копальня Кави інтер'єр"
                  width={450}
                  height={600}
                  className="rounded-sm object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-[#D7CCC8] rounded-sm flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm">
                <p className="text-center text-base-semibold text-[#8B4513] font-serif">Традиції кави з 1829 року</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

