import React, { useState, useEffect } from "react";

import Weather from './Weather'

const ReverseGeocoding = ({ latitude, longitude }) => {
    
    const [city, setCity] = useState("");
  
  
  useEffect(() => {
    console.log('latitude', latitude)
    console.log('longitude', longitude)
    
    const API_TOKEN = process.env.REACT_APP_LOCATIONIQ_API_TOKEN;
    const url = `https://us1.locationiq.com/v1/reverse.php?key=${API_TOKEN}&lat=${latitude}&lon=${longitude}&format=json`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          
          return response.json();
          
        }
        throw new Error("conversion de coordonnées impossible");
      })
      .then((result) => {
          console.log('LocationIQ', result);
          setCity(result.address.town)
          console.log('city', city)
      })
      .catch((error) => {
        console.log(error.message);
      });
  });


  return (
      <>
      <Weather city={city}/>
      </>
)
}

export default ReverseGeocoding