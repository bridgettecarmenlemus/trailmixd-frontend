import React from "react";
import "./Footer.css"

export default function Footer () {
    return(
        <>
        <footer className="footer">
        <div className="footerButtonsContainer">
        <a href="https://www.linkedin.com/in/bridgettecarmenlemus/" target="_blank"><button className="footerButton">LinkedIn</button></a>
        <a href="https://github.com/bridgettecarmenlemus"
        target="_blank"><button className="footerButton">GitHub</button></a>
        <button className="footerButton" >TRAILMIX'D</button>
        <button className="footerButton">About</button>
        <a href="https://bocacode.com/candidates"
        target="_blank">
        <button className="footerButton">Team</button></a>
        </div>
        <div className="copyright">&#169; Made By Bridgette Del Carmen Lemus</div>
        </footer>
        </>
    )
}