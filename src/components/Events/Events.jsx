import "./Events.css";
import EventCard from "../EventCard/EventCard";
import { eventCardDatas } from "../../utils/constants";

function Events() {
  return (
    <section id="events" className="events">
      <h2 className="events__title">Events</h2>
      <ul className="events__list">
        {eventCardDatas.map((item, i) => {
          return <EventCard key={i} item={item} />;
        })}
      </ul>
    </section>
  );
}

export default Events;
