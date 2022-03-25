import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props;
    let total =0;
    let quantity=0;
    let name=[]
    for(const product of cart){
        name = product.name
        quantity=quantity+product.
        quantity;
        total = total + product.price * product.quantity;
    }
    return (
        <div className='cart'>
            <h3>Mobile Order </h3>
            <p>Selected items : {quantity} </p>
           <h3> {name}</h3>
            <p>Total price : $ {total} </p>
        </div>
    );
};

export default Cart;