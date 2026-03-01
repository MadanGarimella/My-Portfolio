import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Engineering",
    description:
      "High-performance, scalable web applications engineered with modern frontend architecture and optimized backend systems.",
    points: [
      "React & Modern UI Systems",
      "API & Backend Development",
      "Performance Optimization",
      "Deployment & DevOps Setup",
    ],
  },
  {
    title: "Growth-Driven Digital Marketing",
    description:
      "Marketing systems designed to convert traffic into measurable business outcomes through data-backed strategies.",
    points: [
      "Conversion Funnels",
      "Content Strategy",
      "SEO Optimization",
      "Analytics & Tracking Setup",
    ],
  },
  {
    title: "Conversion & Optimization Systems",
    description:
      "User experiences engineered for clarity, persuasion, and revenue growth — not just aesthetics.",
    points: [
      "UX & Interface Optimization",
      "Landing Page Systems",
      "A/B Strategy Planning",
      "Brand Positioning Alignment",
    ],
  },
];

export default function Services() {
  const handleScroll = (target) => {
    const element = document.querySelector(target);
    if (element && window.lenis) {
      window.lenis.scrollTo(element, {
        offset: -120,
        duration: 1.2,
      });
    }
  };

  return (
    <SectionWrapper
      id="services"
      className="py-32 bg-white dark:bg-darkbg px-6"
    >
      <div className="max-w-6xl mx-auto text-center space-y-16">

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Services
          </h2>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            End-to-end digital systems combining engineering precision with growth-focused execution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4 }}
              className="group relative p-10 rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 shadow-lg hover:shadow-2xl transition duration-500"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-primary">
                  {service.title}
                </h3>

                <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-8 space-y-3 text-left">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-primary">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

        </div>

        <div className="pt-10">
          <button
            onClick={() => handleScroll("#contact")}
            className="inline-block px-8 py-4 bg-primary text-white rounded-xl shadow-xl hover:scale-105 transition duration-300"
          >
            Let’s Build Something Impactful
          </button>
        </div>

      </div>
    </SectionWrapper>
  );
}