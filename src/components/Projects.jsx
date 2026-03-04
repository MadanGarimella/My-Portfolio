import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import CaseStudyModal from "./CaseStudyModal";

import inco from "../assets/intuiti.png";
import forte from "../assets/forte.png";
import explore from "../assets/epicure.png";
import haraa from "../assets/haraa.png";
import smackers from "../assets/smaakanzzo.png";
import cozone from "../assets/cozone.png";

const projects = {
  website: [
    {
      title: "Intuiti Corporates",
      description: "Corporate legal website development.",
      longDescription:
        "Designed and developed a clean corporate legal website focused on credibility, service clarity, and professional brand presence.",
      image: inco,
      tech: ["React", "Tailwind", "SEO"],
      outcome:
        "Established strong professional web presence with optimized performance and structured service communication.",
    },
    {
      title: "Forte & Co Legal Solutions",
      description: "Modern legal services platform.",
      longDescription:
        "Developed a professional legal solutions platform focused on trust, clarity, and structured service presentation.",
      image: forte,
      tech: ["React", "UI Architecture", "SEO"],
      outcome:
        "Improved online credibility and created a structured legal services platform.",
    },
  ],

  marketing: [
    {
      title: "Epicure - The Cafe Bites",
      description: "Brand marketing and digital presence.",
      longDescription:
        "Developed digital marketing strategies focused on brand storytelling, content growth, and social engagement.",
      image: explore,
      tech: ["Content Marketing", "Brand Strategy", "Social Media Establishment"],
      outcome:
        "Improved brand awareness and social media engagement.",
    },
    {
      title: "Haraa Gold & Diamonds",
      description: "Luxury jewelry digital marketing.",
      longDescription:
        "Implemented digital marketing strategies for luxury jewelry branding, including visual storytelling and content-driven campaigns.",
      image: haraa,
      tech: ["Brand Marketing", "Social Media", "Performance Marketing"],
      outcome:
        "Elevated luxury brand perception and improved audience engagement.",
    },
    {
      title: "Smaakanzzo",
      description: "Local brand marketing growth.",
      longDescription:
        "Executed digital marketing campaigns focused on local audience engagement, creative promotions, and content marketing.",
      image: smackers,
      tech: ["Content Marketing", "Social Media Campaigns"],
      outcome:
        "Boosted local brand visibility and social reach.",
    },
    {
      title: "CoZone Creative Space",
      description: "Creative studio marketing.",
      longDescription:
        "Developed digital marketing campaigns highlighting creative services, community engagement, and brand storytelling.",
      image: cozone,
      tech: ["Brand Strategy", "Content Marketing","Brand Awareness"],
      outcome:
        "Strengthened digital presence and brand positioning.",
    },
  ],
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const renderProjects = (list) =>
    list.map((project, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.3 }}
        onClick={() => setSelectedProject(project)}
        className="cursor-pointer flex items-center justify-center"
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-24 md:h-28 object-contain transition duration-300 hover:opacity-80"
        />
      </motion.div>
    ));

  return (
    <>
      <SectionWrapper
        id="projects"
        className="py-32 bg-white dark:bg-darkbg px-6"
      >
        <div className="max-w-6xl mx-auto space-y-20">

          {/* Title */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Featured Projects
            </h2>
          </div>

          {/* Website Development */}
          <div className="space-y-10 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Website Development
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-12 max-w-3xl mx-auto items-center">
              {renderProjects(projects.website)}
            </div>
          </div>

          {/* Digital Marketing */}
          <div className="space-y-10 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Digital Marketing
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
              {renderProjects(projects.marketing)}
            </div>
          </div>

        </div>
      </SectionWrapper>

      <CaseStudyModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}