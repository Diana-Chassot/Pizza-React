import { useSelector } from "react-redux";

import MenuItem from "../components/MenuItem";

function Menu() {
  const menuList = useSelector((state) => state.menu.items);

  return (
    <section className="menu">
      <div className="menu__title">
        <h1>Our menu</h1>
        <p>
          Our pizza menu offers a mouthwatering selection of delicious and
          freshly made pizzas that are sure to satisfy any pizza lover's
          cravings.
        </p>
      </div>
      <div className="menu__list">
        {menuList.map((item, key) => {
          return <MenuItem item={item} key={key} />;
        })}
      </div>
    </section>
  );
}

export default Menu;
