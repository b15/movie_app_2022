import React from "react";
import './About.css';

function About(props) {
    console.log(props);
    return (
    <div className="about__container">
        <span>
            "하고 싶은 게임들이 너무 많다. 
            보드게임, 콘솔 게임, 스팀 게임 등등"
        </span>
        <span>-B15 2022</span>
    </div>
    );
}

export default About;