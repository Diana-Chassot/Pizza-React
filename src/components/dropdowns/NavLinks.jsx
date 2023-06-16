import { Link } from "react-router-dom";
import Footer from "../Footer";

function NavLinks({ onOpen,setOnOpen }) {
  return (
    <>
      {onOpen && (
        <div className="dropdown-wrapper" onClick={()=>setOnOpen(false)}>
          <div className="container--absolute" onClick={(event) => event.stopPropagation()}>
            <Link className="nav__link" to={"/"}>
              Home
            </Link>
            <Link className="nav__link" to={"menu"}>
              Menu
            </Link>
            <Link className="nav__link" to={"about"}>
              About
            </Link>
            <Link className="nav__link" to={"contact"}>
              Contact
            </Link>
            <Footer className={"footer footer--dark"} />
          </div>
        </div>
      )}
    </>
  );
}

export default NavLinks;
