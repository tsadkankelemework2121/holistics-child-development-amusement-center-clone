"use client"

import { useState } from "react"
import EventCard from "./EventCard"

import RegistrationModal from "./RegistrationModal"

const EventsTabs = () => {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState("")

  const handleBookNow = (eventTitle: string) => {
    setSelectedEvent(eventTitle)
    setIsModalOpen(true)
  }

  const upcomingEvents = [
    {
      id: 1,
      title: "Greetings from RICHFAM - Holistic Child Development Center!",
      date: "Saturday, December 16, 2024 (starting 10:00 AM)",
      location: "RICHFAM Center, Addis Ababa",
      description:
        "We are excited to invite you and your family to PLAYFUL MINDS, a vibrant celebration of fun and learning through play! Join us for a day filled with exciting activities and games that encourage cognitive, social, and physical development for children of all ages!",
      highlights: [
        "Interactive Games & Role Plays: Explore over 150 activities designed to boost creativity and problem-solving skills.",
        "Kids' Learning Zone: Fun educational stations focusing on language, math, and motor skills development.",
      ],
      image: "/placeholder.svg?height=200&width=300",
      bgColor: "from-teal-400 to-cyan-500",
      titleColor: "text-blue-900",
    },
    {
      id: 2,
      title: "You're Invited to RICHFAM's Family Adventure Day! 🎉",
      date: "Saturday, December 16, 2024 (starting 10:00 AM)",
      location: "RICHFAM Center, Addis Ababa, Addis Ababa",
      description:
        "Discover a day of excitement, bonding, and growth with your family at RICHFAM. Our workshop is designed to bring families closer through shared experiences that are as fun as they are meaningful!",
      highlights: [
        "What's Waiting for You:",
        "Interactive Family Challenges: Work together to solve puzzles, build structures, and compete in games that boost teamwork and communication.",
        "Creative Play Stations: Explore hands-on activities like arts and crafts, DIY workshops, and storytelling sessions that spark imagination for all ages.",
        "Parent-Child...",
      ],
      image: "/placeholder.svg?height=200&width=300",
      bgColor: "from-blue-600 to-purple-600",
      titleColor: "text-white",
    },
  ]

  const workshopEvents = [
    {
      id: 2,
      title: "You're Invited to RICHFAM's Family Adventure Day! 🎉",
      date: "Saturday, December 16, 2024 (starting 10:00 AM)",
      location: "RICHFAM Center, Addis Ababa, Addis Ababa",
      description:
        "Discover a day of excitement, bonding, and growth with your family at RICHFAM. Our workshop is designed to bring families closer through shared experiences that are as fun as they are meaningful!",
      highlights: [
        "What's Waiting for You:",
        "Interactive Family Challenges: Work together to solve puzzles, build structures, and compete in games that boost teamwork and communication.",
        "Creative Play Stations: Explore hands-on activities like arts and crafts, DIY workshops, and storytelling sessions that spark imagination for all ages.",
        "Parent-Child...",
      ],
      image: "/placeholder.svg?height=200&width=300",
      bgColor: "from-blue-600 to-purple-600",
      titleColor: "text-white",
    },
  ]

  const specialPrograms = [
    {
      id: 1,
      title: "Greetings from RICHFAM - Holistic Child Development Center!",
      date: "Saturday, December 16, 2024 (starting 10:00 AM)",
      location: "RICHFAM Center, Addis Ababa",
      description:
        "We are excited to invite you and your family to PLAYFUL MINDS, a vibrant celebration of fun and learning through play! Join us for a day filled with exciting activities and games that encourage cognitive, social, and physical development for children of all ages!",
      highlights: [
        "Interactive Games & Role Plays: Explore over 150 activities designed to boost creativity and problem-solving skills.",
        "Kids' Learning Zone: Fun educational stations focusing on language, math, and motor skills development.",
      ],
      image: "/placeholder.svg?height=200&width=300",
      bgColor: "from-teal-400 to-cyan-500",
      titleColor: "text-blue-900",
    },
  ]

  const getCurrentEvents = () => {
    switch (activeTab) {
      case "workshops":
        return workshopEvents
      case "special":
        return specialPrograms
      default:
        return upcomingEvents
    }
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === "upcoming" ? "bg-yellow-400 text-gray-900" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("workshops")}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === "workshops" ? "bg-yellow-400 text-gray-900" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Workshops
            </button>
            <button
              onClick={() => setActiveTab("special")}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === "special" ? "bg-yellow-400 text-gray-900" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Special Programs
            </button>
          </div>
        </div>

        {/* Event Cards */}
        <div className="space-y-6">
          {getCurrentEvents().map((event) => (
            <EventCard key={event.id} event={event} onBookNow={() => handleBookNow(event.title)} />
          ))}
        </div>
      </div>

      {/* Registration Modal */}
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} eventTitle={selectedEvent} />
    </section>
  )
}

export default EventsTabs
