import "./Cart.sass";
import CartCard from "./CartCard";

function Cart() {
  return (
    <div className="overlay hidden">
      <div className="drawer">
        <div className="drawer__title">
          <h2>Корзина</h2>
          <img src="/img/cart-remove.svg" alt="" />
        </div>
        <div className="drawer__card">

          <div className="cartIsEmpty">
            <img src="/img/cartIsEmpty.jpg" alt="" />
            <h3>Корзина пуста</h3>
            <p>Добавьте хотя бы одну пару кросовок, чтобы сделать заказ</p>
            <button className="btnCart" >Вернуться назад</button>
          </div>

          {/* <CartCard/> */}
          
          {/* <div className="drawer__footer">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b> руб.</b>
              </li>
            </ul>
            <button className="btnCart">Оформить заказ</button>
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default Cart;
