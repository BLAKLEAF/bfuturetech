import React from 'react'
import Banner from './Banner'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <Banner className='banner_writing' />
            <div className="home_items">
                <Product />

            </div>



        </div>
    )
}

export default Home
