import { STATS } from '../../utils/constants'
import { AnimatedSection } from '../ui/AnimatedSection'

export function StatsBar() {
  return (
    <AnimatedSection className="bg-base-200 border-y border-base-300 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <div key={stat.label} className={`text-center ${i > 0 ? 'animate-slide-up opacity-0' : ''}`}>
            <p className="text-primary text-3xl font-bold md:text-4xl">{stat.value}</p>
            <p className="text-base-content/70 mt-1 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
