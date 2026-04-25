import { motion } from "framer-motion";

export default function Projects() {

    const projects = [
        {
            name: "🔐 Single Sign-On (SSO) Identity Provider",
            tech: "Oracle PL/SQL, Spring Boot, React.js",
            description: "Centralized authentication system enabling secure access to all in-house applications with token-based session management and unified user provisioning.",
            link: "#",
            color: "#FFE66D",
        },
        {
            name: "🚀 Rocket Mobile Financial System",
            tech: "Java, Oracle PL/SQL, Spring Boot",
            description: "Core MFS modules including Standing Instructions, Auto-Pay (Bill/P2P/Top-up), and E2E integration handling millions of daily digital transactions.",
            link: "#",
            color: "#4ECDC4",
        },
        {
            name: "📊 Transaction Monitoring System (TMS)",
            tech: "React.js, Spring Boot, Oracle PL/SQL",
            description: "Compliance-driven alert system generating real-time flags based on Bangladesh Bank criteria across CBS, MBS, CMS, ABS, and Remittance channels.",
            link: "#",
            color: "#A78BFA",
        },
        {
            name: "🏧 ATM/CRM Dispute Settlement System",
            tech: "React.js, Oracle BI Publisher, SQL",
            description: "Full-stack platform for ADC & Call Centre to manage and settle disputed ATM/CRM deposit & withdrawal transactions via switch channel integration.",
            link: "#",
            color: "#FF6B6B",
        },
    ];

    return (
        <motion.div
            key="projects"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
        >
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                <span className="inline-block w-10 h-10 bg-[#4ECDC4] border-4 border-black flex items-center justify-center text-xl">🎯</span>
                Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((proj, i) => (
                    <motion.div
                        key={proj.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                    >
                        <div
                            className="inline-block border-2 border-black px-3 py-1 text-sm font-bold mb-3"
                            style={{ backgroundColor: proj.color }}
                        >
                            {proj.tech}
                        </div>
                        <h3 className="text-xl font-black mb-2">{proj.name}</h3>
                        <p className="text-gray-700 font-medium mb-4">{proj.description}</p>
                        <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-black text-white px-4 py-2 font-bold border-2 border-black hover:bg-white hover:text-black transition-colors cursor-pointer"
                        >
                            View Details →
                        </a>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}