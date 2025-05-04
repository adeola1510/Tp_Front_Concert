import React from 'react'
import './Navbar.css'
import {MdCancel} from 'react-icons/md'
import {BiCard, BiSearch, BiUser} from 'react-icons/bi'
import {ShopContext} from '../ShopContext/ShopContext'
import { useContext } from 'react'
import { useState } from 'react'

import {Link} from 'react-router-dom'

const Navbar = () => {

  window.addEventListener ('scroll', function () {
    const nabar = document.querySelector (".navbar")
    nabar.classList.toggle ("active", window.scrollY>100)
  })

  const {searchProducts, setHeroVisible, itemAmount, email} = useContext(ShopContext);
  const [query,setQuery] = useState('');

  const handleSearch = (e) =>{
    setQuery(e.target.value);
    searchProducts(e.target.value);
  }

  const handleClick = () =>{
    setHeroVisible(false)
  }

  const handleCancelClick = () => {
    setHeroVisible(true)
  }
  return (
    <div>
      <div className='navbar'>
        <div className='logo'>
          <Link to="/"><h2>LogoX</h2></Link>
          
        </div>
        <div className='search'>
          <BiSearch className='search_icon' />
          <input type="text"
          value={query}
          onChange={handleSearch}
          onClick={handleClick}
          placeholder='Search for anything ...' />
          <MdCancel onClick={handleCancelClick} className='cancel' />
        </div>
        <div className='nav_icon_wrapper'>
          <Link to='/cart'>
            <div className='nav_cart'>
            <BiCard className='nav_icon' />
            <p className='nav_cart_amount'> {itemAmount} </p>
            </div>
          </Link>
          <BiUser className='nav_icon'/>
          <p> {email} </p>
        </div>
      </div>
    </div>
  )
}

export default Navbar