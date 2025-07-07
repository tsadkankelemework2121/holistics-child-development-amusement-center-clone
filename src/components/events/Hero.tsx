const EventsHero = () => {
  return (
    <section className="bg-gradient-to-br from-cyan-400 via-green-400 to-blue-500 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-8 leading-tight">
            Exciting Events for Every Child!
          </h1>
          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
            At RICHFAM, we offer a variety of events designed to engage, inspire, and support children's development.
            From hands-on workshops to seasonal celebrations, each event is crafted to provide fun and learning
            opportunities for kids of all ages.
          </p>
        </div>
      </div>

      {/* Character Illustrations */}
      {/* Left Character - Child */}
      <div className="absolute bottom-0 left-16">
        <div className="w-24 h-32 bg-orange-400 rounded-t-full rounded-b-lg relative">
          <div className="absolute top-4 left-4 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute top-4 right-4 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute top-8 left-6 w-12 h-2 bg-white rounded-full"></div>
          {/* Hair */}
          <div className="absolute -top-4 left-2 w-20 h-12 bg-amber-800 rounded-full"></div>
          {/* Overalls */}
          <div className="absolute top-12 left-2 w-20 h-16 bg-yellow-500 rounded-lg"></div>
          {/* Arms */}
          <div className="absolute top-14 -left-4 w-8 h-12 bg-orange-400 rounded-full transform rotate-12"></div>
          <div className="absolute top-14 -right-4 w-8 h-12 bg-orange-400 rounded-full transform -rotate-12"></div>
        </div>
      </div>

      {/* Right Character - Dinosaur */}
      <div className="absolute bottom-0 right-16">
        <div className="w-28 h-36 bg-purple-500 rounded-t-full rounded-b-lg relative">
          <div className="absolute top-6 left-6 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute top-6 right-6 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute top-10 left-8 w-12 h-2 bg-white rounded-full"></div>
          {/* Spikes on head */}
          <div className="absolute -top-2 left-4 w-4 h-6 bg-purple-700 transform rotate-12"></div>
          <div className="absolute -top-2 left-8 w-4 h-6 bg-purple-700"></div>
          <div className="absolute -top-2 left-12 w-4 h-6 bg-purple-700 transform -rotate-12"></div>
          {/* Arms */}
          <div className="absolute top-16 -left-4 w-8 h-12 bg-purple-500 rounded-full"></div>
          <div className="absolute top-16 -right-4 w-8 h-12 bg-purple-500 rounded-full"></div>
          {/* Orange vest */}
          <div className="absolute top-14 left-4 w-20 h-16 bg-orange-500 rounded-lg"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-1/4 w-8 h-8 bg-yellow-400 transform rotate-45"></div>
      <div className="absolute top-32 right-1/4 w-6 h-6 bg-pink-400 rounded-full"></div>
      <div className="absolute top-16 left-1/2 w-4 h-4 bg-white rounded-full"></div>

      {/* Gift Box */}
      <div className="absolute top-24 right-1/3">
        <div className="w-12 h-12 bg-purple-600 rounded relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-12 bg-yellow-400"></div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-12 h-2 bg-yellow-400"></div>
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-yellow-400 rounded-t-full"></div>
        </div>
      </div>

      {/* Rocket */}
      <div className="absolute top-40 left-1/3">
        <div className="w-6 h-16 bg-red-500 rounded-t-full relative">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-orange-400 rounded-b-full"></div>
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default EventsHero
