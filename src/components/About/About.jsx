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
          🏔️ Winter East Coast Road Trip: A Festive Journey Through Iconic East
          Coast Events <p></p>
          <span className="about__span">
            🧭 Embark on a magical winter journey across the Eastern United
            States, visiting four spectacular cities, each offering a unique and
            unforgettable event. From family-friendly activities to festive
            experiences, this trip captures the essence of the holiday season.
          </span>{" "}
          <p></p>
          <span className="about__span">
            🛣️ Route Optimization: The Best Route: Atlanta → Charlotte → New
            York City → Boston. In this project, we used advanced algorithms to
            find the most efficient route for our Winter East Coast Road Trip.
            By comparing two methods for solving the Traveling Salesman Problem
            (TSP), we determined the best route to optimize both time and
            distance. Total Distance Saved: 3200.93 km (67.76% reduction)
            Initial Route Distance: 4723.7 km Optimized Route Distance: 1522.77
            km{" "}
          </span>
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
