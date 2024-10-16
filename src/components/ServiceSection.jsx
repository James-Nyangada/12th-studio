'use client'

import React from 'react'

import { motion } from 'framer-motion'
import { image } from 'framer-motion/client'

export default function Component() {
  const services = [
    {
      title: "Social Media Management & Curation",
      description: "In this package, you get:",
      bulletPoints: [
        "Social Media Audits",
        "Content Curation & Ideation",
        "Content Design & Copy",
        "Social Media Strategy",
        "Post Analysis & Reporting",
        "Content Shoot Coordination"
      ],
      investment: "Ksh 40,000 - 50,000 (Monthly)",
      ctaText: "BOOK A DISCOVERY CALL",
      image: 'image_1.webp'
    },
    {
      title: "Consultations",
      description: "Consultation sessions cover strategic and tactical questions that you have about Social Media.",
      investment: "Ksh 3,000 (Per Hour)",
      ctaText: "SCHEDULE A CONSULTATION",
      image: 'image_2.webp'
    },
    {
      title: "Coaching and Curation",
      description: "Personalized coaching sessions to enhance your skills and curated resources to keep you at the forefront of industry trends. Empower yourself with knowledge and practical insights.",
      ctaText: "START YOUR JOURNEY",
      image: 'image_3.webp'
    }
  ]

  return (
    <>
    <div className="relative h-[70vh] bg-[url('/public/workshop.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">SERVICE</h1>
        </div>
      </div>
    <div className="container mx-auto px-4 py-8 space-y-16">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                className="rounded-lg w-[400px] h-[500px]"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="mb-4">{service.description}</p>
              {service.bulletPoints && (
                <ul className="list-disc list-inside mb-4">
                  {service.bulletPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
              {service.investment && (
                <>
                  <p className="font-semibold">INVESTMENT:</p>
                  <p className="mb-4">{service.investment}</p>
                </>
              )}
              <button className="bg-transparent border border-[#e67e22] text-black px-6 py-2 rounded transition-colors duration-300 ease-in-out hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
                {service.ctaText}
              </button>
            </div>
          </div>
          {index < services.length - 1 && <hr className="border-t border-gray-300 mt-8" />}
        </motion.div>
      ))}
    </div>
    </>
  )
}