import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './Edit.css'
import { 
  isEmpty,
  isCellphone,
  isEmail
} from '../../utils/validation/validation'
import { updateContact } from '../../action/contactAction'

const Edit = () => {
  // Initialise form state
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")

  // Initialise navigate
  const navigate = useNavigate()

  // Initialise dispatch
  const dispatch = useDispatch()

  // Use the id on the url
  const { id } = useParams()

  // Navigate to '/' route
  const home = () => navigate('/')

  // Initialise contact
  const contacts = useSelector((state) => state.contact)

  // Find the current contact
  const currentContact = contacts.find(contact => contact.id === parseInt(id))

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name)
      setEmail(currentContact.email)
      setNumber(currentContact.phone)
    }
  }, [currentContact])

  const handleSubmit = (e) => {
    e.preventDefault()

    // Checks if email of a certain id is available or not
    const checkEmail = contacts.find(
      contact => contact.id !== parseInt(id) && contact.email === email
    )

    // Checks if phone number of a certain id is available or not
    const checkNumber = contacts.find(
      contact => contact.id !== parseInt(id) && contact.phone === parseInt(number) && parseInt(number)
    )

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
      id: parseInt(id),
      name,
      email,
      number
    }

    dispatch(updateContact(data))
    toast.success('Contact updated successfully.')
    navigate('/')
  }

  return (
    <div className='create-container'>
      {
        currentContact ? (
          <div className="form-container">
            <div className="heading">
              <h1>Edit contact {id}</h1>
            </div>
            <form>
              <div className='form-group'>
              <label for='name'>Name:</label>
                <input 
                  type="text" 
                  name='name'
                  id='name'
                  placeholder='full name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='form-group'>
              <label for='email'>Email:</label>
                <input 
                  type="text" 
                  name='email'
                  id='email'
                  placeholder='email address' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='form-group'>
              <label for='number'>Number:</label>
                <input 
                  type="text" 
                  name='number'
                  id='number'
                  placeholder='phone number' 
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="btn">
                <button 
                  className='create' 
                  onClick={handleSubmit}
                  disabled={!name || !email || !number}
                >Edit</button>
                <button className='cancel' onClick={home}>Cancel</button>
              </div>
            </form>
          </div>
        ) : (
          <div className="no-contact">
            <h1>Contact with the following id: {id}, does not exist.</h1>
          </div>
        )
      } 
      
    </div>
  )
}

export default Edit