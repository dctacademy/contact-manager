import axios from '../config/axios'
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
        axios.get('/users/account', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const user = response.data
                dispatch(setUser(user))
            })
    }
    
}


// handle form submission
export const startSetUser = (formData) => {
    return (dispatch) => {
        axios.post('/users/login', formData)
            .then(response => {
                // console.log(response.data)
                const { token, user } = response.data 
                localStorage.setItem('token', token) 
                dispatch(setUser(user))
            })
            .catch(err => {
                console.log(err)
            })
    }
}