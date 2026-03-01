import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function CaseStudyModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 60 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
          >
            <div
              className="relative max-w-4xl w-full max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-darkbg border border-gray-200 dark:border-white/10 shadow-2xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-primary transition"
              >
                ✕
              </button>

              {/* Content */}
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h2>

              <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.longDescription}
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-primary">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3 mt-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold text-primary">
                  Outcome & Impact
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {project.outcome}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
