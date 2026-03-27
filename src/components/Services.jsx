import SectionWrapper from "./SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const devServices = [
  {
    title: "Frontend Systems",
    points: [
      "React & Modern UI",
      "Responsive Design",
      "Performance Optimization",
      "Animations & Interactions",
    ],
  },
  {
    title: "Backend & APIs",
    points: [
      "Node.js / Express",
      "REST API Development",
      "Database Design",
      "Authentication Systems",
    ],
  },
  {
    title: "Deployment & Scaling",
    points: [
      "Vercel / AWS Deployments",
      "CI/CD Setup",
      "Speed Optimization",
      "Maintenance & Scaling",
    ],
  },
];

const marketingServices = [
  {
    title: "Content & Branding",
    points: [
      "Content Strategy",
      "Instagram Growth",
      "Brand Positioning",
      "Short-form Video Strategy",
    ],
  },
  {
    title: "Performance Marketing",
    points: [
      "Conversion Funnels",
      "Landing Pages",
      "Ad Strategy",
      "Lead Generation Systems",
    ],
  },
  {
    title: "Analytics & Optimization",
    points: [
      "SEO Optimization",
      "Tracking Setup",
      "A/B Testing",
      "Conversion Optimization",
    ],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("dev");

  const handleScroll = (target) => {
    const element = document.querySelector(target);
    if (element && window.lenis) {
      window.lenis.scrollTo(element, {
        offset: -120,
        duration: 1.2,
      });
    }
  };

  const currentServices =
    activeTab === "dev" ? devServices : marketingServices;

  return (
    <SectionWrapper
      id="services"
      className="py-28 bg-[#0B0F1A] px-6 -mt-14"
    >
      <div className="max-w-6xl  space-y-16">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What I Do
          </h2>
          <p className="mt-6 text-gray-400">
            I build scalable tech systems and growth engines that drive real business results.
          </p>
        </div>

        {/* TOGGLE BUTTONS */}
        <div className="flex justify-center">
          <div className="flex bg-white/5 border border-white/10 rounded-full p-1">

            <button
              onClick={() => setActiveTab("dev")}
              className={`px-6 py-2 rounded-full text-md transition ${
                activeTab === "dev"
                  ? "bg-primary text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Software Development
            </button>

            <button
              onClick={() => setActiveTab("marketing")}
              className={`px-6 py-2 rounded-full text-md transition ${
                activeTab === "marketing"
                  ? "bg-primary text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Digital Marketing
            </button>

          </div>
        </div>

        {/* SERVICES GRID WITH ANIMATION */}
        <div className="relative min-h-[320px]">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-3 gap-8"
            >

              {currentServices.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
                >
                  <h4 className="text-lg font-semibold text-primary">
                    {service.title}
                  </h4>

                  <ul className="mt-6 space-y-3">
                    {service.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-primary">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

            </motion.div>
          </AnimatePresence>

        </div>

        {/* CTA */}
        {/* <div className="text-center pt-6">
          <button
            onClick={() => handleScroll("#contact")}
            className="px-8 py-3 bg-primary text-white rounded-full shadow-lg hover:scale-105 transition"
          >
            Let’s Build Something Impactful
          </button>
        </div> */}

      </div>
    </SectionWrapper>
  );
}