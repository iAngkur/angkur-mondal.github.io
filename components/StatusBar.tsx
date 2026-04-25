'use client'

import { motion } from "framer-motion";

export default function StatusBar() {
    return (
              <section className="border-b-4 border-black bg-white">
        <div className="max-w-5xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
          {[
            { num: "3+", label: "Years Exp." },
            { num: "8M+", label: "Daily Transactions" },
            { num: "95%↓", label: "Query Optimization" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="text-center border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#FFE66D]"
            >
              <div className="text-3xl md:text-4xl font-black">{stat.num}</div>
              <div className="text-sm font-bold text-gray-700 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    )
}