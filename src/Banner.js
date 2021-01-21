import React from 'react'
import './Banner.css'
import StarshipAvalon from "./images/Starship Avalon.png"
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

function Banner() {
    return (
        <div className='banner'>
            <img className="starship_avalon" src={StarshipAvalon} alt="Starship Avalon banner" />
            <p className='bannerText'>
                Hi, we are FUTURE TECH <br />
                A place where you can buy Gadgets from Future. <br />
                Hope you checkout our Products. <br />
                <span className='bannerArrows'>
                    <ArrowForwardIosRoundedIcon style={{ fontSize: 20 }} className='transformedArrow transformedArrow1 arrow1' />
                    <ArrowForwardIosRoundedIcon style={{ fontSize: 20 }} className='transformedArrow arrow2' />
                    <ArrowForwardIosRoundedIcon style={{ fontSize: 20 }} className='transformedArrow arrow3' />
                </span>
            </p>
        </div>
    )
}

export default Banner
