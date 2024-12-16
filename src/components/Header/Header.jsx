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
            <a href="#roadmap" className="nav__button">
              Roadmap
            </a>
          </li>
          <li className="nav__link">
            <a href="#events" className="nav__button">
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
      <h1 className="header__title">
        Team Holiday Navigators: Winter East Coast Road Trip 2024
      </h1>
    </div>
  );
}

export default Header;
