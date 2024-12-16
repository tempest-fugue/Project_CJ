import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav className="nav">
        <ul className="nav__links">
          <li className="nav__link">
            <a href="#about" className="nav__button">
              About
            </a>
          </li>
          <li className="nav__link">
            <a href="#route" className="nav__button">
              Route
            </a>
          </li>
          <li className="nav__link">
            <a href="#map" className="nav__button">
              Map
            </a>
          </li>
          <li className="nav__link">
            <a href="#event" className="nav__button">
              Events
            </a>
          </li>
          <li className="nav__link">
            <a href="#contact" className="nav__button">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <h1 className="header__title">Holiday Navigator</h1>
    </div>
  );
}

export default Header;
