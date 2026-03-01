import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      className="py-32 bg-gray-50 dark:bg-darkbg px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Let’s Build Something
            <span className="block text-primary">
              Impactful Together.
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Open to collaborations, freelance projects, technical roles,
            and strategic partnerships.
          </p>

          <div className="pt-6">
            <a
              href="/Madan_Garimella_Software_Developer_Resume.pdf"
              download
              className="inline-block px-6 py-3 border border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-10 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-2xl space-y-8"
        >
          <ContactItem
            icon={<Phone size={22} />}
            label="Phone"
            value="+91 6305953316"
            link="tel:+916305953316"
          />

          <ContactItem
            icon={<Mail size={22} />}
            label="Email"
            value="madangarimella@gmail.com"
            link="mailto:madangarimella@gmail.com"
          />

          <ContactItem
            icon={<Linkedin size={22} />}
            label="LinkedIn"
            value="linkedin.com/in/chandrashekar-madan-garimella/"
            link="https://www.linkedin.com/in/chandrashekar-madan-garimella/"
          />

          <ContactItem
            icon={<Github size={22} />}
            label="GitHub"
            value="github.com/MadanGarimella"
            link="https://github.com/MadanGarimella"
          />
        </motion.div>

      </div>
    </SectionWrapper>
  );
}

function ContactItem({ icon, label, value, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-5 p-4 rounded-xl hover:bg-primary/10 transition duration-300"
    >
      <div className="text-primary">{icon}</div>

      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {label}
        </p>
        <p className="text-gray-800 dark:text-gray-200 group-hover:text-primary transition">
          {value}
        </p>
      </div>
    </a>
  );
}