import "./Footer.css";
import gitHubIcon from "../../assets/github.svg";
import linkedInIcon from "../../assets/linkedin.svg";

function Footer() {
  return (
    <div id="contact" className="footer">
      <div className="footer__container">
        <div className="footer__card">
          <p className="footer__name">Samantha Ensey</p>
          <p className="footer__career-title">
            <span className="footer__career-title-block">Software</span>
            Engineer
          </p>

          <a
            href="https://github.com/sensey0702"
            className="footer__social-link"
            target="_blank"
          >
            <img
              src={gitHubIcon}
              alt="Github Logo"
              className="footer__github-icon"
            />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/samantha-ensey-1a7a95a4/"
            className="footer__social-link"
            target="_blank"
          >
            <img
              src={linkedInIcon}
              alt="Linkedin Logo"
              className="footer__linkedin-icon"
            />
            Linkedin
          </a>
        </div>

        <div className="footer__card">
          <p className="footer__name">Sam Branham</p>
          <p className="footer__career-title">
            <span className="footer__career-title-block">Software</span>
            Engineer
          </p>

          <a
            href="https://github.com/00H00W"
            className="footer__social-link"
            target="_blank"
          >
            <img
              src={gitHubIcon}
              alt="Github Logo"
              className="footer__github-icon"
            />
            Github
          </a>
          <a
            href="https://github.com/00H00W"
            className="footer__social-link"
            target="_blank"
          >
            <img
              src={linkedInIcon}
              alt="Linkedin Logo"
              className="footer__linkedin-icon"
            />
            Linkedin
          </a>
        </div>

        <div className="footer__card">
          <p className="footer__name">David Bedoya</p>
          <p className="footer__career-title">
            <span className="footer__career-title-block">Software</span>
            Engineer
          </p>

          <a
            href="https://github.com/Daveyrax"
            className="footer__social-link"
            target="_blank"
          >
            <img
              src={gitHubIcon}
              alt="Github Logo"
              className="footer__github-icon"
            />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/dmbedoya/"
            className="footer__social-link"
            target="_blank"
          >
            <img
              src={linkedInIcon}
              alt="Linkedin Logo"
              className="footer__linkedin-icon"
            />
            Linkedin
          </a>
        </div>

        <div className="footer__card">
          <p className="footer__name">Albana Skeja</p>
          <p className="footer__career-title">
            <span className="footer__career-title-block">Data</span>
            Scientist
          </p>

          <a
            href="https://github.com/Alba-Sk"
            className="footer__social-link"
            target="_blank"
          >
            <img
              src={gitHubIcon}
              alt="Github Logo"
              className="footer__github-icon"
            />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/albana-skeja-24as/"
            className="footer__social-link"
            target="_blank"
          >
            <img
              src={linkedInIcon}
              alt="Linkedin Logo"
              className="footer__linkedin-icon"
            />
            Linkedin
          </a>
        </div>

        <div className="footer__card">
          <p className="footer__name">Eric MacDougall</p>
          <p className="footer__career-title">
            <span className="footer__career-title-block">Data</span>
            Scientist
          </p>

          <a href="" className="footer__social-link" target="_blank">
            <img
              src={gitHubIcon}
              alt="Github Logo"
              className="footer__github-icon"
            />
            Github
          </a>
          <a href="" className="footer__social-link" target="_blank">
            <img
              src={linkedInIcon}
              alt="Linkedin Logo"
              className="footer__linkedin-icon"
            />
            Linkedin
          </a>
        </div>
      </div>
      <p className="footer__copyright">Copyright 2024 © - December Code Jam</p>
    </div>
  );
}

export default Footer;
