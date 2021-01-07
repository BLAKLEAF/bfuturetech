import React from 'react'
import Banner from './Banner'
import './Home.css'
import Product from './Product'
import Avalon from './images/avalon.jpg'

function Home() {
    return (
        <div className='home'>
            <Banner className='banner_writing' />
            <div className="home_items">
                <div className="home_itemsRow">
                    <Product
                        id='1'
                        title='Starship Avalon'
                        price={100000000}
                        image={Avalon}
                        rating={10}
                        placeholder='Starship Avalon'
                    />
                    <Product
                        id='2'
                        title='Starship Avalon'
                        price={100000000}
                        image={Avalon}
                        rating={10}
                        placeholder='Starship Avalon'
                    />
                    <Product
                        id='3'
                        title='Starship Avalon'
                        price={100000000}
                        image={Avalon}
                        rating={10}
                        placeholder='Starship Avalon'
                    />
                    <Product
                        id='4'
                        title='Starship Avalon'
                        price={100000000}
                        image={Avalon}
                        rating={10}
                        placeholder='Starship Avalon'
                    />
                    <Product
                        id='5'
                        title='Starship Avalon'
                        price={100000000}
                        image={Avalon}
                        rating={10}
                        placeholder='Starship Avalon'
                    />
                    <Product
                        id='6'
                        title='Starship Avalon'
                        price={100000000}
                        image={Avalon}
                        rating={10}
                        placeholder='Starship Avalon'
                    />
                </div>

                <div className="home_itemsRow">
                    <Product
                        id='1'
                        title='Starship Avalon'
                        price={100000000}
                        image={Avalon}
                        rating={10}
                        placeholder='Starship Avalon'
                    />
                    <Product
                        id='2'
                        title='Starship Avalon'
                        price={100000000}
                        image={Avalon}
                        rating={10}
                        placeholder='Starship Avalon'
                    />
                    <Product
                        id='3'
                        title='Starship Avalon'
                        price={100000000}
                        image={Avalon}
                        rating={10}
                        placeholder='Starship Avalon'
                    />
                </div>

                <div className="home_itemsRow">
                    <Product
                        id='1'
                        title='Starship Avalon'
                        price={100000000}
                        image={Avalon}
                        rating={10}
                        placeholder='Starship Avalon'
                    />
                    <Product
                        id='2'
                        title='Starship Avalon'
                        price={100000000}
                        image={Avalon}
                        rating={10}
                        placeholder='Starship Avalon'
                    />
                </div>
            </div>



        </div>
    )
}

export default Home
