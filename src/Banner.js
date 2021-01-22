import React from 'react'
import './Banner.css'
import StarshipAvalon from "./images/Starship Avalon.png"
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Bounce from 'react-reveal/Bounce';

function Banner() {
    return (
        <div className='banner'>
            <img className="starship_avalon" src={StarshipAvalon} alt="Starship Avalon banner" />
            <div className='bannerText'>
                <Bounce left cascade>
                    <p>Hi, we are FUTURE TECH.</p>
                    <p>A place where you can buy Gadgets from Future.</p>
                    <p>Hope you checkout our Products.</p>
                </Bounce>
                <span className='bannerArrows'>
                    <ArrowForwardIosRoundedIcon style={{ fontSize: 20 }} className='transformedArrow transformedArrow1 arrow1' />
                    <ArrowForwardIosRoundedIcon style={{ fontSize: 20 }} className='transformedArrow arrow2' />
                    <ArrowForwardIosRoundedIcon style={{ fontSize: 20 }} className='transformedArrow arrow3' />
                </span>
            </div>
        </div>
    )
}

export default Banner
