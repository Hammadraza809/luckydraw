import React, { Component } from "react";
import "./Register.css";
import { Button, Grid, Form } from "tabler-react";

class Register extends Component {
  render() {
    return (
      <div className="container">
        <div className="form-wrapper">
        <div className="form-element">
          <Grid.Row>
            <Grid.Col md={6} xs={12} sm={12}>
              <Form.Group label="Input Icon">
                <Form.Input icon="user" placeholder="Username" />
              </Form.Group>
            </Grid.Col>
            <Grid.Col md={6} xs={12} sm={12}>
              <Form.Group label="Input Icon">
                <Form.Input icon="user" placeholder="Username" />
              </Form.Group>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col md={6} xs={12} sm={12}>
              <Form.Group label="Input Icon">
                <Form.Input icon="user" placeholder="Username" />
              </Form.Group>
            </Grid.Col>
            <Grid.Col md={6} xs={12} sm={12}>
              <Form.Group label="Input Icon">
                <Form.Input icon="user" placeholder="Username" />
              </Form.Group>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col md={6} xs={12} sm={12}>
              <Form.Group label="Input Icon">
                <Form.Input icon="user" placeholder="Username" />
              </Form.Group>
            </Grid.Col>
            <Grid.Col md={6} xs={12} sm={12}>
              <Form.Group label="Input Icon">
                <Form.Input icon="user" placeholder="Username" />
              </Form.Group>
            </Grid.Col>
          </Grid.Row>
        </div>
        </div>
      
      </div>
    );
  }
}

export default Register;
