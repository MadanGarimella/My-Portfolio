import SectionWrapper from "./SectionWrapper";

export default function Engineering() {
  return (
    <SectionWrapper
      id="engineering"
      className="py-32 bg-white dark:bg-darkbg px-6"
    >
      <div className="max-w-6xl mx-auto text-center space-y-10">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Engineering Meets Growth Strategy
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I don’t just build interfaces. I architect scalable digital ecosystems
          designed for performance, conversion, and long-term business impact.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          <div className="p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Scalable Frontend Architecture
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Modular, maintainable React systems built for performance and scale.
            </p>
          </div>

          {/* <div className="p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Backend & API Engineering
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Robust backend systems with clean data flow and optimized APIs.
            </p>
          </div> */}

          <div className="p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Conversion-Focused UI/UX
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Interfaces designed not just for beauty — but for measurable action.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Marketing Systems Integration
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Funnels, analytics, and automation layered into engineering workflows.
            </p>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}