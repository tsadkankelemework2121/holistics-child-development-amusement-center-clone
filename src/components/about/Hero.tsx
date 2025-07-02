import { ChevronLeft, ChevronRight } from "lucide-react"

const AboutHero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/src/assets/images/about-hero-new.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Navigation Header */}
      <div className="relative z-10 bg-blue-900 bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-white">
              <h1 className="text-2xl font-bold">RICHFAM</h1>
              <p className="text-sm opacity-90">
                Integrated Children Holistic Development,
                <br />
                Lodge & Family Amusement Center.
              </p>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-white hover:text-yellow-300 transition-colors">
                Home
              </a>
              <a href="/about" className="text-yellow-300 font-semibold">
                About
              </a>
              <a href="/games" className="text-white hover:text-yellow-300 transition-colors">
                Games
              </a>
              <a href="/events" className="text-white hover:text-yellow-300 transition-colors">
                Events
              </a>
              <a href="/memberships" className="text-white hover:text-yellow-300 transition-colors">
                Membership
              </a>
              <a href="/blogs" className="text-white hover:text-yellow-300 transition-colors">
                Blog
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[70vh]">
        <div className="text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 drop-shadow-lg">About us</h1>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed text-center max-w-6xl mx-auto">
            We offer a comprehensive suite of programs that seamlessly integrate play, education, and community
            engagement, creating an enriching environment where every child can explore their unique capabilities. By
            fostering inclusivity and resilience, RICHFAM ensures that children aged 1-19 are equipped with the
            essential skills to thrive in an ever-evolving global landscape.
          </p>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center space-x-4 pb-8">
          <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Restart button */}
        <div className="absolute bottom-4 right-4">
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full text-white text-sm transition-colors flex items-center">
            <span className="mr-2">🔄</span>
            Restart R
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
