import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ContactForm from './Form'

function ContactList(props){ 
    return (
        <div className="row">
            <div className="col-md-8">
                <h2>Listing Contacts - {props.contacts.length}</h2>
                <ul>
                    {props.contacts.map(contact => {
                        return <li key={contact._id}><Link to={`/contacts/${contact._id}`}>{contact.name}</Link></li>
                    })}
                </ul>
            </div>
            <div className="col-md-4">
                <ContactForm />
            </div>
        </div>
       
    )
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps)(ContactList)