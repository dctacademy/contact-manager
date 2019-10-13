import axios from '../config/axios'
import { setContacts } from './contacts'
// sync 
export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

// async 
// handle page reloads
export const startGetUser = () => {
    return (dispatch) => {
        Promise.all([axios.get('/users/account', { 
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        }), axios.get('/contacts', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })])
        .then(values => {
            console.log(values)
            const [user, contacts ] = values 
            dispatch(setUser(user.data))
            dispatch(setContacts(contacts.data))
        })
    }
    
}


// handle form submission
export const startSetUser = (formData, props) => {
    return (dispatch) => {
        axios.post('/users/login', formData)
            .then(response => {
                // console.log(response.data)
                const { token, user } = response.data 
                localStorage.setItem('token', token) 
                dispatch(setUser(user))
                return axios.get('/contacts', {
                    headers: {
                        'x-auth': token
                    }
                })
            })
            .then(response => {
                const contacts = response.data
                dispatch(setContacts(contacts))
                props.history.push('/contacts')
            })
            .catch(err => {
                console.log(err)
            })
    }
}