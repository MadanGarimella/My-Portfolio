import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import heroBg from "../assets/hero-bg.png";

export default function Hero({ lenisRef }) {
  const handleScroll = (target) => {
    const element = document.querySelector(target);

    if (element && lenisRef?.current) {
      lenisRef.current.scrollTo(element, {
        offset: -100,
        duration: 1.2,
      });
    }
  };

  return (
    <section
      id="hero"
      className="w-full min-h-screen bg-[#0B0F1A] flex items-start justify-center px-4 md:px-6 pt-24 overflow-hidden"
    >
      <div className="w-full max-w-6xl">
        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block">
          {/* COVER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-3xl overflow-hidden border border-white/10"
          >
            <img
              src={heroBg}
              alt="cover"
              className="w-full h-52 object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/50"></div>
          </motion.div>

          {/* PROFILE SECTION */}
          <div className="relative bg-[#0F172A] rounded-3xl border border-white/10 mt-[-30px] px-10 pt-20 pb-10">
            {/* AVATAR */}
            <div className="absolute -top-16 left-10">
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={profile}
                alt="profile"
                className="w-40 h-auto rounded-full border-4 border-[#0F172A] object-cover shadow-lg"
              />
            </div>

            {/* CONTENT */}
            <div className="flex justify-between items-start mt-7">
              {/* LEFT */}
              <div className="max-w-xl">
                <h1 className="text-4xl font text-white font-serif">
                  Madan Garimella
                </h1>

                <p className="text-gray-400 mt-1">
                  Software Developer • Digital Marketer
                </p>

                <p className="mt-4 text-gray-300 leading-relaxed">
                  I engineer scalable digital systems and growth-driven
                  experiences that convert attention into measurable results.
                </p>

                {/* CTA */}
                <div className="mt-6 flex gap-4">
                  <button
                    onClick={() => handleScroll("#projects")}
                    className="px-6 py-2.5 bg-primary text-white font-serif rounded-full hover:scale-105 transition"
                  >
                    View Projects
                  </button>

                  <button
                    onClick={() => handleScroll("#contact")}
                    className="px-6 py-2.5 border font-serif border-primary text-primary rounded-full hover:bg-primary hover:text-white transition"
                  >
                    Let’s Collaborate
                  </button>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex justify-center gap-5 mt-6 mr-10 text-white">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/chandrashekar-madan-garimella/"
                  target="Linkedin"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-white transition"
                >
                  <i className="ri-linkedin-fill text-2xl"></i>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/MadanGarimella"
                  target="Github"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-white transition"
                >
                  <i className="ri-github-fill text-2xl"></i>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/chandduuu.__/"
                  target="Instagram"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-white transition"
                >
                  <i className="ri-instagram-line text-2xl"></i>
                </a>

                {/* Email */}
                <a
                  href="mailto:madangarimella@gmail.com"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-white transition"
                >
                  <i className="ri-mail-line text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-[95%] mx-auto bg-[#0F172A] rounded-3xl border border-white/10 overflow-hidden"
          >
            {/* COVER */}
            <div className="relative">
              <img
                src={heroBg}
                alt="cover"
                className="w-full h-36 object-cover"
              />

              {/* AVATAR */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2">
                <img
                  src={profile}
                  alt="profile"
                  className="w-32 h-auto rounded-full border-4 border-[#0F172A] object-cover"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="pt-14 pb-8 px-6 text-center mt-10">
              <h2 className="text-lg font-semibold text-white">
                Madan Garimella
              </h2>

              <p className="text-primary text-sm mt-1">
                Software Developer & Marketer
              </p>

              <p className="text-gray-400 text-sm mt-4">
                I build scalable systems & growth-driven experiences that
                convert.
              </p>

              {/* CTA */}
              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={() => handleScroll("#projects")}
                  className="w-full py-2.5 bg-primary text-white rounded-full"
                >
                  View Projects
                </button>

                <button
                  onClick={() => handleScroll("#contact")}
                  className="w-full py-2.5 border border-primary text-primary rounded-full"
                >
                  Contact Me
                </button>
              </div>

              {/* SOCIALS */}
              <div className="flex justify-center gap-5 mt-6 text-white">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/chandrashekar-madan-garimella/"
                  target="Linkedin"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-white transition"
                >
                  <i className="ri-linkedin-fill text-lg"></i>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/MadanGarimella"
                  target="Github"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-white transition"
                >
                  <i className="ri-github-fill text-lg"></i>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/chandduuu.__/"
                  target="Instagram"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-white transition"
                >
                  <i className="ri-instagram-line text-lg"></i>
                </a>

                {/* Email */}
                <a
                  href="mailto:madangarimella@gmail.com"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-white transition"
                >
                  <i className="ri-mail-line text-lg"></i>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
