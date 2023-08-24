import "./Header.sass";

function Header({ onOpenCart }) {
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
        <li>
          <img onClick={onOpenCart} src="img/cart.svg" alt="logo" />
        </li>
        <li>
          <img src="img/user.svg" alt="logo" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
