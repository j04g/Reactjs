const SearchBar = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');
  
    const handleSearchClick = () => {
      onSearch(searchValue);
    };
  
    return (
      <div className="search-bar-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar productos..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="search-button" onClick={handleSearchClick}>
          Buscar
        </button>
      </div>
    );
  }
  
  export default SearchBar;