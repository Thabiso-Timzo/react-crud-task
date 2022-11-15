import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineProductionQuantityLimits, MdOutlineDescription, MdOutlineCategory } from 'react-icons/md'
import { TbNumbers } from 'react-icons/tb'

import './Create.css'

const Create = () => {
  return (
    <div className='create-container'>
      <div className="form-container">
        <div className="heading">
          <h1>Create a product</h1>
        </div>
        <form>
          <div className='form-group'>
            <MdOutlineProductionQuantityLimits className='icon' />
            <input type="text" placeholder='Product name' />
          </div>
          <div className='form-group'>
            <MdOutlineCategory className='icon' />
            <input type="text" placeholder='Category name' />
          </div>
          <div className='form-group'>
            <TbNumbers className='icon' />
            <input type="number" placeholder='Number of items' />
          </div>
          <div className='form-group'>
            <MdOutlineDescription className='icon' />
            <textarea type="text" placeholder='Item description' />
          </div>
          <div className="btn">
            <button>Create</button>
          </div>
        
        </form>
      </div>
    </div>
  )
}

export default Create