/* eslint-disable react/prop-types */

const CountryList = ({ countries, onSelect }) => {
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>
            {country.name.common} 
            <button onClick={() => onSelect(country)}>Show</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default CountryList;
  