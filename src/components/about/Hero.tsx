import { ChevronLeft, ChevronRight } from "react-feather"

const AboutHero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/src/assets/images/about-hero.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 drop-shadow-lg">About us</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed drop-shadow-md">
              We offer a comprehensive suite of programs that seamlessly integrate play, education, and community
              engagement, creating an enriching environment where every child can explore their unique capabilities. By
              fostering inclusivity and resilience, RICHFAM ensures that children aged 1-19 are equipped with the
              essential skills to thrive in an ever-evolving global landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation arrows at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button className="bg-gray-700 bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full transition-all">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button className="bg-gray-700 bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full transition-all">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  )
}

export default AboutHero
