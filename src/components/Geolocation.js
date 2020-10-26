import React from "react";
import ReverseGeocoding from "./ReverseGeocoding"

import { usePosition } from 'use-position';

const Geolocation = () => {



const watch = true;
const {
  latitude,
  longitude,
  /* speed,
  timestamp,
  accuracy,
  error, */
} = usePosition(watch, { enableHighAccuracy: true });
 
    return (
    <>
            <ReverseGeocoding latitude={latitude} longitude={longitude} />
            </>
  );
}

export default Geolocation