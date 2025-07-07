import backgroundImg from "../../assets/about.png";

const AboutHero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        backgroundImage: `url(${backgroundImg.src})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <div className="text-center text-white px-4 -mt-8">
          <h1 className="text-6xl -mt-8 md:text-7xl font-bold drop-shadow-lg">About us</h1>
        </div>
      </div>

      {/* Bottom Content - Matched to reference image */}
      <div className="relative z-10 bg-white pb-16 pt-8 -mt-12">
        <div className="  px-8 sm:px-12"> {/* Adjusted container width and padding */}
          <p className="text-lg text-gray-800 leading-relaxed tracking-normal font-medium">
            We offer a comprehensive suite of programs that seamlessly integrate play, education, and community
            engagement, creating an enriching environment where every child can explore their unique capabilities. By
            fostering inclusivity and resilience, RICHFAM ensures that children aged 1-19 are equipped with the
            essential skills to thrive in an ever-evolving global landscape.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutHero