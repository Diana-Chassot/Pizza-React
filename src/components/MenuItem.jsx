import Button from "./Button";
import { useState, useEffect } from "react";
import { updatePrice } from "../features/menuSlice";
import { formatCurrency } from "../helpers/currencyFormatter";
import { addToCart} from "../features/shoppingCartSlice";
import { useDispatch } from "react-redux";
import { onOpenCart } from "../features/shoppingCartSlice";
function MenuItem({ item }) {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    dispatch(updatePrice({ itemId: item.id, isChecked: !isChecked }));
  };
  const addTocart = () => {
    dispatch(addToCart(item));
    dispatch(onOpenCart());
  };
  return (
    <div className="menu__item" id={item.id}>
      <img src={item.img} alt={item.name} width="500px" height="500px" />
      {item.isNew && <div className="menu__item--new">New</div>}
      <div className="menu__item-body">
        <div>
          <h2>{item.name}</h2>
          <p>{item.descr}</p>
          <p>{formatCurrency(item.price)}</p>
        </div>
        <div>
          <input
            name={item.name}
            checked={isChecked}
            onChange={handleCheckboxChange}
            type="checkbox"
            id={item.name}
          />
          <label htmlFor={item.name}>Pizza XXL</label>
        </div>
      </div>
      <div className="menu__item-footer">
        <Button
          className="btn btn--light add-button"
          text="+ Add to Cart"
          onClick={addTocart}
        />
      </div>
    </div>
  );
}

export default MenuItem;
