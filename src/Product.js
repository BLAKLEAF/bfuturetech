import React from 'react'
import './Product.css'
import Star from './images/star.svg'
import Avalon from './images/avalon.jpg'

function Product({ id, title, image, price, rating, placeholder }) {
    return (
        <div className='product'>
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p><img className='star' src={Star} alt="Star Rating" /></p>
                        ))}
                </div>
            </div>
            <img className='product_image' src={image} alt={placeholder} />
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
