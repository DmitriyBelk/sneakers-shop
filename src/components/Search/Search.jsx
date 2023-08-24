import "./Search.sass";

function Search() {
  return (
    <div className="search">
      <h2>
        {/* {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кросовки"} */}
      </h2>
      <div className="search__input">
        <img src="/img/search.svg" alt="" />
        <input type="text" placeholder="Поиск..." />
      </div>
    </div>
  );
}

export default Search;
