import React, { useEffect, useState } from "react";

const Weather = ({ city }) => {
  const [conditions, setConditions] = useState({});

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&&lang=fr`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("météo introuvable");
      })
      .then((result) => {
        console.log("meteo result", result);
        setConditions({
          feelsLike: Math.round(result.main.feels_like),
          mainTemp: Math.round(result.main.temp),
          description: result.weather[0].description,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [city]);

  console.log("description", conditions.description);

  return (
    <p className="h6" style={{ fontSize: "0.7rem" }}>
      <b>Température : </b>
      {conditions.mainTemp}&deg;C - ressentie {conditions.feelsLike}&deg;C (
      {city}) - {conditions.description}
    </p>
  );
};

export default Weather;
