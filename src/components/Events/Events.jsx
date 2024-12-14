import "./Events.css";
import EventCard from "../EventCard/EventCard";

function Events() {
  return (
    <section className="events">
      <h2 className="events__title">Events</h2>
      <ul className="events__list">
        <EventCard>1</EventCard>
        <EventCard>2</EventCard>
        <EventCard>3</EventCard>
      </ul>
    </section>
  );
}

export default Events;
