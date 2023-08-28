import { useContext } from "react";
import { AppContext } from "../../App";
import "./Header.sass";

function Header({ onOpenCart }) {
  const { cartItems } = useContext(AppContext);
  return (
    <header className="header">
      <div className="header__left">
        <img src="img/logo.svg" alt="logo" className="logo" />
        <div className="logo-text">
          <h3>The Best Sneakers</h3>
          <p>Магазин лучших кросовок</p>
        </div>
      </div>
      <ul className="header__right">
        <li onClick={onOpenCart}>
          <img src="img/cart.svg" alt="logo" />
          {/* Если в корзине есть товары, то выводим сумму покупок возле иконки корзины */}
          {cartItems.length > 0 && (
            <span>{cartItems.reduce((sum, item) => sum + item.price, 0)}</span>
          )}
        </li>
        <li>
          <img src="img/user.svg" alt="logo" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
