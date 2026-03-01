import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";

export default function Navbar({ lenisRef }) {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  // Proper smooth scroll handler
  const handleScroll = (target) => {
  const element = document.querySelector(target);
  console.log("Lenis:", lenisRef.current);

  if (element && lenisRef?.current) {
    lenisRef.current.scrollTo(element, {
      offset: -120,
      duration: 1.2,
    });
  }
};

  return (
    <>
      {/* Pill Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 w-full z-50 flex justify-center px-6"
      >
        <div className="w-full max-w-6xl px-8 py-4 rounded-full border border-gray-300 dark:border-white/10 bg-white dark:bg-darkbg shadow-lg flex justify-between items-center transition-colors duration-500">

          {/* Name (Scroll to Hero) */}
          <button
            onClick={() => handleScroll("#hero")}
            className="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary transition"
          >
            Madan Garimella
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleScroll(link.href)}
                className="text-sm text-gray-700 dark:text-gray-200 hover:text-primary transition"
              >
                {link.name}
              </button>
            ))}

            {/* Resume */}
            <a
              href="/Madan_Garimella_Software_Developer_Resume.pdf"
              download
              className="px-5 py-2 bg-primary text-white rounded-full text-sm hover:scale-105 transition"
            >
              Resume
            </a>

            {/* Premium Toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-16 h-8 rounded-full p-1 transition-colors duration-500 bg-gray-300 dark:bg-gray-700"
            >
              <motion.div
                animate={{ x: theme === "dark" ? 32 : 0 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
                className="w-6 h-6 rounded-full flex items-center justify-center bg-white dark:bg-gray-900 shadow-md"
              >
                {theme === "dark" ? (
                  <Moon size={14} className="text-yellow-400" />
                ) : (
                  <Sun size={14} className="text-blue-600" />
                )}
              </motion.div>
            </button>

          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-900 dark:text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white dark:bg-darkbg z-50 flex flex-col p-10 transition-colors duration-500"
          >
            <div className="flex justify-between items-center mb-12">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                Menu
              </h1>

              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-900 dark:text-white"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col gap-8 text-lg">

              <button
                onClick={() => {
                  handleScroll("#hero");
                  setIsOpen(false);
                }}
                className="text-left text-gray-800 dark:text-gray-200 hover:text-primary transition"
              >
                Home
              </button>

              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleScroll(link.href);
                    setIsOpen(false);
                  }}
                  className="text-left text-gray-800 dark:text-gray-200 hover:text-primary transition"
                >
                  {link.name}
                </button>
              ))}

              <a
                href="/Madan_Garimella_Software_Developer_Resume.pdf"
                download
                className="text-gray-800 dark:text-gray-200 hover:text-primary transition"
              >
                Resume
              </a>

              <button
                onClick={toggleTheme}
                className="text-left text-gray-800 dark:text-gray-200 hover:text-primary transition"
              >
                {theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"}
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
