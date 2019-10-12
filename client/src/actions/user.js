import axios from '../config/axios'
// sync 
export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

// async 
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