import SectionWrapper from "./SectionWrapper";

import reactLogo from "../assets/skills/react.png";
import jsLogo from "../assets/skills/javascript.png";
import tailwindLogo from "../assets/skills/tailwind.png";
import nodeLogo from "../assets/skills/node.png";
import mongoLogo from "../assets/skills/mongodb.png";
import figmaLogo from "../assets/skills/figma.png";
import seoLogo from "../assets/skills/seo.png";
import gitLogo from "../assets/skills/git.png";

const skills = [
  { name: "React", icon: reactLogo },
  { name: "JavaScript", icon: jsLogo },
  { name: "Tailwind CSS", icon: tailwindLogo },
  { name: "Node.js", icon: nodeLogo },
  { name: "MongoDB", icon: mongoLogo },
  { name: "Figma", icon: figmaLogo },
  { name: "SEO Optimization", icon: seoLogo },
  { name: "Git & Version Control", icon: gitLogo },
];

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      className="py-32 bg-gray-50 dark:bg-darkbg px-6"
    >
      <div className="max-w-6xl mx-auto text-center space-y-16">

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Technical Stack
          </h2>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tools and technologies I use to design, build, and optimize scalable digital systems.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group flex items-center justify-center"
            >
              {/* Badge Container */}
              <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition duration-500 hover:scale-110">

                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />

              </div>

              {/* Tooltip */}
              <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition duration-300 text-sm text-gray-700 dark:text-gray-200">
                {skill.name}
              </div>

            </div>
          ))}

        </div>
      </div>
    </SectionWrapper>
  );
}