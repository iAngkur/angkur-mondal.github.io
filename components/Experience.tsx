import { motion } from "framer-motion";

export default function Experience() {

    const experiences = [
        {
            company: "Dutch-Bangla Bank PLC (Rocket)",
            location: "Head Office, Motijheel, Dhaka, Bangladesh",
            roles: [
                {
                    role: "Senior Officer - Software Engineer-II",
                    period: "Sep 2024 - Present",
                    color: "#FFE66D",
                    points: [
                        "Leading design & development of a centralized SSO Identity Provider system from scratch using Oracle PL/SQL, Spring Boot, and React.js.",
                        "Architecting secure authentication workflows and token-based session management for enterprise-wide access control.",
                        "Conducting R&D on AI/ML integration for Transaction Monitoring Systems to enhance fraud detection and compliance.",
                        "Managing requirements gathering, system design, and Oracle database architecture for mission-critical banking modules."
                    ],
                },
                {
                    role: "MTO - Software Engineer-I",
                    period: "Aug 2023 - Aug 2024",
                    color: "#4ECDC4",
                    points: [
                        "Built full-stack Transaction Monitoring System (TMS) handling CBS, Mobile, Agent, Card, and Remittance transactions for Bangladesh Bank compliance.",
                        "Developed Enterprise Payment Reporting System for WALTON using Oracle PL/SQL and BI Publisher for automated financial reporting.",
                        "Implemented Loan EMI auto-deduction logic and E2E integration modules, significantly enhancing digital banking automation.",
                        "Developed React.js frontends for ATM Dispute Settlement & Outsource Employee Management systems, streamlining banking operations."
                    ],
                },
            ],
        },
        {
            company: "Sonali Intellect Limited",
            location: "Banani, Dhaka, Bangladesh",
            roles: [
                {
                    role: "Product Engineer",
                    period: "Apr 2024 - Aug 2024",
                    color: "#A78BFA",
                    points: [
                        "Enhanced Core Banking System (CBS) modules, improving transaction accuracy and operational efficiency for retail/corporate banking.",
                        "Designed 29 comprehensive Trade Finance reports for Rupali Bank using Java, JSF, Oracle PL/SQL, and Jasper Reports.",
                        "Optimized complex SQL queries, resolving database overflow exceptions and significantly improving system scalability and data integrity."
                    ],
                },
                {
                    role: "Functional Engineer",
                    period: "Oct 2022 - Mar 2024",
                    color: "#FF6B6B",
                    points: [
                        "Developed and maintained banking system features using Java, JSF, JavaScript, and Oracle PL/SQL aligned with dynamic business requirements.",
                        "Achieved major performance optimization, reducing critical query execution time from hours to approximately 15 minutes.",
                        "Improved code maintainability and database efficiency for mission-critical financial applications handling high-volume transactions."
                    ],
                },
            ],
        },
        {
            company: "উদ্ভাস - Udvash Academic & Admission Care",
            location: "Dhaka, Bangladesh",
            roles: [
                {
                    role: "Math Lecturer",
                    period: "Dec 2015 - Mar 2024",
                    color: "#FF6B6B",
                    points: [
                        "Taught university admission aspirants advanced mathematics for competitive exams (DU, BUET, KUET, RUET, CUET medical)",
                        "Prepared lecture notes, practice sheets, and shortcut techniques for fast problem-solving",
                        "Guided 100+ students (if you have a number, add it) through complex topics like calculus, algebra, geometry, and trigonometry",
                        "Provided one-on-one doubt-clearing sessions outside of class"
                    ],
                },

            ],
        },

    ];

    return (
        <motion.div
            key="experience"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
        >
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                <span className="inline-block w-10 h-10 bg-[#FF6B6B] border-4 border-black flex items-center justify-center text-xl">💼</span>
                Career Progression
            </h2>

            <div className="space-y-12">
                {experiences.map((company, companyIdx) => (
                    <div key={companyIdx} className="relative">
                        {/* Company Header */}
                        <div className="border-4 border-black bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8">
                            <h3 className="text-2xl font-black">{company.company}</h3>
                            <p className="font-bold text-gray-600">{company.location}</p>
                        </div>

                        {/* Timeline Container */}
                        <div className="relative ml-4 md:ml-8 pl-8 border-l-4 border-black space-y-8">
                            {company.roles.map((role, roleIdx) => (
                                <div key={roleIdx} className="relative">
                                    {/* Timeline Node */}
                                    <div
                                        className="absolute -left-[20px] top-8 w-5 h-5 bg-white border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10"
                                        style={{ backgroundColor: role.color }}
                                    />
                                    {/* Role Card */}
                                    <div className="border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                            <div>
                                                <h4 className="text-xl font-black">{role.role}</h4>
                                            </div>
                                            <span className="inline-block bg-black text-white px-3 py-1 text-sm font-bold mt-2 md:mt-0">
                                                {role.period}
                                            </span>
                                        </div>
                                        <ul className="space-y-2">
                                            {role.points.map((point, idx) => (
                                                <li key={idx} className="flex items-start gap-3 font-medium text-gray-700">
                                                    <span className="inline-block w-2 h-2 mt-2 border-2 border-black flex-shrink-0" style={{ backgroundColor: role.color }} />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}