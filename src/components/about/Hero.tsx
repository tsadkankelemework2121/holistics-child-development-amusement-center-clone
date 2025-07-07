//import backgroundImg from "../../assets/image.png";

const AboutHero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        //backgroundImage: `url(${backgroundImg})`,
         //backgroundColor: "red", 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold drop-shadow-lg">About us</h1>
        </div>
      </div>

      {/* Bottom Content - Updated to match image */}
      <div className=" z-10 bg-white pb-12 -mt-20">
        <div className=" sm:px-8 py-8 text-left"> {/* Added text-left here */}
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed ">
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