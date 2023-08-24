import "./CartCard.sass";

function CartCard({name, price, img, id, onRemove}) {
  return (
    <div className="cartCard">
      <img className="cartCard__img" src={img} alt="Sneakers" />
      <div className="cartCard__center">
        <p className="cartCard__center-text">{name}</p>
          <b>{price} руб.</b>
      </div>
      <img className="cartCard__btn" src="/img/cart-remove.svg" alt="" onClick={() => onRemove(id)} />
    </div>
  );
}

export default CartCard;
