import { ChevronLeft, ChevronRight } from "lucide-react";

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
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl font-bold text-blue-900 mb-12">
              RICHFAM's Differentiators
            </h2>

            <div className="space-y-8">
              {differentiators.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-start mb-4">
                    <span className="text-2xl font-bold text-blue-900 mr-4">
                      {item.number}.
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {index === 1 && (
                    <div className="ml-8 mt-4">
                      <p className="text-gray-700 leading-relaxed">
                        Through VR, they will explore significant moments in
                        Ethiopian history, understand cultural practices, and
                        connect with their heritage like never before. This
                        technology not only enhances learning but also fosters a
                        deeper appreciation for their identity and traditions,
                        making education both memorable and impactful.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl p-8 relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute top-4 left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="w-24 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"></div>
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="space-y-2">
                  <div className="w-16 h-2 bg-pink-400 rounded"></div>
                  <div className="w-12 h-2 bg-yellow-400 rounded"></div>
                  <div className="w-20 h-2 bg-green-400 rounded"></div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="w-20 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              </div>

              {/* Children Illustration */}
              <div className="flex justify-center items-center h-80">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Diverse children learning together"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center space-x-4 mt-12">
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
            Rest
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutDifferentiators;
