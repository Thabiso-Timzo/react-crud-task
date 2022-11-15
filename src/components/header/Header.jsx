import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Header.css'

const Header = () => {
  const navigate = useNavigate()
  const create = () => navigate('/create')

  return (
    <div className='header-container'>
      <div className="navigation-bar">
        <button onClick={create}>Add a product</button>
      </div>
    </div>
  )
}

export default Header