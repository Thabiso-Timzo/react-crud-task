import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Product.css'

const Product = () => {
  const navigate = useNavigate()

  const edit = () => navigate('/edit/1')
  
  return (
    <div className='product-container'>
      <div className="left">Thabisodgdfghdfhdfhfjj</div>
      <div className="right">
        <button className='edit-btn' onClick={edit}>Edit</button>
        <button className='delete-btn'>Delete</button>
      </div>
    </div>
  )
}

export default Product
