import React from 'react' 
import { startAddContact} from '../../actions/contacts'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import { Alert } from 'reactstrap'
import { clearErrors } from '../../actions/formErrors'

class ContactForm extends React.Component {
    constructor() {
        super() 
        this.state = {
            name: '', 
            email: '',
            mobile: '',
            hasErrors: ''
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

    componentWillUnmount() {
        this.props.dispatch(clearErrors())
    }

    render() {
        return (
            <div>
                <h2>Add Contact</h2>
                {
                   !isEmpty(this.props.formErrors) && (
                       <Alert color="danger">
                            <h3>Form Errors: </h3>
                            <ul>
                                { Object.entries(this.props.formErrors).map((entry,i) => {
                                    return (
                                        <li key={i}>{entry[0]} : {entry[1].message }</li>
                                    )
                                })}
                            </ul>
                        </Alert>
                   )
                }
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label> 
                        <input type="text" value={this.state.name} onChange={this.handleChange} name="name" id="name" className="form-control" />
                        {
                           this.props.formErrors.hasOwnProperty('name') &&  <p className="text-danger">{this.props.formErrors.name.message }</p>
                        }
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" value={this.state.email} onChange={this.handleChange} name="email" id="email" className="form-control"/>
                    </div>
                    

                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="text" value={this.state.mobile} onChange={this.handleChange} name="mobile" id="mobile" className="form-control"/>
                    </div>
                    
                    <input type="submit" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        formErrors: state.formErrors
    }
}
export default connect(mapStateToProps)(ContactForm)