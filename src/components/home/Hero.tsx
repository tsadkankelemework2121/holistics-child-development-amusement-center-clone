import { Play, Users, Trophy } from "lucide-react"

const HomeHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Welcome to the Ultimate
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {" "}
                Gaming Hub
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of gamers in epic battles, tournaments, and community events. Experience gaming like never
              before with our state-of-the-art facilities and exclusive memberships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Gaming
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img src="/placeholder.svg?height=500&width=600" alt="Gaming Setup" className="rounded-lg shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <Users className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="font-bold text-lg">10K+</p>
                  <p className="text-sm text-gray-600">Active Players</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <Trophy className="w-8 h-8 text-yellow-500" />
                <div>
                  <p className="font-bold text-lg">500+</p>
                  <p className="text-sm text-gray-600">Tournaments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
