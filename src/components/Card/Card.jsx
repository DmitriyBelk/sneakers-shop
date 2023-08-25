import { useState } from "react";
import "./Card.sass";

function Card({ image, name, price, onPlus }) {
  //Хук для сены кнопки карточки (добавлено/не добавлено в корзину)
  const [isAdded, setIsAdded] = useState(false);
  // Хук для семну иконки "избранного"
  const [isFavourite, setIsFavourite] = useState(false);

  // Функция нажатия плюсика карточки, также передает объект в app.jsx для функции добавления карточки в корзину
  const addToCart = () => {
    setIsAdded(!isAdded);
    onPlus();
  };

  return (
    <div className="card">
      <img
        onClick={() => setIsFavourite(!isFavourite)}
        className="like"
        src={isFavourite ? "/img/heart-on.svg" : "/img/heart-off.svg"}
        alt=""
      />
      <img className="card__img" src={image} alt="Sneakers" />
      <p className="card__text">{name}</p>
      <div className="card__bottom">
        <div>
          <span>Цена: </span>
          <b>{price} руб.</b>
        </div>
        <img
          onClick={addToCart}
          src={isAdded ? "/img/++.svg" : "/img/+.svg"}
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
