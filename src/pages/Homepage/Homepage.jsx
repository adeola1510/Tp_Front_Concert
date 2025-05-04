import React, { useContext } from 'react'
import Hero from '../../Components/Hero/Hero'
import ProductList from '../../Components/ProductList/ProductList'
import { ShopContext } from '../../Components/ShopContext/ShopContext'
import Footer from '../../Components/Footer/Footer'

const Homepage = () => {
   const {heroVisible} = useContext(ShopContext)

  return (
    <div>
      {heroVisible && <Hero />}
      <ProductList />
      <Footer />
    </div>
  )
}

export default Homepage