import { Star, Play } from "lucide-react"

const GamesCatalog = () => {
  const games = [
    {
      title: "Cyber Warriors",
      genre: "Action",
      rating: 4.8,
      players: "1-4 Players",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Speed Legends",
      genre: "Racing",
      rating: 4.6,
      players: "1-8 Players",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Mind Maze",
      genre: "Puzzle",
      rating: 4.9,
      players: "1-2 Players",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Battle Royale Pro",
      genre: "Multiplayer",
      rating: 4.7,
      players: "1-100 Players",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Fantasy Quest",
      genre: "Adventure",
      rating: 4.5,
      players: "1-4 Players",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Soccer Champions",
      genre: "Sports",
      rating: 4.4,
      players: "1-4 Players",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Games</h2>
          <p className="text-xl text-gray-600">Popular games in our collection</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img src={game.image || "/placeholder.svg"} alt={game.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{game.title}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm text-gray-600">{game.rating}</span>
                  </div>
                </div>
                <p className="text-blue-600 font-medium mb-2">{game.genre}</p>
                <p className="text-gray-600 mb-4">{game.players}</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
                  <Play className="w-4 h-4 mr-2" />
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GamesCatalog
