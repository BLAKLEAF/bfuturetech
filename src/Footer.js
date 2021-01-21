import React from 'react'
import './Footer.css'
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

function Footer() {
    return (
        <div className='footer'>
            <a href="https://pratik-bankar.herokuapp.com/" className='developer'>
                <span className="nav_bold signIn">
                    Developed by
                    <ArrowRightRoundedIcon className='smallArrow' />
                    Pratik Bankar
                    <ArrowForwardIosRoundedIcon style={{ fontSize: 10 }} className='arrow arrow1' />
                    <ArrowForwardIosRoundedIcon style={{ fontSize: 10 }} className='arrow arrow2' />
                    <ArrowForwardIosRoundedIcon style={{ fontSize: 10 }} className='arrow arrow3' />
                </span>
            </a>
        </div>
    )
}

export default Footer
