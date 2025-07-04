const AboutDifferentiators = () => {
  const differentiators = [
    {
      number: "1",
      title: "Holistic Approach:",
      description:
        "Unlike traditional amusement parks or educational centers, RICHFAM emphasizes a comprehensive methodology that nurtures all aspects of a child's development physical, emotional, social, cognitive, and spiritual.",
    },
    {
      number: "2",
      title: "Cultural Integration:",
      description:
        "RICHFAM incorporates local culture and traditions into its programs, helping children connect with their heritage while fostering respect for diversity and we will leverage virtual reality (VR) technology to immerse children in their history and traditions. This innovative approach will allow children to experience cultural narratives and historical events in an engaging, interactive way.",
      additionalText:
        "Through VR, they will explore significant moments in Ethiopian history, understand cultural practices, and connect with their heritage like never before. This technology not only enhances learning but also fosters a deeper appreciation for their identity and traditions, making education both memorable and impactful.",
    },
    {
      number: "3",
      title: "Community-Centric Model:",
      description:
        "The center actively engages families and local organizations in its initiatives, promoting collaboration and shared learning experiences that strengthen community bonds.",
    },
    {
      number: "4",
      title: "Innovative Learning Environments:",
      description:
        "RICHFAM features uniquely designed interactive zones that combine play with educational content, ensuring children learn through engaging, hands-on experiences.",
    },
    {
      number: "5",
      title: "Technology Integration:",
      description:
        "We seamlessly blend cutting-edge technology with traditional learning methods, creating immersive educational experiences that prepare children for the digital age while maintaining human connection and creativity.",
    },
    {
      number: "6",
      title: "Personalized Development Plans:",
      description:
        "Each child receives individualized attention with customized learning paths that recognize their unique strengths, interests, and developmental needs, ensuring optimal growth and engagement.",
    },
    {
      number: "7",
      title: "Sustainable Practices:",
      description:
        "RICHFAM is committed to environmental responsibility, incorporating eco-friendly practices and teaching children about sustainability, conservation, and their role as stewards of the planet.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content - Scrollable */}
          <div>
            <h2 className="text-5xl font-bold text-blue-900 mb-12">RICHFAM's Differentiators</h2>

            <div className="max-h-[600px] overflow-y-auto pr-4 space-y-8 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100">
              {differentiators.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-start mb-4">
                    <span className="text-xl font-bold text-blue-900 mr-4 flex-shrink-0">{item.number}.</span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-base text-gray-700 leading-relaxed mb-4">{item.description}</p>
                      {item.additionalText && (
                        <p className="text-base text-gray-700 leading-relaxed">{item.additionalText}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Illustration - Fixed */}
          <div className="relative lg:sticky lg:top-8">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl p-8 relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute top-4 left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="w-24 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded flex items-center justify-center">
                  <div className="w-16 h-8 bg-white rounded opacity-80"></div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="space-y-2">
                  <div className="w-16 h-2 bg-pink-400 rounded"></div>
                  <div className="w-12 h-2 bg-yellow-400 rounded"></div>
                  <div className="w-20 h-2 bg-green-400 rounded"></div>
                  <div className="w-14 h-2 bg-purple-400 rounded"></div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="w-20 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <div className="w-12 h-6 bg-white rounded-full opacity-80"></div>
                </div>
              </div>

              {/* World Map */}
              <div className="absolute top-16 right-8 bg-white rounded-lg p-3 shadow-lg">
                <div className="w-32 h-20 bg-gradient-to-r from-teal-300 to-blue-400 rounded flex items-center justify-center">
                  <div className="text-white text-xs font-bold">🌍</div>
                </div>
              </div>

              {/* Children Illustration */}
              <div className="flex justify-center items-end h-80 pt-16">
                {/* Child 1 */}
                <div className="relative mr-4">
                  <div className="w-16 h-20 bg-red-400 rounded-t-full rounded-b-lg"></div>
                  <div className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full"></div>
                  <div className="absolute top-6 left-4 w-8 h-2 bg-white rounded-full"></div>
                </div>

                {/* Child 2 - Center */}
                <div className="relative mx-4">
                  <div className="w-18 h-24 bg-yellow-500 rounded-t-full rounded-b-lg"></div>
                  <div className="absolute top-2 left-3 w-3 h-3 bg-white rounded-full"></div>
                  <div className="absolute top-2 right-3 w-3 h-3 bg-white rounded-full"></div>
                  <div className="absolute top-7 left-5 w-8 h-2 bg-white rounded-full"></div>
                  <div className="absolute -top-4 left-6 w-6 h-6 bg-purple-600 rounded-full"></div>
                </div>

                {/* Child 3 */}
                <div className="relative ml-4">
                  <div className="w-16 h-20 bg-purple-500 rounded-t-full rounded-b-lg"></div>
                  <div className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full"></div>
                  <div className="absolute top-6 left-4 w-8 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-1/2 left-8 w-4 h-4 bg-pink-400 rounded-full animate-bounce"></div>
              <div className="absolute top-1/3 right-12 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 left-12 w-5 h-5 bg-green-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutDifferentiators
