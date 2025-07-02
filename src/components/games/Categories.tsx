import { Sword, Car, Puzzle, Users } from "lucide-react"

const GamesCategories = () => {
  const categories = [
    {
      icon: <Sword className="w-12 h-12 text-red-600" />,
      title: "Action & Adventure",
      count: "150+ Games",
      description: "Epic battles and thrilling adventures await",
    },
    {
      icon: <Car className="w-12 h-12 text-blue-600" />,
      title: "Racing & Sports",
      count: "80+ Games",
      description: "Feel the adrenaline in every race and match",
    },
    {
      icon: <Puzzle className="w-12 h-12 text-purple-600" />,
      title: "Puzzle & Strategy",
      count: "120+ Games",
      description: "Challenge your mind with strategic gameplay",
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Multiplayer",
      count: "200+ Games",
      description: "Team up or compete with players worldwide",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Game Categories</h2>
          <p className="text-xl text-gray-600">Find your perfect gaming experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-blue-600 font-medium mb-3">{category.count}</p>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GamesCategories
