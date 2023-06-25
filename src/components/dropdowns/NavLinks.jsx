import { Link } from "react-router-dom";
import Footer from "../Footer";

function NavLinks({ onOpen , setOnOpen }) {
  return (
    <>
      {onOpen && (
        <div className="dropdown-wrapper" onClick={()=>setOnOpen(false)}>
          <div className="container--absolute" onClick={(event) => event.stopPropagation()}>
            <Link className="nav__link" to={"/Pizza-React"} onClick={()=>setOnOpen(false)}>
              Home
            </Link>
            <Link className="nav__link" to={"/Pizza-React/menu"} onClick={()=>setOnOpen(false)}>
              Menu
            </Link>
            <Link className="nav__link" to={"/Pizza-React/about"} onClick={()=>setOnOpen(false)}>
              About
            </Link>
            <Link className="nav__link" to={"/Pizza-React/contact"} onClick={()=>setOnOpen(false)}>
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
