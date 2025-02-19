/* eslint-disable react/prop-types */
import Weather from "./Weather";

const CountryDetails = ({ country }) => (
  <div className="country-details">
    <h2>{country.name.common}</h2>
    <p><strong>Capital:</strong> {country.capital}</p>
    <p><strong>Area:</strong> {country.area} km²</p>
    <h3>Languages:</h3>
    <ul>
      {Object.values(country.languages).map((lang, index) => (
        <li key={index}>{lang}</li>
      ))}
    </ul>
    <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
    <Weather capital={country.capital} />
  </div>
);

export default CountryDetails;

