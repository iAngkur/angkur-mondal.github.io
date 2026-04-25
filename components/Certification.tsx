'use client'

import { motion } from "framer-motion";

export default function Certification() {

  const certifications = [
    { name: "Database Query & Data Processing (Oracle)", issuer: "Bangladesh Institute of Bank Management", year: "2025" },
    { name: "Postman API Fundamentals Student Expert", issuer: "Postman / Badgr", year: "2024" },
    { name: "Programming with JavaScript", issuer: "Meta", year: "2023" },
    { name: "Java Enterprise Edition (EE) Fundamentals", issuer: "LearnQuest / Coursera", year: "2023" },
  ];


  return (
    <section className="mb-12">
      <div className="border-4 border-black bg-[#E8F5E9] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
          <span className="inline-block w-10 h-10 bg-white border-4 border-black flex items-center justify-center text-xl">🏆</span>
          Certifications & Credentials
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border-4 border-black bg-white p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform"
            >
              <div className="text-4xl mb-3">📜</div>
              <h3 className="text-lg font-black mb-1 leading-tight">{cert.name}</h3>
              <p className="font-bold text-gray-600 text-sm">{cert.issuer}</p>
              <span className="inline-block bg-black text-white px-2 py-1 text-sm font-bold mt-3">{cert.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}