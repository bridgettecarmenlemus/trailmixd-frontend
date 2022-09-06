import React from "react";
import { useEffect } from "react";
import "./Hero.css";
import video from "../assets/videos/mtnrange.mp4";

export default function Hero() {
  return (
    <>
    <div className="hero-container">
      <div className="welcome-container">
        <h1>Welcome</h1>
        <h2>Please sign up to review your first hiking trail!</h2>
        <button>Sign Up</button>
      </div>
      <div className="video-container">
        <video src={video} autoPlay loop muted className="background-video" />
      </div>
    </div>
    <div>
      <h1 className="body-two">
        See what others are saying about Trailmix'D
      </h1>
    </div>
    </>
  );
}


// const hero = () => {}

// export default function Hero({ hikingTrails, setHikingTrails }) {
//   useEffect(() => {
//     fetch("https://trailmixd-api.web.app/hikingtrails")
//       .then((results) => results.json())
//       .then((data) => setHikingTrails(data))
//       .catch(console.error);
//   }, [setHikingTrails]);
//   return (
//     <>
//       {hikingTrails?.map((trail) => {
//         <>
//         <h1></h1>
//         {trail["Hiking Trail"]}

//         </>;
//       })}
//     </>
//   );
// }