import React from 'react'
import './Banner.css'
import StarshipAvalon from "./images/Starship Avalon.png"

function Banner() {
    return (
        <div className='banner'>
            <img className="starship_avalon" src={StarshipAvalon} alt="Starship Avalon banner" />
        </div>
    )
}

export default Banner
