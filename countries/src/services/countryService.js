import axios from "axios";

const API_URL = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAllCountries = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export default { getAllCountries };
