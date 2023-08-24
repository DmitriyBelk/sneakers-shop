import "./CartCard.sass";

function CartCard({ name, price, image, onDelete }) {
  return (
    <div className="cartCard">
      <img className="cartCard__img" src={image} alt="Sneakers" />
      <div className="cartCard__center">
        <p className="cartCard__center-text">{name}</p>
        <b>{price} руб.</b>
      </div>
      <img
        onClick={() => onDelete()}
        className="cartCard__btn"
        src="/img/cart-remove.svg"
        alt=""
      />
    </div>
  );
}

export default CartCard;
