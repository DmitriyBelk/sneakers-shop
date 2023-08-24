import "./Card.sass";

function Card() {
  return (
    <div className="card">
      <img className="card__img" src="/img/sneakers/1.jpg" alt="Sneakers" />
      <p className="card__text">fff</p>
      <div className="card__bottom">
        <div>
          <span>Цена: </span>
          <b>222 руб.</b>
        </div>
        <img src="/img/+.svg" alt="" />
      </div>
    </div>
  );
}

export default Card;
