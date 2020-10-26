import React from "react";
import ReverseGeocoding from "./ReverseGeocoding"

import { usePosition } from 'use-position';

const Geolocation = () => {



const watch = true;
const {
  latitude,
  longitude,
  speed,
  timestamp,
  accuracy,
  error,
} = usePosition(watch, { enableHighAccuracy: true });
 
    return (
    <>
    <code>
      latitude: {latitude}<br/>
      longitude: {longitude}<br/>
      speed: {speed}<br/>
      timestamp: {timestamp}<br/>
      accuracy: {accuracy && `${accuracy}m`}<br/>
      error: {error}
    </code>
            <ReverseGeocoding lat={latitude} long={longitude} />
            </>
  );
}

export default Geolocation