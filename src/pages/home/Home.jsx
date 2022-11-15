import React from 'react'

import './Home.css'
import Header from '../../components/header/Header'
import Product from '../../components/product-list/Product'

const Home = () => {
  return (
    <>
      <Header />
      <div className="line">
        <hr />
      </div>
      <Product />
    </>
  )
}

export default Home