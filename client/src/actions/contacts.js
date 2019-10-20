import axios from '../config/axios'
import { setErrors, clearErrors } from './formErrors'
// sync 

export const setContacts = (contacts) => {
    return {
        type: 'SET_CONTACTS',
        payload: contacts
    }
}

export const addContact = (contact) => {
    return {
        type: 'ADD_CONTACT',
        payload: contact
    }
}

// asyn 
export const startAddContact = (formData) => {
    return (dispatch) => {
        axios.post('/contacts', formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
        .then(response => {
            // const contact = response.data 
            console.log(response.data)
            if(response.data.hasOwnProperty('errors')) {
                // alert(response.data.message)
                // console.log(response.data)
                dispatch(setErrors(response.data.errors))
            } else {
                const contact = response.data  
                dispatch(addContact(contact))
                dispatch(clearErrors())
            }
        })
    }
}