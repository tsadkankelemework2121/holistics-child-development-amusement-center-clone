const MembershipsFacilities = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 1. Safe and Family-Friendly Facilities */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400 via-teal-400 to-blue-500 rounded-3xl p-8 relative overflow-hidden h-80">
                {/* "Safe and Family Friendly Spaces" Text */}
                <div className="absolute top-6 left-6 text-blue-900 text-2xl font-bold leading-tight max-w-48">
                  Safe and Family Friendly Spaces
                </div>

                {/* Sun */}
                <div className="absolute top-8 right-8 w-12 h-12 bg-yellow-400 rounded-full relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-yellow-400"></div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-yellow-400"></div>
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-1 bg-yellow-400"></div>
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-1 bg-yellow-400"></div>
                </div>

                {/* White Bird */}
                <div className="absolute top-16 right-20 text-white text-2xl">🕊️</div>

                {/* Building Structure */}
                <div className="absolute bottom-16 left-8 w-32 h-16 bg-gray-200 rounded-t-lg relative">
                  <div className="w-full h-3 bg-red-500 rounded-t-lg"></div>
                  <div className="absolute top-4 left-2 grid grid-cols-4 gap-1">
                    <div className="w-3 h-2 bg-blue-400 rounded-sm"></div>
                    <div className="w-3 h-2 bg-blue-400 rounded-sm"></div>
                    <div className="w-3 h-2 bg-blue-400 rounded-sm"></div>
                    <div className="w-3 h-2 bg-blue-400 rounded-sm"></div>
                  </div>
                  {/* Colorful squares on building */}
                  <div className="absolute bottom-2 left-1 grid grid-cols-6 gap-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-sm"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-sm"></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-sm"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-sm"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-sm"></div>
                  </div>
                </div>

                {/* Family Figures */}
                <div className="absolute bottom-8 right-16">
                  {/* Father */}
                  <div className="absolute bottom-0 left-0 w-10 h-16 bg-orange-500 rounded-t-full rounded-b-lg relative">
                    <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute top-5 left-3 w-4 h-1 bg-white rounded-full"></div>
                  </div>

                  {/* Mother */}
                  <div className="absolute bottom-0 left-8 w-10 h-16 bg-yellow-400 rounded-t-full rounded-b-lg relative">
                    <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute top-5 left-3 w-4 h-1 bg-white rounded-full"></div>
                  </div>

                  {/* Child 1 */}
                  <div className="absolute bottom-0 left-16 w-6 h-10 bg-red-400 rounded-t-full rounded-b-lg relative">
                    <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
                    <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
                    <div className="absolute top-3 left-2 w-2 h-1 bg-white rounded-full"></div>
                  </div>

                  {/* Child 2 */}
                  <div className="absolute bottom-0 left-20 w-6 h-10 bg-pink-400 rounded-t-full rounded-b-lg relative">
                    <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
                    <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
                    <div className="absolute top-3 left-2 w-2 h-1 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Green Grass/Ground */}
                <div className="absolute bottom-0 left-0 w-full h-8 bg-green-500 rounded-b-3xl"></div>

                {/* Palm leaves decoration */}
                <div className="absolute bottom-12 left-2 w-8 h-12 bg-green-600 rounded-full transform rotate-45"></div>
                <div className="absolute bottom-16 left-4 w-6 h-8 bg-green-600 rounded-full transform -rotate-12"></div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Safe and Family-Friendly Facilities</h2>
              <p className="text-lg text-gray-700 mb-8">
                As a member, enjoy access to secure facilities designed for families:
              </p>
              <ul className="space-y-6 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-bold text-gray-900">Safety:</span> Trained staff, CCTV monitoring, and
                    child-safe zones ensure your peace of mind.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-bold text-gray-900">Convenient Parking:</span> Ample, secure parking spaces
                    close to the facility.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-bold text-gray-900">Child-Friendly Amenities:</span> On-site cleaning and
                    changing rooms for your little ones' comfort.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-bold text-gray-900">Emergency Preparedness:</span> First aid services and
                    rapid response protocols in place.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2. Gaming and Play Areas */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Gaming and Play Areas</h2>
              <p className="text-lg text-gray-700 mb-6">
                Members enjoy unlimited access to a variety of interactive play zones and gaming experiences,
                categorized by age group and developmental focus.
              </p>
              <p className="text-lg text-gray-700">
                From role-playing activities to physical challenges, every visit will be an adventure.
              </p>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl p-8 relative overflow-hidden h-80">
                {/* "GAMING AND PLAY AREAS" Text */}
                <div className="absolute top-8 right-8 text-blue-900 text-xl font-bold leading-tight max-w-32">
                  GAMING AND PLAY AREAS
                </div>

                {/* Sun with face */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-yellow-400 rounded-full relative">
                  <div className="absolute top-3 left-3 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-3 right-3 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-black rounded-full"></div>
                  {/* Sun rays */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-yellow-400"></div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-yellow-400"></div>
                  <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-1 bg-yellow-400"></div>
                  <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-1 bg-yellow-400"></div>
                </div>

                {/* Wooden House */}
                <div className="absolute bottom-12 left-8 w-24 h-20 bg-amber-700 rounded relative">
                  <div className="w-full h-8 bg-red-600 rounded-t-lg"></div>
                  <div className="absolute top-10 left-2 grid grid-cols-2 gap-2">
                    <div className="w-4 h-3 bg-yellow-400 rounded"></div>
                    <div className="w-4 h-3 bg-yellow-400 rounded"></div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-amber-800"></div>
                </div>

                {/* Tree */}
                <div className="absolute bottom-8 right-8">
                  <div className="w-20 h-20 bg-green-600 rounded-full"></div>
                  <div className="w-4 h-12 bg-amber-800 mx-auto"></div>
                </div>

                {/* Children figures playing */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <div className="w-6 h-8 bg-red-400 rounded-t-full rounded-b-lg"></div>
                  <div className="w-6 h-8 bg-orange-400 rounded-t-full rounded-b-lg"></div>
                  <div className="w-6 h-8 bg-purple-400 rounded-t-full rounded-b-lg"></div>
                  <div className="w-6 h-8 bg-pink-400 rounded-t-full rounded-b-lg"></div>
                  <div className="w-6 h-8 bg-yellow-400 rounded-t-full rounded-b-lg"></div>
                </div>

                {/* Clouds */}
                <div className="absolute top-16 right-16 w-8 h-4 bg-white rounded-full opacity-80"></div>
                <div className="absolute top-20 right-20 w-6 h-3 bg-white rounded-full opacity-80"></div>

                {/* Green Ground */}
                <div className="absolute bottom-0 left-0 w-full h-8 bg-green-500 rounded-b-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Learning and Development Programs */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-800 to-yellow-500 rounded-3xl p-8 relative overflow-hidden h-80">
                {/* "LEARNING" Text */}
                <div className="absolute top-8 left-8 text-white text-4xl font-bold">LEARNING</div>

                {/* Educational Workshops Badge */}
                <div className="absolute bottom-8 right-8 bg-yellow-400 rounded-2xl p-4">
                  <div className="text-blue-900 text-lg font-bold">EDUCATIONAL</div>
                  <div className="text-blue-900 text-lg font-bold">WORKSHOPS</div>
                  <div className="text-xs text-blue-700 mt-2">@RICHFAM</div>
                </div>

                {/* Character with book (top right) */}
                <div className="absolute top-16 right-12">
                  <div className="w-12 h-16 bg-pink-300 rounded-t-full rounded-b-lg relative">
                    <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute top-4 left-3 w-6 h-1 bg-black rounded-full"></div>
                    <div className="absolute -top-2 left-1 w-10 h-6 bg-black rounded-full"></div>
                    {/* Book */}
                    <div className="absolute -right-4 top-6 w-6 h-4 bg-teal-400 rounded"></div>
                  </div>
                </div>

                {/* Character reading (bottom left) */}
                <div className="absolute bottom-16 left-12">
                  <div className="w-12 h-16 bg-blue-300 rounded-t-full rounded-b-lg relative">
                    <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute top-4 left-3 w-6 h-1 bg-black rounded-full"></div>
                    <div className="absolute -top-2 left-1 w-10 h-6 bg-purple-600 rounded-full"></div>
                    {/* Book in hands */}
                    <div className="absolute bottom-2 left-2 w-8 h-3 bg-white rounded"></div>
                  </div>
                </div>

                {/* Decorative stars */}
                <div className="absolute top-4 right-4 text-white text-xl">⭐</div>
                <div className="absolute bottom-4 left-4 text-white text-lg">✨</div>
                <div className="absolute top-1/2 left-1/2 text-white text-sm">⭐</div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Learning and Development Programs</h2>
              <p className="text-lg text-gray-700 mb-8">
                Membership includes access to educational workshops, parenting tips, and developmental activities
                tailored for kids and families.
              </p>
              <ul className="space-y-6 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-3 mt-1">•</span>
                  <div>
                    Participate in expert-led sessions on{" "}
                    <span className="font-bold text-gray-900">cognitive, social, and physical growth.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-3 mt-1">•</span>
                  <div>Exclusive invites to members-only events and activities.</div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-3 mt-1">•</span>
                  <div>Discounts on additional courses and private sessions.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4. Comprehensive Family Services */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Comprehensive Family Services</h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Dedicated Childcare Spaces:</h3>
                  <p>
                    Safe, clean areas equipped with trained staff to ensure your child's well-being while you relax or
                    engage in activities.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Parenting Workshops:</h3>
                  <p>Gain practical skills and insights through sessions with child development experts.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Family Counseling Access:</h3>
                  <p>Supportive guidance for navigating parenting challenges or enhancing family dynamics.</p>
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl p-8 relative overflow-hidden h-80">
                {/* "COMPREHENSIVE FAMILY SERVICES" Text */}
                <div className="absolute top-8 left-8 text-yellow-400 text-2xl font-bold leading-tight max-w-48">
                  COMPREHENSIVE FAMILY SERVICES
                </div>

                {/* Family illustration */}
                <div className="absolute bottom-8 right-8 flex items-end space-x-2">
                  {/* Mother */}
                  <div className="w-12 h-20 bg-yellow-400 rounded-t-full rounded-b-lg relative">
                    <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute top-4 left-3 w-6 h-1 bg-black rounded-full"></div>
                    <div className="absolute -top-2 left-1 w-10 h-6 bg-yellow-600 rounded-full"></div>
                  </div>

                  {/* Child */}
                  <div className="w-8 h-12 bg-pink-400 rounded-t-full rounded-b-lg relative">
                    <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
                    <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full"></div>
                    <div className="absolute top-2 left-2 w-4 h-1 bg-black rounded-full"></div>
                  </div>

                  {/* Father */}
                  <div className="w-12 h-20 bg-orange-500 rounded-t-full rounded-b-lg relative">
                    <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute top-4 left-3 w-6 h-1 bg-black rounded-full"></div>
                    <div className="absolute -top-2 left-1 w-10 h-6 bg-gray-800 rounded-full"></div>
                  </div>
                </div>

                {/* Hearts */}
                <div className="absolute top-12 right-12 text-pink-400 text-lg">💖</div>
                <div className="absolute top-20 right-20 text-pink-400 text-sm">💖</div>

                {/* Decorative yellow blob */}
                <div className="absolute top-4 right-4 w-16 h-12 bg-yellow-400 rounded-full opacity-80"></div>

                {/* Decorative swirl */}
                <div className="absolute bottom-16 left-16 w-8 h-8 border-2 border-yellow-400 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MembershipsFacilities
