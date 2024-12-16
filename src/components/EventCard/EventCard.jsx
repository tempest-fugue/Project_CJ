import "./EventCard.css";

function EventCard({ item }) {
  return (
    <li
      onClick={() => {
        window.open(item.siteLink, "_blank", "noopener,noreferrer");
      }}
      className="event-card"
    >
      <img className="event-card__image" src={item.imgLink} alt={item.name} />
      <div className="event-card__text-container">
        <h3 className="event-card__title">{item.name}</h3>
        <p className="event-card__text">{item.description}</p>
      </div>
    </li>
  );
}

export default EventCard;
