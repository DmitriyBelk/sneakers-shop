
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
import Cart from "./components/Cart/Cart";

import "./App.sass";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Cart/>
      <div className="content">
        <Card/>
      </div>
    </div>
  );
}

export default App;
