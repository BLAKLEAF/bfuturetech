import React from 'react'
import './Footer.css'
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineDribbble } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

function Footer() {
    return (
        <div className='footer'>
            <span className="nav_bold signIn">
                Developed by
                <ArrowRightRoundedIcon className='smallArrow' />
                <a href="https://pratik-bankar.herokuapp.com/" className='developer'>Pratik Bankar</a>
                <ArrowForwardIosRoundedIcon style={{ fontSize: 10 }} className='arrow arrow1' />
                <ArrowForwardIosRoundedIcon style={{ fontSize: 10 }} className='arrow arrow2' />
                <ArrowForwardIosRoundedIcon style={{ fontSize: 10 }} className='arrow arrow3' />
                <a href="https://github.com/BLAKLEAF"><AiFillGithub className='footerIcons developer' /></a>
                <a href="https://www.linkedin.com/in/pratik-bankar-731a06148/"><AiOutlineDribbble className='footerIcons developer' /></a>
                <a href="https://dribbble.com/blakleaf"><AiFillLinkedin className='footerIcons developer' /></a>
            </span>
        </div>
    )
}

export default Footer
