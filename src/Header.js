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
                <span className='header_navSpan navOption1'> Check out Gadgets </span>
                <span className='header_navSpan navOption2'> Order Gadgets </span>
                <span className='header_navSpan navOption3'> Customize Gadgets </span>
            </div>
        </div>
    )
}
export default Header
