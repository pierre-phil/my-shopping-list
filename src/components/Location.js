import React, { useState } from "react";

import ReverseGeocoding from "./ReverseGeocoding";

const Location = () => {
  const [lat, setLat] = useState("empty");
  const [long, setLong] = useState("empty");

  const available = () => {
    if ("geolocation" in navigator) {
      // console.log("Available");
    } else {
      // console.log("Not Available");
    }
  };

  available();

  const getPosition = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      // console.log("lat", lat);
      // console.log("long", long);
    });
  };

  getPosition();

  return (
    <>
      {typeof lat === "number" && typeof lat === "number" ? (
        <ReverseGeocoding lat={lat} long={long} />
      ) : (
        ""
      )}
    </>
  );
};

export default Location;
