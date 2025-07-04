const MembershipsHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-8 left-16 transform -rotate-12">
        <div className="w-16 h-32 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-t-full rounded-b-sm"></div>
        <div className="w-4 h-8 bg-gray-600 mx-auto"></div>
      </div>
      <div className="absolute top-4 right-20 transform rotate-12">
        <div className="w-12 h-20 bg-gradient-to-b from-pink-400 to-red-400 rounded"></div>
      </div>
      <div className="absolute top-12 right-32">
        <div className="w-16 h-12 bg-white rounded shadow-lg transform rotate-6"></div>
        <div className="w-12 h-1 bg-blue-400 mt-1 ml-2"></div>
        <div className="w-10 h-1 bg-blue-400 mt-1 ml-2"></div>
        <div className="w-14 h-1 bg-blue-400 mt-1 ml-2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-6xl md:text-7xl font-bold text-yellow-400 mb-8 leading-tight">
              WORLD OF FUN AND LEARNING
            </h1>
            <p className="text-xl text-white leading-relaxed max-w-2xl">
              Join our membership program to access exclusive benefits, from priority access to events and activities to
              specialized services for families.
            </p>
          </div>

          {/* Right Illustrations */}
          <div className="relative">
            {/* Person with book */}
            <div className="absolute top-0 left-8">
              <div className="w-20 h-24 bg-orange-500 rounded-t-full rounded-b-lg relative">
                <div className="absolute top-3 left-3 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute top-3 right-3 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute top-8 left-6 w-8 h-2 bg-white rounded-full"></div>
                <div className="absolute -bottom-8 left-2 w-16 h-12 bg-green-500 rounded transform -rotate-12"></div>
              </div>
            </div>

            {/* Person gesturing */}
            <div className="absolute top-8 right-8">
              <div className="w-20 h-24 bg-yellow-500 rounded-t-full rounded-b-lg relative">
                <div className="absolute top-3 left-3 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute top-3 right-3 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute top-8 left-6 w-8 h-2 bg-white rounded-full"></div>
                <div className="absolute -right-6 top-4 w-8 h-8 bg-yellow-300 rounded-full"></div>
              </div>
            </div>

            {/* Decorative stars */}
            <div className="absolute top-16 left-16 text-yellow-400 text-2xl">✨</div>
            <div className="absolute bottom-8 right-16 text-yellow-400 text-3xl">⭐</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MembershipsHero
