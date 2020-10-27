import React, { useState, useEffect } from "react";

import Weather from "./Weather";

const ReverseGeocoding = ({ latitude, longitude }) => {

  const [city, setCity] = useState("");
  const [lat, setLat] = useState("")
  const [long, setLong] = useState("")


  const available = () => {
     if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
     }
    
  }

  available()

    const getPosition = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
      console.log('lat', lat)
      console.log('long', long)

    });
  }

  getPosition()
 
  useEffect(() => {
    // console.log("latitude", latitude);
    // console.log("longitude", longitude);
    
    const API_TOKEN = process.env.REACT_APP_LOCATIONIQ_API_TOKEN;
    const url = `https://us1.locationiq.com/v1/reverse.php?key=${API_TOKEN}&lat=${lat}&lon=${long}&format=json`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to fetch coordinates");
      })
      .then((result) => {
        // console.log("LocationIQ", result);
        setCity(result.address.town);
        // console.log("city", city);
      })
      .catch((error) => {
        console.log(error.message);
      }, []);
  });

  return (
    <>
      <Weather city={city} />
    </>
  );
};

export default ReverseGeocoding;
