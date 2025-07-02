import EventsHero from "../components/events/Hero"
import EventsUpcoming from "../components/events/Upcoming"
import EventsCalendar from "../components/events/Calendar"
import EventsPast from "../components/events/Past"

const EventsPage = () => {
  return (
    <div>
      <EventsHero />
      <EventsUpcoming />
      <EventsCalendar />
      <EventsPast />
    </div>
  )
}

export default EventsPage
