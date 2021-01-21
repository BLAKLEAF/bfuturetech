import React, { useState } from 'react';
import './Header.css';
import FTlogo from './FT-logo.svg';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [background, setBackground] = useState(false);

    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    }

    const changeBackground = () => {
        if (window.scrollY > 100) {
            setBackground(true);
        } else {
            setBackground(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <div className={background ? 'header active' : 'header'}>
            <div className="header_container">
                <Link to='/' className='header_logo' >
                    <img src={FTlogo} alt="logo" />
                </Link>

                <div className='header-search-nav-cart'>
                    <div className='header_search'>
                        <input className='header_searchInput' type='text' placeholder='Search Gadgets here...' />
                        <SearchRoundedIcon className='searchIcon' />
                    </div>
                    <Link to={!user && '/login'} onClick={handleAuthenticaton} className='header_nav'>
                        <span className="nav_bold signIn">
                            Hello {!user ? 'Guest' : user.email}
                            <ArrowRightRoundedIcon className='smallArrow' />
                            {user ? 'Sign Out' : 'Sign In'}
                            <ArrowForwardIosRoundedIcon style={{ fontSize: 10 }} className='arrow arrow1' />
                            <ArrowForwardIosRoundedIcon style={{ fontSize: 10 }} className='arrow arrow2' />
                            <ArrowForwardIosRoundedIcon style={{ fontSize: 10 }} className='arrow arrow3' />
                        </span>
                    </Link>
                    <Link to='/orders' className='header_nav'>
                        <ShoppingBasketRoundedIcon className='orderIcon' />
                    </Link>
                    <Link to='/checkout' className='header_nav cart' >
                        <span className='cartItem'>{basket?.length}</span>
                        <ShoppingCartIcon className='cartIcon' />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Header
