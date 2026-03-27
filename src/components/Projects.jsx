import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";

import inco from "../assets/intuiti.png";
import forte from "../assets/forte.png";
import explore from "../assets/epicure.png";
import haraa from "../assets/haraa.png";
import smaakanzzo from "../assets/smaakanzzo.png";
import cozone from "../assets/cozone.png";

const projects = {
  dev: [
    {
      title: "Intuiti Corporates — Digital Marketing Agency Website",
      type: "Website Development",
      image: inco,
      overview:
        "Designed and developed a high-conversion website for Intuiti Corporates, a digital marketing agency focused on helping brands scale through performance-driven strategies.",
      description:
        "Built a modern, visually compelling website that communicates authority, trust, and results. The primary goal was to convert visitors into qualified leads through strategic UI/UX and persuasive content structure.",
      highlights: [
        "Conversion-focused sections",
        "Smooth animations",
        "Premium UI",
        "Responsive design",
      ],
      stack: ["React.js", "Tailwind CSS", "Framer Motion"],
      outcome: [
        "Improved engagement",
        "Strong brand positioning",
        "Better lead generation",
      ],
    },
    {
      title: "Forte & Co Legal Solutions — Professional Web Platform",
      type: "Web Platform",
      image: forte,
      overview: "Developed a professional website for a legal firm.",
      description: "Created a clean corporate website enhancing credibility.",
      highlights: [
        "Clear service categorization",
        "Trust-focused UI",
        "Professional structure",
      ],
      stack: ["React.js", "SEO"],
      outcome: ["Improved credibility"],
    },
  ],

  marketing: [
    {
      title: "Epicure Cafe — Brand Growth Strategy",
      type: "Digital Marketing",
      image: explore,
      overview: "Content-driven growth strategy.",
      description: "Focused on engagement & storytelling.",
      highlights: ["Content strategy", "Reels", "Engagement"],
      stack: ["Content", "Social Media"],
      outcome: ["Increased engagement"],
    },
    {
      title: "Epicure Cafe — Brand Growth Strategy",
      type: "Digital Marketing",
      image: haraa,
      overview: "Content-driven growth strategy.",
      description: "Focused on engagement & storytelling.",
      highlights: ["Content strategy", "Reels", "Engagement"],
      stack: ["Content", "Social Media"],
      outcome: ["Increased engagement"],
    },
    {
      title: "Epicure Cafe — Brand Growth Strategy",
      type: "Digital Marketing",
      image: smaakanzzo,
      overview: "Content-driven growth strategy.",
      description: "Focused on engagement & storytelling.",
      highlights: ["Content strategy", "Reels", "Engagement"],
      stack: ["Content", "Social Media"],
      outcome: ["Increased engagement"],
    },
    {
      title: "Epicure Cafe — Brand Growth Strategy",
      type: "Digital Marketing",
      image: cozone,
      overview: "Content-driven growth strategy.",
      description: "Focused on engagement & storytelling.",
      highlights: ["Content strategy", "Reels", "Engagement"],
      stack: ["Content", "Social Media"],
      outcome: ["Increased engagement"],
    },
  ],
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("dev");
  const [selectedProject, setSelectedProject] = useState(null);

  const currentProjects = projects[activeTab];

  return (
    <SectionWrapper id="projects" className="bg-[#0B0F1A] px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-white mb-10">Successful Clients</h2>

        {/* TOGGLE */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-[#2a2a2a] rounded-full p-1">
            <button
              onClick={() => setActiveTab("dev")}
              className={`px-6 py-2 rounded-full text-sm ${
                activeTab === "dev" ? "bg-primary text-white" : "text-gray-300"
              }`}
            >
              Software Development
            </button>

            <button
              onClick={() => setActiveTab("marketing")}
              className={`px-6 py-2 rounded-full text-sm ${
                activeTab === "marketing"
                  ? "bg-primary text-white"
                  : "text-gray-300"
              }`}
            >
              Digital Marketing
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {currentProjects.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer rounded-2xl p-[2px] bg-gradient-to-b from-white/30 to-white/5"
            >
              <div className="h-52 rounded-2xl bg-[#1a1a1a] flex flex-col items-center justify-center space-y-3">
                <img src={project.image} className="w-14 h-14" />
                <h3 className="text-white text-sm font-semibold text-center px-2">
                  {project.title.split("—")[0]}
                </h3>
                <p className="text-xs text-gray-400">{project.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ FIXED MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* BACKDROP (no scroll blocking) */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            {/* MODAL CONTAINER */}
            <div className="absolute inset-0 flex justify-center items-start overflow-hidden">
              {/* SCROLLABLE MODAL */}
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 60, opacity: 0 }}
                className="mt-20 mb-10 w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#020617] border border-white/10 p-8 shadow-2xl"
              >
                {/* CLOSE */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-16 right-52 z-auto 
             flex items-center justify-center 
             w-10 h-10 rounded-full 
             bg-white/10 backdrop-blur-md 
             border border-white/20 
             text-white text-lg font-semibold
             shadow-lg
             transition-all duration-300
             hover:bg-white hover:text-black hover:scale-110"
                >
                  ✕
                </button>

                {/* CONTENT */}
                <h2 className="text-2xl text-white font-semibold">
                  {selectedProject.title}
                </h2>

                <p className="text-primary text-sm mt-2">
                  {selectedProject.type}
                </p>

                <p className="mt-3 text-gray-300">{selectedProject.overview}</p>

                <div className="mt-3 text-gray-300">
                  {selectedProject.description}
                </div>

                <div className="mt-3 space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="text-gray-300 text-sm">
                      • {h}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
