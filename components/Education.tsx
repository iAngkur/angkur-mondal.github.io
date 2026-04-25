
import { motion } from "framer-motion";

export default function Education() {

    const education = {
        degree: "B.Sc. in Computer Science & Engineering",
        school: "Khulna University of Engineering & Technology (KUET)",
        period: "2016 - 2020",
        gpa: "Class Representative | Dept of CSE",
        honors: "Active in Algorithmic Programming",
        courses: [
            "Data Structures & Algorithms",
            "Object-Oriented Programming",
            "Operating Systems",
            "Database Management Systems",
            "Computer Networks",
            "Software Engineering",
            "Machine Learning & AI",
            "Computer Vision & Image Processing",
        ],
    };


    return (
        <motion.div
            key="blogs"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
        >
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                <span className="inline-block w-10 h-10 bg-white border-4 border-black flex items-center justify-center text-xl">🎓</span>
                Education
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="inline-block bg-[#4ECDC4] border-2 border-black px-3 py-1 text-sm font-bold mb-2">
                        {education.period}
                    </div>
                    <h3 className="text-lg font-black">{education.degree}</h3>
                    <p className="font-bold text-gray-600">{education.school}</p>
                    <p className="text-gray-700 mt-2 font-medium">
                        {education.gpa} • {education.honors}
                    </p>
                </div>
                <div className="border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="text-xl font-black mb-4">Core Coursework</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {education.courses.map((course) => (
                            <div key={course} className="border-2 border-black bg-[#FFF9F0] px-3 py-2 font-bold text-sm flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#FF6B6B] border border-black" />
                                {course}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </motion.div>
    )
}