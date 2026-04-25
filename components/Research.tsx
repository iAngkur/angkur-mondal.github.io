export default function Research() {

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

    return (
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
    )
}