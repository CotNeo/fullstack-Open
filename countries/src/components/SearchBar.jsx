/* eslint-disable react/prop-types */

const SearchBar = ({ search, setSearch }) => {
    return (
      <input 
        type="text" 
        placeholder="Search for a country..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
      />
    );
  };
  
  export default SearchBar;
  