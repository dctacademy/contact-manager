import axios from '../config/axios'
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
                alert(response.data.message)
            } else {
                const contact = response.data  
                dispatch(addContact(contact))
            }
        })
    }
}