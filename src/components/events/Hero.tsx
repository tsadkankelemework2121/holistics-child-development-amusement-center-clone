"use client";
import girlImg from "../../assets/leftgirl.png";
import monImg from "../../assets/monster.png";
import eventbackImg from "../../assets/eventback.png";
import rockyImg from "../../assets/rocket.png";
import giftImg from "../../assets/gift.png";
import bubbleImg from "../../assets/bubble.png";

interface EventsHeroProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const EventsHero = ({ activeTab, setActiveTab }: EventsHeroProps) => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[75vh] min-h-[500px] overflow-hidden bg-gradient-to-br from-cyan-400 to-green-400">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={eventbackImg.src}
            alt="Happy children at RICHFAM"
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* Cartoon Characters - Left */}
        <div className="absolute left-[5%] bottom-0 w-1/4 max-w-[200px] h-[85vh]">
          <img
            src={girlImg.src}
            alt="Cartoon character"
            className="w-full h-full object-contain object-left-bottom"
          />
        </div>

        {/* Cartoon Characters - Right */}
        <div className="absolute right-0 bottom-0 w-1/4 max-w-xs h-auto">
          <img
            src={monImg.src}
            alt="Cartoon character"
            className="w-full h-auto"
          />
        </div>

        {/* Rocket Image - Bottom Right - Larger Size with Increased Opacity */}
        <div className="absolute right-[30%] -bottom-[14%] w-[40%] min-w-[150px] max-w-[300px] z-20">
          <img
            src={rockyImg.src}
            alt="Rocket"
            className="w-full h-auto animate-float opacity-100"
          />
        </div>
           {/* gift Image - Bottom Right - Larger Size with Increased Opacity */}
        <div className="absolute right-[50%] bottom-[59%] w-[15%] min-w-[150px] max-w-[300px] z-20">
          <img
            src={giftImg.src}
            alt="Rocket"
            className="w-full h-auto animate-float opacity-100"
          />
        </div>

       <div className="absolute right-[60%] bottom-[45%] w-[6%] min-w-[80px] max-w-[120px] z-20">
  <img
    src={bubbleImg.src}
    alt="Bubble"
    className="w-full h-auto animate-float opacity-100"
  />
</div>


        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
           <h1 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-blue-900 mb-6 leading-tight">
  Exciting Events for Every <br></br> Child!
</h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              At RICHFAM, we offer a variety of events designed to engage, inspire, and support children's development. From hands-on workshops to seasonal celebrations, each event is crafted to provide fun and learning opportunities for kids of all ages.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Tab Container */}
      <div className="w-full bg-white py-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-3 justify-center md:justify-start">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-8 py-3 rounded-full font-bold text-sm shadow-lg transition-colors ${
                activeTab === "upcoming"
                  ? "bg-yellow-500 text-gray-900"
                  : "bg-yellow-100 text-gray-800 hover:bg-yellow-200"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("workshops")}
              className={`px-8 py-3 rounded-full font-bold text-sm shadow-lg transition-colors ${
                activeTab === "workshops"
                  ? "bg-yellow-500 text-gray-900"
                  : "bg-yellow-100 text-gray-800 hover:bg-yellow-200"
              }`}
            >
              Workshops
            </button>
            <button
              onClick={() => setActiveTab("special")}
              className={`px-8 py-3 rounded-full font-bold text-sm shadow-lg transition-colors ${
                activeTab === "special"
                  ? "bg-yellow-500 text-gray-900"
                  : "bg-yellow-100 text-gray-800 hover:bg-yellow-200"
              }`}
            >
              Special Programs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsHero;
