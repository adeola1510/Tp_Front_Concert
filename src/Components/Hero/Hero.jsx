import React from 'react'
import hero_img from '../../assets/casque_jbl.png'

import './Hero.css'
import {ShopContext} from '../ShopContext/ShopContext'
import { useContext } from 'react'

const Hero = () => {
  const {heroVisible, email} = useContext(ShopContext);
  if(!heroVisible) return null;
  return (
    <div>
      <div className='hero'>
         <div className='hero_content'>
          <div className='hero_left'>
          <h1>Là où la musique prend vie.</h1>
          <p>Le son. La scène. L’instant.</p>
          </div>
          <div className='hero_right'>
          <img src={hero_img} alt="hero_img" />
         </div>
         </div>
         
      </div>
    </div>
  )
}

export default Hero