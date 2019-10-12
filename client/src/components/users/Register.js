import React from 'react' 

class Register extends React.Component {
    constructor() {
        super() 
        this.state = {
            username: '',
            email: '', 
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username: this.state.username, 
            email: this.state.email, 
            password: this.state.password
        }
        console.log(formData)
    }

    render() {
        return (
            <div>
                <h2>Register with us</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username 
                        <input type="text" value={this.state.username} onChange={this.handleChange} name="username" />
                    </label> <br/>
                    <label>
                        Email
                        <input type="text" value={this.state.email} onChange={this.handleChange} name="email" />
                    </label> <br />

                    <label>
                        Password
                        <input type="password" value={this.state.password} onChange={this.handleChange} name="password" />
                    </label> <br />

                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Register