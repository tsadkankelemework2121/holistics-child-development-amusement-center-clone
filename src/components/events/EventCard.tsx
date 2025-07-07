"use client"

import { Calendar, MapPin } from "lucide-react"

interface EventCardProps {
  event: {
    id: number
    title: string
    date: string
    location: string
    description: string
    highlights: string[]
    image: string
    bgColor: string
    titleColor: string
  }
  onBookNow: () => void
}

const EventCard = ({ event, onBookNow }: EventCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Left - Event Image/Illustration */}
        <div className="lg:col-span-1">
          <div
            className={`bg-gradient-to-br ${event.bgColor} h-full min-h-[300px] relative overflow-hidden flex items-center justify-center`}
          >
            {event.id === 1 ? (
              // PLAYFUL MINDS Illustration
              <div className="text-center relative">
                <div className="absolute top-4 left-4 text-white text-sm">We invite you with your children</div>
                <div className="text-4xl font-bold text-blue-900 mb-4">
                  PLAYFUL
                  <br />
                  MINDS
                </div>
                <div className="text-blue-900 text-sm mb-4">@RICHFAM</div>

                {/* Children illustrations */}
                <div className="flex justify-center space-x-4 mt-8">
                  <div className="w-12 h-16 bg-orange-400 rounded-t-full rounded-b-lg relative">
                    <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute top-4 left-3 w-6 h-1 bg-white rounded-full"></div>
                    <div className="absolute -top-2 left-1 w-10 h-6 bg-amber-800 rounded-full"></div>
                  </div>
                  <div className="w-12 h-16 bg-pink-400 rounded-t-full rounded-b-lg relative">
                    <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute top-4 left-3 w-6 h-1 bg-white rounded-full"></div>
                    <div className="absolute -top-2 left-1 w-10 h-6 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
            ) : (
              // FAMILY ADVENTURE DAY Illustration
              <div className="text-center relative">
                <div className="bg-white rounded-2xl p-6 relative">
                  <div className="text-2xl font-bold text-blue-900 mb-2">
                    FAMILY
                    <br />
                    ADVENTURE
                    <br />
                    DAY!
                  </div>
                  <div className="flex justify-center space-x-2 mb-4">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">LEARN</span>
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">BOND</span>
                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">PLAY</span>
                    <span className="bg-orange-600 text-white px-2 py-1 rounded text-xs">GROW</span>
                  </div>
                  <div className="text-xs text-blue-700">
                    Bring your family together through shared experiences that are as fun as they are meaningful!
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-400 rounded-full"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-400 transform rotate-45"></div>
              </div>
            )}
          </div>
        </div>

        {/* Right - Event Details */}
        <div className="lg:col-span-2 p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">{event.title}</h3>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-blue-600" />
              <span>{event.location}</span>
            </div>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>

          <div className="mb-6">
            <h4 className="font-bold text-gray-900 mb-3">What to Expect:</h4>
            <ul className="space-y-2">
              {event.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="font-bold text-gray-900 mr-2">•</span>
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end">
            <button
              onClick={onBookNow}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full transition-colors shadow-lg hover:shadow-xl"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard
