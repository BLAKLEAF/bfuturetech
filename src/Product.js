import React from 'react'
import './Product.css'
import Star from './images/star.svg'
import { useStateValue } from './StateProvider'
import { FaRupeeSign } from 'react-icons/fa';

function Product({ id, title, image, price, rating, placeholder }) {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        });
    }

    return (
        <div className='product'>
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <FaRupeeSign />
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
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
