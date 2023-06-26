import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCrack,faRightLeft,faTruckFast } from "@fortawesome/free-solid-svg-icons";

import { useEffect } from "react";
import { calculateTotal } from "../../features/shoppingCartSlice";
import { formatCurrency } from "../../helpers/currencyFormatter";
import { removeFromCart } from "../../features/shoppingCartSlice";
import { onCLoseCart } from "../../features/shoppingCartSlice";
import { openForm } from "../../features/formSlice";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

function Cart() {
  const dispatch = useDispatch();
  const shoppingCartItems = useSelector((state) => state.shoppingCart.items);
  const totalPrice = useSelector((state) => state.shoppingCart.total);
  const shoppingCartItemsLength = shoppingCartItems.length;
  const isOnOpen = useSelector((state) => state.shoppingCart.onOpen);
  const navigate = useNavigate();
  const hundleOrderNowBtn = () => {
    if (window.location.pathname !== "/menu") {
      navigate("/menu");
    }
    dispatch(onCLoseCart());
  };
  const hundleContinueBtn = () => {
    dispatch(openForm());
    dispatch(onCLoseCart());
  };

  const messageEmptyCart = (
    <div className="message-empty">
      <FontAwesomeIcon icon={faHeartCrack} />
      <p>No items have been added</p>
      <Button
        className="btn btn--dark"
        text="Order now"
        onClick={hundleOrderNowBtn}
      />
    </div>
  );

  const CartItem = ({ item, index }) => (
    <div className="cart__item">
      <div className="cart__item-header">
        <img src={item.img} alt={item.name} width="100px" height="100px" />
        <h2>{item.name}</h2>
      </div>
      <div className="cart__item-cart__body">
        {item.price === item.initialPrice ? (
          <span>{formatCurrency(item.price)}</span>
        ) : (
          <>
            <p>{formatCurrency(item.price)}</p>
            <p>"Pizza XXL"</p>
          </>
        )}
      </div>
      <div className="cart__item-cart__footer">
        <Button
          className="btn--close"
          text={<span>&times;</span>}
          onClick={() => dispatch(removeFromCart(index))}
        />
      </div>
    </div>
  );

  useEffect(() => {
    dispatch(calculateTotal());
  }, [shoppingCartItems]);

  return (
    <>
      {isOnOpen && (
        <div
          className="dropdown-wrapper dropdown-wrapper--fixed"
          onClick={() => dispatch(onCLoseCart())}
        >
          <div className="cart" onClick={(event) => event.stopPropagation()}>
            {shoppingCartItemsLength === 0 && messageEmptyCart}
            {shoppingCartItemsLength > 0 && (
              <>
                {shoppingCartItems.map((item, index) => (
                  <CartItem key={index} item={item} index={index} />
                ))}
                <div className="cart__footer">
                  <p>Total: {formatCurrency(totalPrice)}</p>
                  <div className="cart__footer-btns">
                    <Button
                      className="btn btn--dark"
                      text="Close"
                      onClick={() => dispatch(onCLoseCart())}
                    />
                    <Button
                      className="btn btn--dark"
                      text="Continue"
                      onClick={hundleContinueBtn}
                    />

                  </div>
  
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
