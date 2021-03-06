import React, { useState, useEffect } from "react";

import Weather from "./Weather";

const ReverseGeocoding = ({ lat, long }) => {
  
  const [city, setCity] = useState("");
  const API_TOKEN = process.env.REACT_APP_LOCATIONIQ_API_TOKEN;
  const url = `https://us1.locationiq.com/v1/reverse.php?key=${API_TOKEN}&lat=${lat}&lon=${long}&format=json`;

  useEffect(() => {

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to fetch coordinates");
      })
      .then((result) => {
        setCity(result.address.town);
        //console.log("city", city);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  return <>{city ? <Weather city={city} /> : ""}</>;
};

export default ReverseGeocoding;
