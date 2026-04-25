'use client'

import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
    const summary = "Software Engineer with 3+ years of industry experience building secure, high-throughput financial systems. Expert in Java, Spring Boot, Oracle PL/SQL, and modern web technologies. Passionate about backend infrastructure, system design, and reliable computing, with a research focus on secure transaction monitoring and AI-driven financial architectures.";


    return (
        <header className="border-b-4 border-black bg-[#FFE66D]">
            <div className="max-w-5xl mx-auto px-6 py-8 md:py-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-8 items-center md:items-start"
                >
                    {/* Profile Image - Replace src with your actual image path */}
                    <div className="flex-shrink-0">
                        <div className="w-40 h-40 md:w-56 md:h-56 border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative">
                            <Image
                                src="/my-pic.png"
                                alt="Angkur Mondal Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-block bg-black text-white px-3 py-1 text-sm font-bold mb-4 transform -rotate-1 tracking-wide">
                            🚀 SOFTWARE ENGINEER & RESEARCHER
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-black tracking-tight mb-2">
                            Angkur Mondal
                        </h1>
                        <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                            Oracle PL/SQL | Java & Spring Boot | System Design
                        </p>
                        <p className="text-lg max-w-2xl font-medium text-gray-700 leading-relaxed mb-8">
                            {summary}
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a
                                href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#4ECDC4] border-4 border-black px-6 py-3 text-lg font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer flex items-center gap-2"
                            >
                                📄 Download Resume
                            </a>
                            <a
                                href="#contact"
                                className="inline-block bg-[#FF6B6B] border-4 border-black px-6 py-3 text-lg font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
                            >
                                📧 Contact Me
                            </a>
                            <a
                                href="https://github.com/iAngkur"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white border-4 border-black px-6 py-3 text-lg font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
                            >
                                ⭐ GitHub
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </header>
    )
}