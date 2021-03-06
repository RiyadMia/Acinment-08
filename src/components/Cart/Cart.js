import React from 'react';
import './Cart.css'
const Cart = (props) => {  
    const {cart}=props;
    let quantity=0;
    for(const product of cart){
        quantity=quantity+product.
        quantity;
    }
    return (
        <div className='cart'>
            <h3>Mobile Order </h3>
            <p>Selected items : {quantity} </p>
           {cart.map((items)=>
                (
                   <h4 key={items.id}>{items.name} </h4> 
                )
           )}
            <button onClick={()=>props.choiceHandleClick(props.cart)} className='btn-choice'>CHO0CE FOR ONE ME  </button>
            <br />
            <button onClick={()=>props.removeHandleClick()}   className='btn-close'>Remove All</button>
        </div>
    );
};

export default Cart;