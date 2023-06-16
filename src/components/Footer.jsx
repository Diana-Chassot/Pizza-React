import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer({ className }) {
  return (
    <div className={className}>
      <div className="social-media">
        <a href="https://www.instagram.com/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
