import { CareersSection } from '../components/home/CareersSection'
import { FeaturedProducts } from '../components/home/FeaturedProducts'
import { Hero } from '../components/home/Hero'
import { StatsBar } from '../components/home/StatsBar'
import { OverviewSection } from '../components/home/OverviewSection'

export function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <OverviewSection />
      <FeaturedProducts />
      <CareersSection />
    </>
  )
}
