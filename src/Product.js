import React from 'react'
import './Product.css'
import Star from './images/star.svg'
import Avalon from './images/avalon.jpg'

function Product() {
    return (
        <div className='product'>
            <div className="product_info">
                <p>Starship Avalon</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>1M</strong>
                </p>
                <div className="product_rating">
                    <p><img className='star' src={Star} alt="Star Rating" /></p>
                    <p><img className='star' src={Star} alt="Star Rating" /></p>
                    <p><img className='star' src={Star} alt="Star Rating" /></p>
                </div>
            </div>
            <img className='product_image' src={Avalon} alt="Starship Avalon model 1" />
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
