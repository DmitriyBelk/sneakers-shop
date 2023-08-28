import { useContext } from "react";
import { AppContext } from "../../App";
import "./Search.sass";

function Search() {
  const { searchValue, onChangeSearchInput } = useContext(AppContext);
  return (
    <div className="search">
      <h2>{searchValue ? "Поиск по запросу:" : "Все кросовки"}</h2>
      <div className="search__input">
        <img src="/img/search.svg" alt="" />
        <input
          onChange={(e) => onChangeSearchInput(e)}
          value={searchValue}
          type="text"
          placeholder="Поиск..."
        />
      </div>
    </div>
  );
}

export default Search;
