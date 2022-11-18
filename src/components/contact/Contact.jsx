import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'

import './Contact.css'
import { deleteContact } from '../../action/contactAction'

const Contact = () => {
  // Initialise dispatch
  const dispatch = useDispatch()

  // Initialise contacts 
  const contacts = useSelector((state) => state.contact)
  
  // Delete contact
  const handleDelete = (id) => {
    dispatch(deleteContact(id))
    toast.success('Contact deleted successfully.')
  }

  return (
    <div className='product-container'>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>number</th>
          <th>action</th>
        </tr>
        {
          contacts.map((contact, id) => (
            <tr key={id}>
              <td>{id + 1}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.number}</td>
              <td>
                <div className="btn-group">
                  <Link to={`/edit/${contact.id}`} className='edit-btn' >Edit</Link>
                  <button className='delete-btn' onClick={() => handleDelete(contact.id)}>Delete</button>
                </div>
              </td>
           </tr>
          ))
        }
      </table>
    </div>
  )
}

export default Contact