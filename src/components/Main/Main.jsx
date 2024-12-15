import "./Main.css";
import About from "../About/About";
import GoogleMap from "../GoogleMap/GoogleMap";
import ellipse from "../../assets/Ellipse.svg";
import Events from "../Events/Events";

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
      <Events></Events>
    </main>
  );
}

export default Main;
