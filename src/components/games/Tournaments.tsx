import { Trophy, Calendar, Users } from "lucide-react"

const GamesTournaments = () => {
  const tournaments = [
    {
      title: "Cyber Warriors Championship",
      date: "March 15-17, 2024",
      prize: "$10,000",
      participants: "128 Players",
      status: "Registration Open",
    },
    {
      title: "Speed Legends Grand Prix",
      date: "March 22-24, 2024",
      prize: "$5,000",
      participants: "64 Players",
      status: "Coming Soon",
    },
    {
      title: "Battle Royale Masters",
      date: "April 5-7, 2024",
      prize: "$15,000",
      participants: "256 Players",
      status: "Coming Soon",
    },
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h2 className="text-4xl font-bold mb-4">Upcoming Tournaments</h2>
          <p className="text-xl text-gray-300">Compete for glory and amazing prizes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tournaments.map((tournament, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">{tournament.title}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3 text-blue-400" />
                  <span>{tournament.date}</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-5 h-5 mr-3 text-yellow-400" />
                  <span>Prize Pool: {tournament.prize}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-3 text-green-400" />
                  <span>{tournament.participants}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    tournament.status === "Registration Open" ? "bg-green-600 text-white" : "bg-gray-600 text-gray-300"
                  }`}
                >
                  {tournament.status}
                </span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  {tournament.status === "Registration Open" ? "Register" : "Learn More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GamesTournaments
