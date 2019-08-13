import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';


class Contact extends Component {
  render() {
    return(
      <Container className="contact-grid">
      <Row>
        <Col>
          <h1>Ryan Mills</h1>
        </Col>
      </Row>


        <Col xs="6">
        <Form className="form-grid">
        <FormGroup>
        <Label for="exampleEmail">Firstname</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="First Name..." />
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">Lastname</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Last Name..." />
        </FormGroup>
        <FormGroup>
        <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email..." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button>Submit</Button>
        </Form>
        </Col>
        </Container>



    )
  }
}

export default Contact;
