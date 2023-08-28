import { createContext, useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
import Cart from "./components/Cart/Cart";
import Skeleton from "./components/Card/Skeleton";

import "./App.sass";

export const AppContext = createContext({});

function App() {
  // Хук для открытия и закрытия корзины
  const [cartUsage, setCartUsage] = useState(false);
  // Хук для хранения массива кросовок с бэка
  const [items, setItems] = useState([]);
  // Хранение массива кросовок для корзины
  const [cartItems, setCartItems] = useState([]);
  //Хук для данных поисковой строки
  const [searchValue, setSearchValue] = useState("");
  // флаг загрузились данные с сервера или нет
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Запрос на сервер через fetch
    // fetch("https://64e763f1b0fd9648b78fe453.mockapi.io/items")
    //   .then((res) => res.json())
    //   .then((json) => setItems(json));

    // Пример запроса на сервер через axios
    // axios
    //   .get("https://64e763f1b0fd9648b78fe453.mockapi.io/items")
    //   .then((res) => setItems(res.data));
    // axios
    //   .get("https://64e763f1b0fd9648b78fe453.mockapi.io/cart")
    //   .then((res) => setCartItems(res.data));

    //Создаем внутри useEffect асинхронную функцию (сначала дожидается загрузки всех данных с сервера, а потом передает в хуки)
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://64e763f1b0fd9648b78fe453.mockapi.io/cart"
      );
      const itemsResponse = await axios.get(
        "https://64e763f1b0fd9648b78fe453.mockapi.io/items"
      );
      setCartItems(cartResponse.data);
      setItems(itemsResponse.data);
      setIsLoading(!isLoading);
    }
    fetchData();
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
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => obj.id == id)
  }

  return (
    <AppContext.Provider value={{cartItems, items, searchValue, onChangeSearchInput, isItemAdded}}>
      <div className="App">
        <Header
          onOpenCart={() => setCartUsage(!cartUsage)}
        />
        <Search/>
        {cartUsage && (
          <Cart
            onDelete={(item) => onDeleteFromCart(item)}
            onCloseCart={() => setCartUsage(!cartUsage)}
          />
        )}
        <div className="content">
          {/* Если загрузка с сервера не завершена, то отображаем карточки-пустышки, иначе отображаем карточки товара */}
          {isLoading
            ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
            : items
                // Фильтрация по поиску
                .filter((item) =>
                  item.name
                    .toLowerCase()
                    .includes(searchValue.toLocaleLowerCase())
                )
                // Выводим карточки на экран
                .map((item, i) => (
                  <Card
                    onPlus={() => onAddToCart(item)}
                    key={i}
                    {...item}
                    // added={cartItems.some((obj) => obj.name === item.name)}
                  />
                ))}
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
