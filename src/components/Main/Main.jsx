import "./Main.css";
import GoogleMap from "../GoogleMap/GoogleMap";
import ellipse from "../../assets/Ellipse.svg";

function Main() {
  return (
    <main>
      <section>About</section>
      <section className="section__map">
        <img className="section__map__image_top" src={ellipse}></img>
        <GoogleMap />
        <img className="section__map__image_bottom" src={ellipse}></img>
      </section>
      <section>Cards/Events</section>
    </main>
  );
}

export default Main;
