import "./Resume.css";
import React from "react";
import resumeImage from "./ResumeFall2022.png";

function Resume() {
    return (
        <div id="resumeContainer">
            <img id="resume" src={resumeImage} />
        </div>
    );
}

export default Resume;
