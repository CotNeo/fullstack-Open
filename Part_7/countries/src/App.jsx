import { useState } from "react";
import useCountry from "./hooks/useCountry";
import SearchBar from "./components/SearchBar";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { country, found, loading } = useCountry(search);

  console.log("Search:", search);
  console.log("Country Data:", country);
  console.log("Found:", found);
  console.log("Loading:", loading);

  return (
    <div>
      <h1 style={{ color: "#007BFF", fontSize: "28px", marginBottom: "20px" }}>
        🌍 Country Finder
      </h1>
      <SearchBar search={search} setSearch={setSearch} />

      {loading && <p>Loading...</p>}

      {!loading && search && found && country ? (
        <CountryDetails country={country} />
      ) : !found ? (
        <p>No matches found.</p>
      ) : null}

      {selectedCountry && (
        <div>
          <button className="back-button" onClick={() => setSelectedCountry(null)}>
            Back
          </button>
          <CountryDetails country={selectedCountry} />
        </div>
      )}
    </div>
  );
}

export default App;
