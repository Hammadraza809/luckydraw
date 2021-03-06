import React, { Component } from "react";
import "../register/Register.css";
import { Button, Grid, Form } from "tabler-react";

class Login extends Component {
  onLogin = () => {
    this.props.history.push('/register')
  };
  render() {
    return (
      <div className="container">
        <div className="form-wrapper">
          <div className="login-form-element">
            <Grid.Row>
              <Grid.Col md={12} xs={12} sm={12}>
                <Form.Group label="Input Icon">
                  <Form.Input icon="user" placeholder="Username" />
                </Form.Group>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col md={12} xs={12} sm={12}>
                <Form.Group label="Input Icon">
                  <Form.Input icon="user" placeholder="Username" />
                </Form.Group>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col>
                <Button.List align="center">
                  <Button color="primary" onClick={this.onLogin}>
                    Login
                  </Button>
                </Button.List>
              </Grid.Col>
            </Grid.Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
