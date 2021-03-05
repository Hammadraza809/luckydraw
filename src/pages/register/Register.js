import React, { Component } from "react";
import "./Register.css";
import { Button, Grid, Form } from "tabler-react";

class Register extends Component {
  render() {
    return (
      <div className="container">
        <Grid.Row>
          <Grid.Col>
            <Form.Group label="Input Icon">
              <Form.Input icon="user" placeholder="Username" />
            </Form.Group>
          </Grid.Col>
        </Grid.Row>
      </div>
    );
  }
}

export default Register;
