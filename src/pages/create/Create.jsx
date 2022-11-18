import React, { useState }  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { MdEmail, MdPhone } from 'react-icons/md'
import { BsPersonFill } from 'react-icons/bs'

import './Create.css'
import { 
  isEmpty,
  isCellphone,
  isEmail
} from '../../utils/validation/validation'
import { addContact } from '../../action/contactAction'

const Create = () => {
  // Initialise form state
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")

  // Initialise navigate
  const navigate = useNavigate()

  // Initialise dispatch
  const dispatch = useDispatch()

  // Initialise contact
  const contacts = useSelector((state) => state.contact)

  // Navigate to '/' route
  const home = () => navigate('/')

  // Handle sumbit
  const handleSubmit = (e) => {
    e.preventDefault()

    // Checks if email is available or not
    const checkEmail = contacts.find(contact => contact.email === email && email)

    // Checks if phone number is available or not
    const checkNumber = contacts.find(contact => contact.phone === parseInt(number) && parseInt(number))

    // Form validation
    if (isEmpty(name) && isEmpty(email) && isEmpty(number)) {
      toast.error('Please fill all fields.')
    }

    if (checkEmail) {
      toast.error('This email already exists.')
    }

    if (checkNumber) {
      toast.error('This number already exists.')
    }

    if (!isEmail(email)) {
      toast.error('Please insert a valid email address.')
    }

    if (!isCellphone(number)) {
      toast.error('Please insert a valid phone number.')
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number
    }

    dispatch(addContact(data))
    toast.success('Contact added successfully.')
    navigate('/')
  }

  return (
    <div className='create-container'>
      <div className="form-container">
        <div className="heading">
          <h1>Add contact information</h1>
        </div>
        <form>
          <div className='form-group'>
            <BsPersonFill className='icon' />
            <input 
              type="text" 
              name='name'
              placeholder='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
             />
          </div>
          <div className='form-group'>
            <MdEmail className='icon' />
            <input 
              type="text"
              name='email' 
              placeholder='email address' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <MdPhone className='icon' />
            <input
              type="text" 
              name='number'
              placeholder='phone number '
              value={number}
              onChange={(e) => setNumber(e.target.value)}
             />
          </div>
          <div className="btn">
            <button className='create' onClick={handleSubmit}>Create</button>
            <button className='cancel' onClick={home}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create