import axios from "axios";

const API_URL = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAllCountries = async () => {
  try {
    console.log("Fetching all countries...");
    const response = await axios.get(API_URL);
    console.log("Countries fetched successfully:", response.data.length);
    return response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

export default { getAllCountries };
