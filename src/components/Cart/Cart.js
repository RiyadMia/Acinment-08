import React, { useState } from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props;
    let name=''
    let quantity=0;
    for(const product of cart){
    name=product.name
        quantity=quantity+product.
        quantity;
    }
    // const [cart,setCart]=useState([])
    // 
    return (
        <div className='cart'>
            <h3>Mobile Order </h3>
            <p>Selected items : {quantity} </p>
            <h3> {name}</h3>
            <button className='btn-choice'>CHO0CE FOR 1 ME </button>
            <br />
            <button onClick={()=>props.removeCart()}   className='btn-close'>CHOOCE AGAIN</button>
        </div>
    );
};

export default Cart;