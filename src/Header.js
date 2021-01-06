import React from 'react';
import './Header.css';
import bft from './bft.svg';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

function Header() {
    return (
        <div className='header'>
            <img className='header_logo' src={bft} alt="logo" />
            <div className='header_search'>
                <input className='header_searchInput' type='text' placeholder='Search Gadgets here...' />
                <SearchRoundedIcon className='searchIcon' />
            </div>
            <div className='header_nav'>
                <span className='header_navSpan nav_signIn'> <span className='nav_bold'>Sign</span>  In </span>
                <span className='header_navSpan navOption1'> <span className='nav_bold'>Check out</span> <br />  Gadgets </span>
                <span className='header_navSpan navOption2'> <span className='nav_bold'>Order</span> <br />  Gadgets </span>
                <span className='header_navSpan navOption3'> <span className='nav_bold'>Customize</span> <br />  Gadgets </span>
            </div>
        </div>
    )
}
export default Header
