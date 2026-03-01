import SectionWrapper from "./SectionWrapper";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { number: 10, suffix: "+", label: "Projects Delivered" },
    { number: 1, suffix: "+", label: "Years Experience in Marketing & Development" },
    { number: 100, suffix: "%", label: "Client Satisfaction Focus" },
    { number: 24, suffix: "/7", label: "Learning & Building Mindset" },
  ];

  return (
    <SectionWrapper
      id="stats"
      className="py-32 bg-gray-50 dark:bg-darkbg px-6"
    >
      <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:scale-105 transition duration-500"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-primary">
              {inView && (
                <CountUp
                  end={stat.number}
                  duration={2}
                  suffix={stat.suffix}
                  easingFn={(t, b, c, d) => {
                    return c * (1 - Math.pow(1 - t / d, 3)) + b;
                  }}
                />
              )}
            </h3>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </SectionWrapper>
  );
}