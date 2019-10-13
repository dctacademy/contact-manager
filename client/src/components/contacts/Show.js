import React from 'react'
import { connect } from 'react-redux'

function ContactShow(props) {
    const { name, email, mobile} = props.contact
    return (
        <div>
            <h1>{name} {email} {mobile}</h1>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        contact: state.contacts.find(contact => contact._id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(ContactShow)