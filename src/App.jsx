import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
import Cart from "./components/Cart/Cart";

import "./App.sass";

function App() {
  // Хук для открытия и закрытия корзины
  const [cartUsage, setCartUsage] = useState(false);
  // Хук для хранения массива кросовок с бэка
  const [items, setItems] = useState([]);
  // Хранение массива кросовок для корзины
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/sneakers")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  // Функция добавления объектов в массив содержимого корзины
  const onAddToCart = (item) => {
    !cartItems.includes(item) && setCartItems((prev) => [...cartItems, item]);
  };

  //Функция удаления объектов из массива содержимого корзины
  const onDeleteFromCart = (item) => {
    cartItems.includes(item) &&
      setCartItems(cartItems.filter((cartItem) => cartItem !== item));
  };

  return (
    <div className="App">
      <Header onOpenCart={() => setCartUsage(!cartUsage)} />
      <Search />
      {cartUsage && (
        <Cart
          cartItems={cartItems}
          onDelete={(item) => onDeleteFromCart(item)}
          onCloseCart={() => setCartUsage(!cartUsage)}
        />
      )}
      <div className="content">
        {items.map((item, i) => (
          <Card onPlus={() => onAddToCart(item)} key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
