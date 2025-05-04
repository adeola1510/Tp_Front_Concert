import React, { useContext } from 'react'

import { ShopContext } from '../ShopContext/ShopContext'

import {Link} from 'react-router-dom'
import './ProductList.css'
const ProductList = () => {
  const { filteredProducts, addToCart } = useContext(ShopContext)
  return (
    <div>
      <div className='product_list'>
        <h2>Nos évènements en show</h2>
        <div className='product_grid'>
          { filteredProducts.map((product)=>{
            const { id, image, title, price, category, genre_musical, date } = product;
            return (
              <div className='product_card' key={id}>
                <Link to={`/product/${id}`} key={id}>
                <img src={image} alt="" className='product_image' />
                <div className='product_info'>
                  <h4>{title}</h4>
                  <p>Date : {date} </p>
                  <p>Genre Musical : {genre_musical} </p>
                  <p>Categorie : {category} </p>
                  <p>Prix : {price} $</p>
                </div>
                </Link>
                <button onClick={()=>addToCart(product,id)} className='add-to-cart'>Reserver</button>
              </div>
            )
          }) }
        </div>
      </div>
    </div>
  )
}

export default ProductList