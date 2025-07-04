"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Games", path: "/games" },
    { name: "Events", path: "/events" },
    { name: "Membership", path: "/memberships" },
    { name: "Blog", path: "/blogs" },
  ]

  return (
    <nav className="relative z-10 bg-blue-900 bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Brand */}
          <Link to="/" className="text-white">
            <h1 className="text-2xl font-bold">RICHFAM</h1>
            <p className="text-sm opacity-90 leading-tight">
              Integrated Children Holistic Development,
              <br />
              Lodge & Family Amusement Center.
            </p>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`transition-colors ${
                    isActive
                      ? "text-yellow-300 font-semibold"
                      : "text-white hover:text-yellow-300"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav menu */}
        {isOpen && (
          <nav className="md:hidden mt-4 bg-blue-900 bg-opacity-95 rounded-md px-4 py-3 space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block transition-colors ${
                    isActive
                      ? "text-yellow-300 font-semibold"
                      : "text-white hover:text-yellow-300"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        )}
      </div>
    </nav>
  )
}

export default Navbar
