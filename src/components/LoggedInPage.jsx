import React from "react";
import { useEffect } from "react";

// const hero = () => {}

export default function Hero({ hikingTrails, setHikingTrails }) {
  useEffect(() => {
    fetch("https://trailmixd-api.web.app/hikingtrails")
      .then((results) => results.json())
      .then((data) => setHikingTrails(data))
      .catch(console.error);
  }, [setHikingTrails]);
  return (
    <>
      {hikingTrails?.map((trail) => {
        <>
        <h1></h1>
        {trail["Hiking Trail"]}
        
        
        </>;
      })}
    </>
  );
}