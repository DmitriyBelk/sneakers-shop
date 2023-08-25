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
  //Хук для данных поисковой строки
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    // fetch("https://64e763f1b0fd9648b78fe453.mockapi.io/items")
    //   .then((res) => res.json())
    //   .then((json) => setItems(json));
    axios
      .get("https://64e763f1b0fd9648b78fe453.mockapi.io/items")
      .then((res) => setItems(res.data));
    axios
      .get("https://64e763f1b0fd9648b78fe453.mockapi.io/cart")
      .then((res) => setCartItems(res.data));
  }, []);

  // Функция добавления объектов в массив содержимого корзины
  const onAddToCart = async (item) => {
    try {
      if (cartItems.find((obj) => obj.id === item.id)) {
        setCartItems((prev) => prev.filter((obj) => obj.id !== item.id));
        axios.delete(
          `https://64e763f1b0fd9648b78fe453.mockapi.io/cart/${item.id}`
        );
      } else {
        axios.post("https://64e763f1b0fd9648b78fe453.mockapi.io/cart", item);
        setCartItems((prev) => [...cartItems, item]);
      }
    } catch (error) {
      alert("Cервер затупил!");
    }
    // !cartItems.includes(item) && setCartItems((prev) => [...cartItems, item]);
    // axios.post("https://64e763f1b0fd9648b78fe453.mockapi.io/cart", item);
  };

  //Функция удаления объектов из массива содержимого корзины
  const onDeleteFromCart = (item) => {
    // cartItems.includes(item) &&
    //   setCartItems(cartItems.filter((cartItem) => cartItem !== item));
    setCartItems((prev) => prev.filter((prevItem) => prevItem.id !== item.id));
    axios.delete(`https://64e763f1b0fd9648b78fe453.mockapi.io/cart/${item.id}`);
  };

  // Функция записи данных в поисковую строку
  const onChangeSearchInput = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="App">
      <Header
        onOpenCart={() => setCartUsage(!cartUsage)}
        cartItems={cartItems}
      />
      <Search
        onChangeSearchInput={onChangeSearchInput}
        searchValue={searchValue}
      />
      {cartUsage && (
        <Cart
          cartItems={cartItems}
          onDelete={(item) => onDeleteFromCart(item)}
          onCloseCart={() => setCartUsage(!cartUsage)}
        />
      )}
      <div className="content">
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
          )
          .map((item, i) => (
            <Card onPlus={() => onAddToCart(item)} key={i} {...item} />
          ))}
      </div>
    </div>
  );
}

export default App;
