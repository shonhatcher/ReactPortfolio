import React from 'react'
import './Hero.css'; 


function Hero() {
    return (
        <>
        <div>
            <img src = '/images/homeBackground.jpg' alt = "digital background"></img>
            <h1> Full-Stack Web Developer</h1>
            <button type = "button" class = "btn btn-warning btn-lg"><a href = '/About'>
                Tell Me More
            </a></button>
        
        </div>
        </>
    )
}

export default Hero; 

