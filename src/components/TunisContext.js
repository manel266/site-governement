import React, { useState, useEffect, createContext } from "react";
import { TunisData } from "../data";
export const TunisContext = createContext();
const TunisContextProvider = ({ children }) => {
  const [tunis, setTunis] = useState(TunisData);
  const [country, setCountry] = useState("Location(any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property(any)");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const allcountries = tunis.map((tunis) => {
      return tunis.country;
    });

    const uniqueCountries = ["location(any)", ...new Set(allcountries)];
    setCountries(uniqueCountries);
  }, []);
  useEffect(() => {
    const allProperties = tunis.map((tunis) => {
      return tunis.type;
    });

    const uniqueProperties = ["location(any)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    const isDefault = (str) => {
      return str.split("").includes("(any)");
    };

    const newTunis = TunisData.filter((tunis) => {
      let all = country;

      if (tunis.country === country && property === "Property(any)") {
        setLoading(true);

        return country;
      }

      if (tunis.type === property && country === "location(any)") {
        setLoading(true);
        return property;
      }
      if (tunis.type === property && tunis.country === country) {
        setLoading(true);
        return country;
      }
      if (property === "Property(any)" && country === "location(any)") {
        setLoading(true);

        return country;
      }
      setTimeout(() => {
        return (
          newTunis.length < 1 ? setTunis([]) : setTunis(newTunis),
          setLoading(false)
        );
      }, 1300);
    });
    console.log(newTunis);
  };
  return (
    <TunisContext.Provider
      value={{
        tunis,
        setTunis,
        country,
        setCountry,
        countries,
        setCountries,
        property,
        setProperty,
        properties,
        setProperties,
        loading,
        handleClick,
        loading,
      }}
    >
      {children}
    </TunisContext.Provider>
  );
};

export default TunisContextProvider;
