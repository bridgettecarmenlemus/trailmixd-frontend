import React from "react";
import { useEffect } from "react";

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


export default function Hero () {
    return(
    <div>
        <h1>Welcome</h1>
        <h2>Please sign up to review yourfirst hiking trail!</h2>
        <button>Sign Up</button>
    </div>
    );
}
