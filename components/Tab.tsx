"use client"

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Tab() {
    const [activeTab, setActiveTab] = useState("education");

    const tabItems = [
        { id: "education", label: "Education" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
    ];

    const bgColors = {
        education: "#FCE4EC",
        experience: "#FFF3E0",
        projects: "#E8F5E9",
        skills: "#E3F2FD",
    };


    return (
        <>
            <div className="flex flex-wrap gap-3 mb-8">
                {tabItems.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`border-4 border-black px-6 py-3 text-lg font-bold transition-all cursor-pointer ${activeTab === tab.id
                            ? "bg-[#FF6B6B] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                            : "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div
                className="border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12"
                style={{
                    backgroundColor: bgColors[activeTab as keyof typeof bgColors]
                }}
            >
                <AnimatePresence mode="wait">
                    {activeTab === "experience" && (
                        <Experience />
                    )}

                    {activeTab === "projects" && (
                        <Projects />
                    )}

                    {activeTab === "skills" && (
                        <Skills />
                    )}

                    {activeTab === "education" && (
                        <Education />
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}