import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import CaseStudyModal from "./CaseStudyModal";

import intuiti from "../assets/intuiti.png";
import sathya from "../assets/sathya.png";

const projects = [
  {
    title: "Intuiti Corporate Website",
    description:
      "A conversion-focused digital marketing agency platform.",
    longDescription:
      "Built a high-performance agency website focused on brand authority, lead generation funnels, and conversion-optimized UX architecture.",
    image: intuiti,
    tech: ["React", "Tailwind", "Node.js", "SEO"],
    outcome:
      "Improved brand positioning, structured service funnel, and optimized performance for higher engagement.",
  },
  {
    title: "Sathya Softech Website",
    description:
      "A scalable business website built with UI system thinking.",
    longDescription:
      "Engineered a structured frontend architecture with reusable components and SEO-friendly layout design.",
    image: sathya,
    tech: ["React", "UI Architecture", "Performance Optimization"],
    outcome:
      "Delivered a scalable, maintainable system aligned with business growth goals.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <SectionWrapper
        id="projects"
        className="py-32 bg-white dark:bg-darkbg px-6"
      >
        <div className="max-w-6xl mx-auto space-y-16">

          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-xl shadow-xl"
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}

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