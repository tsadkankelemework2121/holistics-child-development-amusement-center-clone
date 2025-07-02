import { Target, Heart, Zap } from "lucide-react"

const AboutMission = () => {
  const values = [
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "Our Mission",
      description:
        "To create the world's most inclusive and exciting gaming community where everyone can find their place and passion.",
    },
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: "Our Values",
      description:
        "We believe in respect, inclusivity, fair play, and the power of gaming to bring people together across all boundaries.",
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      title: "Our Vision",
      description:
        "To be the leading platform that transforms how people experience gaming, fostering connections and creating memories.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">{value.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 text-lg">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutMission
