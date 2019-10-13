import React from 'react'
import { connect } from 'react-redux'

function ContactList(props){ 
    return (
        <div>
            <h2>Listing Contacts - {props.contacts.length}</h2>
            <ul>
                { props.contacts.map(contact => {
                    return <li key={contact._id}>{ contact.name }</li>
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps)(ContactList)