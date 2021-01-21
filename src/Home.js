import React from 'react'
import './Home.css'
import Product from './Product'
import chopper from './images/chopper.jpg'
import avalonreal from './images/avalonreal.gif'
import walle from './images/walle.jpg'
import bentley from './images/bentley.jpg'
import car from './images/car.gif'
import avatartech from './images/avatartech.jpg'
import antiager from './images/antiager.jpg'
import drone from './images/drone.jpg'
import watch from './images/watch.jpg'
import droid from './images/droid.jpg'
import droneblack from './images/droneblack.jpg'
import mask from './images/mask.jpg'

function Home() {
    return (
        <div className='home'>

            <div className="home_itemsRow">
                <Product
                    id='1'
                    title='Stelth Drone'
                    price={1000}
                    image={droneblack}
                    rating={3}
                    placeholder='Stelth Drone'
                />
                <Product
                    id='2'
                    title='Wall-E'
                    price={5000}
                    image={walle}
                    rating={5}
                    placeholder='Wall-E'
                />
                <Product
                    id='3'
                    title='Bentley'
                    price={1000000}
                    image={bentley}
                    rating={4}
                    placeholder='Bentley'
                />
                <Product
                    id='4'
                    title='Spy Drone'
                    price={3000}
                    image={drone}
                    rating={5}
                    placeholder='Spy Drone'
                />
                <Product
                    id='5'
                    title='Holographic Watch'
                    price={3000}
                    image={watch}
                    rating={4}
                    placeholder='Holographic Watch'
                />
                <Product
                    id='6'
                    title='Starship Avalon'
                    price={999999999}
                    image={avalonreal}
                    rating={4}
                    placeholder='Starship Avalon'
                />
                <Product
                    id='7'
                    title='Car with Reflective Panels'
                    price={400000}
                    image={car}
                    rating={5}
                    placeholder='Car with Reflective Panels'
                />
            </div>

            <div className="home_itemsRow">
                <Product
                    id='1.1'
                    title='Breather Mask'
                    price={5000}
                    image={mask}
                    rating={5}
                    placeholder='Breather Mask'
                />
                <Product
                    id='1.2'
                    title='Spider Bot'
                    price={30000}
                    image={avatartech}
                    rating={4}
                    placeholder='Spider Bot'
                />
                <Product
                    id='1.3'
                    title='Chopperless Copter'
                    price={700000}
                    image={chopper}
                    rating={5}
                    placeholder='Chopperless Copter'
                />
            </div>

            <div className="home_itemsRow">
                <Product
                    id='2.1'
                    title='Antiager'
                    price={8000000}
                    image={antiager}
                    rating={5}
                    placeholder='Antiager'
                />
                <Product
                    id='2.2'
                    title='Guard Droid'
                    price={56565656}
                    image={droid}
                    rating={5}
                    placeholder='Guard Droid'
                />
            </div>

        </div>
    )
}

export default Home
