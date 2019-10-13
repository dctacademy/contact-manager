import React from 'react' 
import { startAddContact} from '../../actions/contacts'
import { connect } from 'react-redux'

class ContactForm extends React.Component {
    constructor() {
        super() 
        this.state = {
            name: '', 
            email: '',
            mobile: ''
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
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile
        }
        this.props.dispatch(startAddContact(formData))
    }   

    render() {
        return (
            <div>
                <h2>Add Contact</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
                    </label> <br/>
                    <label>Email
                    <input type="text" value={this.state.email} onChange={this.handleChange} name="email" />
                    </label> <br />
                    <label>Mobile
                    <input type="text" value={this.state.mobile} onChange={this.handleChange} name="mobile" />
                    </label> <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect()(ContactForm)