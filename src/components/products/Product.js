import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const{name,img,price}=props.product
    return (
        <div className='product'>
               <img src={img} alt="" />
              <div className='product-info'>
              <h3 className='product-name'>{name}</h3>
              <h4>price: $ {price}</h4>
              </div> 
              <button onClick={()=>props.handelToCart(props.product)} className='btn-cart'> 
             <p className='btn-text'>Add to Cart</p>
             <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
             </button>          
        </div>
    );
};

export default Product;