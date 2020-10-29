import React, { useState, useEffect } from "react";

import ReverseGeocoding from "./ReverseGeocoding";

const Location = () => {

  const [lat, setLat] = useState("loading");
  const [long, setLong] = useState("loading");

  /*   const available = () => {
    if ("geolocation" in navigator) {
      // console.log("Available");
    } else {
      // console.log("Not Available");
    }
  };

  available(); */

  useEffect(() => {
    const getLocation = async () => {
       await navigator.geolocation.getCurrentPosition(function (
        position
      ) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      //console.log("lat", lat)
      //console.log("long", long)
    };
    getLocation();
  });

  return (
    <>
      {lat !== "loading" && long !== "loading" ? (
        <ReverseGeocoding lat={lat} long={long} />
      ) : (
        ""
      )}
    </>
  );
};

export default Location;
