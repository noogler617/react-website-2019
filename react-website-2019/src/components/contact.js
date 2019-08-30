import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


class Contact extends Component {

  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

    handleChange = e => {
      this.setState({[e.target.name]: e.target.value })
    }
    handleSubmit(e) {
      e.preventDefault()

      const { name, email, message, } = this.state
    }

  render() {
    return(
      <Form onSubmit={this.handleSubmit} style={{ width: '600px'}}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
          type="text"
          name="name"
          onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
          type="text"
          name="email"
          onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="message">Message:</Label>
          <Input
          type="textarea"
          name="message"
          onChange={this.handleChange} />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}

export default Contact;
