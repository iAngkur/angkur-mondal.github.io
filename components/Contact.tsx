
'use client'

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="border-t-4 border-black bg-[#FF6B6B]">
            <div className="max-w-5xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border-4 border-black bg-white p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                >
                    <h2 className="text-3xl md:text-4xl font-black mb-4 flex items-center gap-3">
                        <span className="inline-block w-12 h-12 bg-[#FFE66D] border-4 border-black flex items-center justify-center text-2xl">📬</span>
                        Get In Touch
                    </h2>
                    <p className="text-lg font-medium text-gray-700 mb-8">
                        Open to discussing software engineering, fintech innovations, research collaborations, and full-stack development opportunities.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <a
                            href="mailto:angkur.mondal@example.com"
                            className="block border-4 border-black bg-[#FFE66D] p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
                        >
                            <div className="text-3xl mb-2">📧</div>
                            <div className="font-black text-lg">Email</div>
                            <div className="font-bold text-gray-700 text-sm">angkur.mondal@example.com</div>
                        </a>
                        <a
                            href="https://linkedin.com/in/angkur-mondal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block border-4 border-black bg-[#4ECDC4] p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
                        >
                            <div className="text-3xl mb-2">💼</div>
                            <div className="font-black text-lg">LinkedIn</div>
                            <div className="font-bold text-gray-700 text-sm">Connect Professionally</div>
                        </a>
                        <div className="block border-4 border-black bg-[#A78BFA] p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <div className="text-3xl mb-2">📍</div>
                            <div className="font-black text-lg">Location</div>
                            <div className="font-bold text-gray-700 text-sm">Dhaka, Bangladesh</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}