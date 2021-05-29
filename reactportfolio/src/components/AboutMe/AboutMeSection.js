import React from 'react'
import './AboutMeSection.css'

function AboutMeSection() {
    return (
        <div class = "container">
           <div class = "row">
                <h2>About Me</h2>
           </div>
           <div class = "row">
                <img id ='About'  src = '/images/self1.jpg' alt = "Selfie"></img>
            </div>
            <br></br>
            <br></br>
            <div class = "row">
                <p>
                My name is Shon Hatcher. I am an alumunus of the University of Central Florida. I graduated there with my bachelors degree in Marketing. I experienced my first taste of coding once I graduated and I have always wanted to go back to school to learn about it more. I am confident that I will be able to apply what I have learned through this bootcamp and apply it to my current role and any future roles. If you would like to connect with me, please add me as a connection on <a href="http://www.linkedin.com/in/shon-hatcher-62bb06111">Linkedin</a> . 
                </p>
            </div>
        </div>
   )
}

export default AboutMeSection
