import React from "react";
import Headshot from "../assets/videos/images/Headshot.jpg";
import Hiking from "../assets/videos/images/Hiking.jpg"
import "./About.css"




export default function About () {
    return (
        <>
        <h1>
         <img src={Headshot} className="headshot"/>  
         <img src={Hiking} className="hiking" /> 
        </h1>
        <h2>Welcome to Trailmix'd!</h2>
        <p>Thank you for visiting the website. My name is Bridgette and I am currently a software engineering student at Boca Code. Beyond being a full time student, I love going on hiking trips. So, it is with great pleasure that I have created this site where hikers could come here and review there latest hike. </p>
        </>
    )
}