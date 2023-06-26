import { Link } from "react-router-dom";
import LogoSrc from "../assets/img/piza-logo.png";
function Logo() {
  return (
    <div className="logo-container">
      <Link to={"/"}>
        <img src={LogoSrc} alt="logo" width="50px" />
        <h2>Italian Pizza</h2>
      </Link>
    </div>
  );
}

export default Logo;
