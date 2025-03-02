import { useState, useEffect, useRef } from "react";
import countryService from "../services/countryService";

const useCountry = (name) => {
  const [country, setCountry] = useState(null);
  const [found, setFound] = useState(true);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!name || name.length < 3) {
      setCountry(null);
      setFound(false);
      return;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const allCountries = await countryService.getAllCountries();
        console.log("Fetched all countries:", allCountries.length);

        // **Daha esnek bir arama algoritması**
        const matchedCountry = allCountries.find((c) =>
          c.name.common.toLowerCase().includes(name.toLowerCase()) // İçerenleri bul
        );

        if (matchedCountry) {
          console.log("Country found:", matchedCountry.name.common);
          setCountry(matchedCountry);
          setFound(true);
        } else {
          console.log("Country not found.");
          setCountry(null);
          setFound(false);
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
        setFound(false);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeoutRef.current);
  }, [name]);

  return { country, found, loading };
};

export default useCountry;
