import {ShopContext} from '../ShopContext/ShopContext'
import CartDetails from './CartDetails'
import {FiTrash2} from 'react-icons/fi'
import { useContext } from 'react'
import './Cart.css'
import React from "react";
import {Link} from 'react-router-dom'

const Cart = () => {
  const {cart, clearCart, total, itemAmount}= useContext(ShopContext);

  return (
    <div>
      <div className='cart_container'>
      <div className='cart_left'>
        <div className="cart_header">
          <h1>Shopping Cart</h1>
          <h1> {itemAmount} Items </h1>
          <FiTrash2 onClick={clearCart} className='delete_cart' />
        </div>
        <div className="cart_detail">
          {cart.length > 0? (
            cart.map((item)=>(<CartDetails item={item} key={item.id}/>))
          ):(<p>Your Cart is empty</p>  )}
        </div>
      </div>
      <div className='cart_right'>
        <h2>Cart Summary</h2>
        <div className="summary_item">
          <span>Item :</span>
          <span> {itemAmount} </span>
        </div>
        <div className="cart_sunnary">
          <div className='summary_item'>
            <span>Shipping</span>
            <span>Free</span>
          </div>
         
        </div>
        <div className='summary_item total_cost'>
          <span>Total Cost</span>
          <span>$ {isNaN(total)? 0: total} </span>
        </div>
        <Link  to="/auth"> 
        <button className='checkout_btn' >CHECKOUT</button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Cart