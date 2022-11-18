import { 
    ADD_CONTACT, 
    DELETE_CONTACT, 
    UPDATE_CONTACT 
} from "../constant/constanReducer";

// Add contact action
export const addContact = (data) => ({
    type: ADD_CONTACT,
    payload: data
})

// Update contact action
export const updateContact = (data) => ({
    type: UPDATE_CONTACT,
    payload: data
})

// Delete contact action
export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id
})