import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    // const{handelToCart,product}=props
    const{name,img,price}=props.product
    return (
        <div className='product'>
               <img src={img} alt="" />
              <div className='product-info'>
              <p className='product-name'>{name}</p>
              <p>price: $ {price}</p>
              </div> 
              <button onClick={()=>props.handelToCart(props.product)} className='btn-cart'> 
             <p className='btn-text'>Add to Cart</p>
             <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
             </button>          
        </div>
    );
};

export default Product;