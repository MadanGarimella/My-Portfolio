import { motion } from "framer-motion";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-darkbg px-6 pt-24"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white"
          >
            Madan Garimella
          </motion.h1>

          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-xl md:text-2xl text-primary font-semibold"
          >
            Software Developer & Digital Marketer
          </motion.h2>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            I engineer scalable digital systems and growth-driven experiences
            that convert attention into measurable results.
          </motion.p>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
            >
              Let's Collaborate
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-72 h-72 bg-primary/30 blur-3xl rounded-full animate-pulse"></div>

          <img
            src={profile}
            alt="Madan Garimella"
            className="relative w-72 h-72 object-cover rounded-full shadow-2xl border-4 border-white dark:border-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
