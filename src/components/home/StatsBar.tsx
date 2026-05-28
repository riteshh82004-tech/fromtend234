import { STATS } from "../../utils/constants";
import { AnimatedSection } from "../ui/AnimatedSection";

export function StatsBar() {
  return (
    <AnimatedSection className="bg-base-200 border-y border-base-300 py-8 sm:py-10 md:py-12 safe-area">
      <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-3 sm:px-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`text-center ${i > 0 ? "animate-slide-up opacity-0" : ""}`}
          >
            <p className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold">
              {stat.value}
            </p>
            <p className="text-base-content/70 mt-1 text-xs sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
