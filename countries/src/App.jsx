import { useState, useEffect } from "react";
import countryService from "./services/countryService";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    countryService.getAllCountries().then(setCountries);
  }, []);

  if (selectedCountry) {
    return (
      <div>
        <button className="back-button" onClick={() => setSelectedCountry(null)}>Back</button>
        <CountryDetails country={selectedCountry} />
      </div>
    );
  }

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ color: "#007BFF", fontSize: "28px", marginBottom: "20px" }}>🌍 Country Finder</h1>
      <SearchBar search={search} setSearch={setSearch} />

      {filteredCountries.length > 10 ? (
        <p>Too many matches, please specify your search.</p>
      ) : filteredCountries.length > 1 ? (
        <CountryList countries={filteredCountries} onSelect={setSelectedCountry} />
      ) : filteredCountries.length === 1 ? (
        <CountryDetails country={filteredCountries[0]} />
      ) : (
        <p>No matches found.</p>
      )}
    </div>
  );
}

export default App;
