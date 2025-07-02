import { Gamepad2 } from "lucide-react"

const GamesHero = () => {
  return (
    <section className="bg-gradient-to-r from-green-900 to-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Gamepad2 className="w-16 h-16 mx-auto mb-6 text-green-400" />
          <h1 className="text-5xl font-bold mb-6">Explore Our Games</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover an incredible collection of games across all genres. From competitive esports to casual adventures,
            we have something for every type of gamer.
          </p>
        </div>
      </div>
    </section>
  )
}

export default GamesHero
