import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdOutlineProductionQuantityLimits, MdOutlineDescription, MdOutlineCategory } from 'react-icons/md'
import { TbNumbers } from 'react-icons/tb'

import './Create.css'

const Create = () => {
  const navigate = useNavigate()

  const home = () => navigate('/')

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
            <button className='create'>Create</button>
            <button className='cancel' onClick={home}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create