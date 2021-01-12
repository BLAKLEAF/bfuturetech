import React from 'react'
import './CheckoutProduct.css'
import Star from './images/star.svg'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })  
    }

    return (
        <div className='checkoutProduct'>
            <img src={image} alt="ProductImage" className="checkoutProduct_image" />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    {title}
                </p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p><img className='star' src={Star} alt="Star Rating" /></p>
                        ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
