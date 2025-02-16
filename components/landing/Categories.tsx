"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const categories = [
  { name: "Coffee Beans", image: "/assets/1.jpg", href: "/catalog/beans" },
  { name: "Brewing Equipment", image: "/assets/2.jpeg", href: "/catalog/equipment" },
  { name: "Coffee Accessories", image: "/assets/3.jpg", href: "/catalog/accessories" },
]

export default function Categories() {
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-heading1-bold font-serif text-[#8B4513] mb-4">Explore Our Categories</h2>
          <div className="w-24 h-1 bg-[#8B4513] mx-auto mb-6" />
          <p className="text-body-medium text-[#5D4037] max-w-2xl mx-auto font-light">
            Discover our curated selection of premium coffee products and equipment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              <Link href={category.href} className="block">
                <div className="relative aspect-[4/5] overflow-hidden border-2 border-[#D7CCC8]">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#8B4513] bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-70" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <h3 className="text-heading2-bold font-serif text-[#f2c5a2] group-hover:text-white text-center mb-4 transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                      {category.name}
                    </h3>
                    <span className="text-small-semibold uppercase tracking-wider text-[#8B4513] group-hover:text-white border border-[#8B4513] group-hover:border-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Explore Now
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button
            size="lg"
            className="bg-[#8B4513] text-white rounded-none hover:bg-[#A0522D] px-8 py-6 text-body-bold"
          >
            View All Categories
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
