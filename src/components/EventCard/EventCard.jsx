import "./EventCard.css";

function EventCard({ item }) {
  return (
    <li className="event-card">
      <img
        // onClick={handleCardClicked}
        className="event-card__image"
        src={item.imgLink}
        alt={item.name}
      />
      <div className="event-card__text-container">
        <h3 className="event-card__title">{item.name}</h3>
        <p className="event-card__text">{item.description}</p>
      </div>
    </li>
  );
}

export default EventCard;
