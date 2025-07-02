const HomeStats = () => {
  const stats = [
    { number: "10,000+", label: "Active Players" },
    { number: "500+", label: "Games Available" },
    { number: "50+", label: "Weekly Tournaments" },
    { number: "99%", label: "Satisfaction Rate" },
  ]

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">GameHub by the Numbers</h2>
          <p className="text-xl text-blue-200">Join a thriving community of passionate gamers</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-lg text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeStats
