import React, {useState, useEffect} from "react";

const ReverseGeocoding = ({lat, long}) => {
    
    const [city, setCity] = useState("");
  
  
  useEffect(() => {
    console.log('lat', lat)
    console.log('long', long)
    
    const API_TOKEN = process.env.REACT_APP_LOCATIONIQ_API_TOKEN;
    const url = `https://us1.locationiq.com/v1/reverse.php?key=${API_TOKEN}&lat=${lat}&lon=${long}&format=json`;
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
  }, [city, lat, long]);


    return (
      <p>latitude: {lat}, longitude: {long}, city: {city}</p>
)
}

export default ReverseGeocoding