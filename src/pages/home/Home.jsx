import React from 'react'

import './Home.css'
import Header from '../../components/header/Header'
import Contact from '../../components/contact/Contact'

const Home = () => {
  return (
    <>
      <Header />
      <div className="line">
        <hr />
      </div>
      <Contact />
    </>
  )
}

export default Home