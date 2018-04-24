import React, { Component } from 'react'
import ContactForm from './ContactForm'

class ContactPage extends Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <ContactForm onSubmit={this.submit} />
  }
}

export default ContactPage