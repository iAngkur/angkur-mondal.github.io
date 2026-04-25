import { motion } from "framer-motion";

export default function Skills() {
    const skills = [
        { name: "Java & Spring Boot", level: 95 },
        { name: "Oracle PL/SQL & DB Design", level: 92 },
        { name: "System Design & Architecture", level: 88 },
        { name: "React.js & Next.js", level: 85 },
        { name: "JavaScript & TypeScript", level: 82 },
        { name: "Node.js & MERN Stack", level: 78 },
    ];


    return (
        <motion.div
            key="skills"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
        >
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                <span className="inline-block w-10 h-10 bg-[#A78BFA] border-4 border-black flex items-center justify-center text-xl">⚡</span>
                Technical Proficiency
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="border-4 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-lg">{skill.name}</span>
                            <span className="bg-black text-white px-2 py-0.5 text-sm font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full h-6 bg-gray-200 border-4 border-black">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
                                className="h-full bg-[#FF6B6B] border-r-4 border-black"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}