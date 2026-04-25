
import { motion } from "framer-motion";
import Header from "@/components/Header";
import StatusBar from "@/components/StatusBar";
import Tab from "@/components/Tab";
import Footer from "@/components/Footer";
import Research from "@/components/Research";
import Certification from "@/components/Certification";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] font-sans text-gray-900">
      <Header />

      {/* Stats Bar */}
      <StatusBar />

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Tab Navigation */}
        <Tab />

        {/* Research Section */}
        <Research />

        {/* Certifications Section */}
        <Certification />
      </main>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}