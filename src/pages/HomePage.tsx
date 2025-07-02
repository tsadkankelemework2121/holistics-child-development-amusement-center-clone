import HomeHero from "../components/home/Hero"
import HomeFeatured from "../components/home/Featured"
import HomeStats from "../components/home/Stats"
import HomeTestimonials from "../components/home/Testimonials"

const HomePage = () => {
  return (
    <div>
      <HomeHero />
      <HomeFeatured />
      <HomeStats />
      <HomeTestimonials />
    </div>
  )
}

export default HomePage
