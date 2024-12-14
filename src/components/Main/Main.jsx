import "./Main.css";
import About from "../About/About";
import GoogleMap from "../GoogleMap/GoogleMap";
import ellipse from "../../assets/Ellipse.svg";

function Main() {
  return (
    <main>
      <section>
        <About />
      </section>
      <section className="section__map">
        <img
          className="section__map__image_top"
          src={ellipse}
          alt="ellipse circle"
        ></img>
        <GoogleMap />
        <img
          className="section__map__image_bottom"
          src={ellipse}
          alt="ellipse circle"
        ></img>
      </section>
      <section>Cards/Events</section>
    </main>
  );
}

export default Main;
