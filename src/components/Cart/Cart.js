import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props;
    let total =0;
    let quantity=0;
    for(const product of cart){
        quantity=quantity+product.
        quantity;
        total = total + product.price * product.quantity;
    }
    return (
        <div className='cart'>
            <h3>Mobile Order </h3>
            <p>Selected items : {quantity} </p>
            <p>Total price : $ {total} </p>
        </div>
    );
};

export default Cart;