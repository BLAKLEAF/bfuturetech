import React from 'react';
import './Header.css';
import FTlogo from './FT-logo.svg';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to='/' className='header_logo' >
                <img src={FTlogo} alt="logo" />
            </Link>
            <div className='header_search'>
                <input className='header_searchInput' type='text' placeholder='Search Gadgets here...' />
                <SearchRoundedIcon className='searchIcon' />
            </div>
            <div className='header_nav'>
                <Link to={!user && '/login'} onClick={handleAuthenticaton} className='header_navSpan'>
                    <span className='signIn'> <span className='nav_bold'>Hello {!user ? 'Guest' : user.email}</span> <br />  {user ? 'Sign Out' : 'Sign In'} </span>
                </Link>
                <span className='header_navSpan navOption1'>
                    <Link to='/orders'>
                        <span className='nav_bold'>Check out</span> <br />  Gadgets
                    </Link>
                </span>
                <span className='header_navSpan navOption2'> <span className='nav_bold'>Order</span> <br />  Gadgets </span>
                <span className='header_navSpan navOption3'> <span className='nav_bold'>Customize</span> <br />  Gadgets </span>
                <Link to='/checkout' className='header_navSpan' >
                    <span className='cart'>
                        <span className='cartItem'>{basket?.length}</span>
                        <ShoppingCartIcon className='cartIcon' />
                    </span>
                </Link>
            </div>
        </div>
    )
}
export default Header
