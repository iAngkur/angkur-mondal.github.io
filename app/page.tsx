"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState("education");

  const summary = "Software Engineer with 3+ years of industry experience building secure, high-throughput financial systems. Expert in Java, Spring Boot, Oracle PL/SQL, and modern web technologies. Passionate about backend infrastructure, system design, and reliable computing, with a research focus on secure transaction monitoring and AI-driven financial architectures.";

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

  const skills = [
    { name: "Java & Spring Boot", level: 95 },
    { name: "Oracle PL/SQL & DB Design", level: 92 },
    { name: "System Design & Architecture", level: 88 },
    { name: "React.js & Next.js", level: 85 },
    { name: "JavaScript & TypeScript", level: 82 },
    { name: "Node.js & MERN Stack", level: 78 },
  ];

  const education = {
    degree: "B.Sc. in Computer Science & Engineering",
    school: "Khulna University of Engineering & Technology (KUET)",
    period: "2016 - 2020",
    gpa: "Class Representative | Dept of CSE",
    honors: "Active in Algorithmic Programming",
    courses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Machine Learning & AI",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Distributed Systems",
      "Software Engineering"
    ],
  };

  const certifications = [
    { name: "Database Query & Data Processing (Oracle)", issuer: "Bangladesh Institute of Bank Management", year: "2025" },
    { name: "Postman API Fundamentals Student Expert", issuer: "Postman / Badgr", year: "2024" },
    { name: "Programming with JavaScript", issuer: "Meta", year: "2023" },
    { name: "Java Enterprise Edition (EE) Fundamentals", issuer: "LearnQuest / Coursera", year: "2023" },
  ];

  const research = {
    papers: [
      {
        title: "AI/ML Integration for Real-Time Transaction Monitoring in Digital Banking",
        type: "Ongoing Research",
        year: "2025",
        description: "Investigating supervised and unsupervised learning models to detect anomalous transaction patterns and reduce false positives in compliance systems."
      },
      {
        title: "Optimizing Oracle PL/SQL Performance for High-Volume Financial Reporting",
        type: "Internal Technical Report",
        year: "2024",
        description: "Documented query optimization techniques, index tuning, and execution plan analysis that reduced reporting latency by 95% in core banking modules."
      },
    ],
    interests: [
      "Secure Backend Infrastructure",
      "AI-Driven Financial Systems",
      "Distributed System Reliability",
      "Database Performance Tuning",
    ],
  };

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
    <div className="min-h-screen bg-[#FFF9F0] font-sans text-gray-900">
      {/* Hero Section */}
      <header className="border-b-4 border-black bg-[#FFE66D]">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
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
                  href="https://github.com/angkur-mondal"
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

      {/* Stats Bar */}
      <section className="border-b-4 border-black bg-white">
        <div className="max-w-5xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
          {[
            { num: "3+", label: "Years Exp." },
            { num: "10M+", label: "Daily Transactions" },
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

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Tab Navigation */}
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

        {/* Tab Content */}

        <div
          className="border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12"
          style={{
            backgroundColor: bgColors[activeTab as keyof typeof bgColors]
          }}
        >
          <AnimatePresence mode="wait">
            {activeTab === "experience" && (
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
            )}

            {activeTab === "projects" && (
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
            )}

            {activeTab === "skills" && (
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
            )}

            {activeTab === "education" && (
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
                    <h3 className="text-xl font-black">{education.degree}</h3>
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
            )}
          </AnimatePresence>
        </div>

        {/* Research Section */}
        <section className="mb-12">
          <div className="border-4 border-black bg-[#E3F2FD] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
              <span className="inline-block w-10 h-10 bg-white border-4 border-black flex items-center justify-center text-xl">🔬</span>
              Research & Academic Focus
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-black mb-4 border-b-4 border-black pb-2 inline-block">Ongoing Research & Reports</h3>
              <div className="space-y-4">
                {research.papers.map((paper, i) => (
                  <div key={i} className="border-4 border-black bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`px-2 py-1 text-sm font-bold border-2 border-black ${paper.type.includes('Ongoing') ? 'bg-[#A78BFA] text-white' : 'bg-[#4ECDC4] text-white'}`}>
                        {paper.type}
                      </span>
                      <span className="font-bold text-gray-500">{paper.year}</span>
                    </div>
                    <h4 className="text-lg font-black">{paper.title}</h4>
                    <p className="text-gray-700 font-medium mt-2">{paper.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black mb-4 border-b-4 border-black pb-2 inline-block">Research Interests</h3>
              <div className="flex flex-wrap gap-3">
                {research.interests.map((interest) => (
                  <span
                    key={interest}
                    className="border-4 border-black bg-[#FFE66D] px-4 py-2 font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
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
      </main>

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="border-t-4 border-black bg-black text-white py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-bold text-lg">© 2026 Angkur Mondal. All rights reserved.</p>
          <div className="flex gap-4">
            {["GitHub", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="border-2 border-white px-4 py-2 font-bold hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}