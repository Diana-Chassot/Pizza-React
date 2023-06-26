import Logo from "./Logo";
import NavLinks from "./dropdowns/NavLinks";
import PhoneInfo from "./dropdowns/PhoneInfo";
import {
  faBars,
  faMobile,
  faBarsStaggered,
  faStore
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toogleCart } from "../features/shoppingCartSlice";
import { onCLoseCart } from "../features/shoppingCartSlice";

function Nav() {
  const shoppingCartItems = useSelector((state) => state.shoppingCart.items);
  const [onOpenNav, setOnOpenNav] = useState(false);
  const [onOpenPhone, setOnOpenPhone] = useState(false);
  const [onOpenBars, setOnOpenBars] = useState(false);
  const isCartOpen = useSelector((state) => state.shoppingCart.onOpen)
  const dispatch = useDispatch();

  const shoppingCartItemsLength = shoppingCartItems.length;
  const cartToogle = () => {
    dispatch(toogleCart());
    onOpenNav && setOnOpenNav(false);
    onOpenPhone && setOnOpenPhone(false);
  };
  const toogleNav = () => {
    setOnOpenNav(!onOpenNav);
    setOnOpenBars(!onOpenBars);
    onOpenPhone && setOnOpenPhone(false);
    isCartOpen && dispatch(onCLoseCart());
  };
  const tooglePhone = () => {
    setOnOpenPhone(!onOpenPhone);
    onOpenNav && setOnOpenNav(false);
    isCartOpen && dispatch(onCLoseCart());
  };
  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <div className="nav__left">
           <Logo/>
          </div>
          <div className="nav__right">
           <FontAwesomeIcon icon={onOpenBars ? faBars : faBarsStaggered} onClick={toogleNav} className="nav__icon"/>
            <FontAwesomeIcon icon={faMobile} onClick={tooglePhone} className="nav__icon"/>
            <div className="shoping-icon">
              <FontAwesomeIcon icon={faStore} onClick={cartToogle} className="nav__icon" />
              {shoppingCartItemsLength > 0 && (
                <p>{shoppingCartItemsLength}</p>
              )}
            </div>
          </div>
        </div>
      </nav>

      <NavLinks onOpen={onOpenNav} setOnOpen={setOnOpenNav} />
      <PhoneInfo onOpen={onOpenPhone} setOnOpen={setOnOpenPhone} />
    </>
  );
}

export default Nav;
