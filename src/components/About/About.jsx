import "./About.css";
import aboutPhoto from "../../assets/about-photo.png";
import ellipse from "../../assets/Ellipse.svg";

function About() {
  return (
    <div className="about">
      <img
        src={ellipse}
        alt="ellipse circle"
        className="about__ellipse-image"
      />
      <h1 className="about__title">Vacations Aren't Just for Summer!</h1>
      <div className="about__wrapper">
        <p className="about__description">
          If you have the winter blues, we have the cure! Holiday Navigators
          Presents: East Coast Winter Roadtrip 2024! Our talented Data
          Scientists have created the optimal East coast winter roadtrip,
          starting in Atlanta, GA and ending in New York City, NY. Take a look
          below at the route we have created for you and the fun events along
          the way. Please click on the event to purchase a ticket. Bon Voyage!
        </p>
        <img
          src={aboutPhoto}
          alt="ski lift in the snowy mountains"
          className="about__image"
        />
      </div>
    </div>
  );
}

export default About;
