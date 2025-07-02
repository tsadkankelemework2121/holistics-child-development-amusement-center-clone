import { Gamepad2, Calendar, Users, Award } from "lucide-react"

const HomeFeatured = () => {
  const features = [
    {
      icon: <Gamepad2 className="w-12 h-12 text-blue-600" />,
      title: "Latest Games",
      description: "Access to the newest and most popular games in our collection",
    },
    {
      icon: <Calendar className="w-12 h-12 text-green-600" />,
      title: "Weekly Events",
      description: "Join exciting tournaments and community events every week",
    },
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: "Gaming Community",
      description: "Connect with fellow gamers and build lasting friendships",
    },
    {
      icon: <Award className="w-12 h-12 text-yellow-600" />,
      title: "Rewards Program",
      description: "Earn points and unlock exclusive rewards for your achievements",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose GameHub?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes us the premier destination for gamers of all levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeFeatured
