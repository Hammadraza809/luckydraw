import React, { Component } from "react";
import "../register/Register.css";
import { Button, Grid, Form } from "tabler-react";

class Login extends Component {
  state = {
    username: "",
    pwd: "",
  };
  onLogin = () => {
    const {username,pwd} = this.state
    let formdata = new FormData();

    formdata.append("username", username.toLowerCase());
    formdata.append("password", pwd.toLowerCase());
    fetch(`http://mydreamcommittee.com/admin_login.php`, {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "Login Successful") {
          localStorage.setItem('user',JSON.stringify({username,pwd}))
          this.props.history.push("/register");
        }
        else{
          console.log("inncorrect")
        }
      });
  };
  render() {
    return (
      <div className="container">
        <div className="form-wrapper">
          <div className="login-form-element">
            {/* <Form onSubmit={this.onLogin}> */}
            <Grid.Row>
              <Grid.Col md={12} xs={12} sm={12}>
                <Form.Group label="Input Icon">
                  <Form.Input
                    icon="user"
                    placeholder="Username"
                    onChange={(e) =>
                      this.setState({ username: e.target.value })
                    }
                  />
                </Form.Group>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col md={12} xs={12} sm={12}>
                <Form.Group label="Input Icon">
                  <Form.Input
                    icon="user"
                    placeholder="Username"
                    onChange={(e) => this.setState({ pwd: e.target.value })}
                  />
                </Form.Group>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col>
                <Button.List align="center">
                  <Button color="primary" type="submit" onClick={this.onLogin}>
                    Login
                  </Button>
                </Button.List>
              </Grid.Col>
            </Grid.Row>
            {/* </Form> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
