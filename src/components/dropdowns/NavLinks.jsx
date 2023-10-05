import { Link } from "react-router-dom";
import Footer from "../Footer";

function NavLinks({ onOpen , setOnOpen }) {
  return (
    <>
      {onOpen && (
        <div className="dropdown-wrapper" onClick={()=>setOnOpen(false)}>
          <div className="container--absolute" onClick={(event) => event.stopPropagation()}>
            <div className="nav-links">
            <Link className="nav__link" to={"/"} onClick={()=>setOnOpen(false)}>
              Home
            </Link>
            <Link className="nav__link" to={"/menu"} onClick={()=>setOnOpen(false)}>
              Menu
            </Link>
            <Link className="nav__link" to={"/about"} onClick={()=>setOnOpen(false)}>
              About
            </Link>
            <Link className="nav__link" to={"/contact"} onClick={()=>setOnOpen(false)}>
              Contact
            </Link>
            </div>
            <Footer className={"footer footer--dark"} />
          </div>
        </div>
      )}
    </>
  );
}

export default NavLinks;
