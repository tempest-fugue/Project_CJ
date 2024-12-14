import "./EventCard.css";

function EventCard({ item }) {
  return (
    <li className="event-card">
      <img
        // onClick={handleCardClicked}
        className="item-card__image"
        src={item.imgLink}
        alt={item.name}
      />
      <div className="event-card__text-container">
        <h2 className="event-card__title">{item.name}</h2>
        <p className="event-card__text">{item.description}</p>
      </div>
    </li>
  );
}

export default EventCard;
