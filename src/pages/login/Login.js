import React, { Component } from "react";
import "../register/Register.css";
import { Button, Grid, Form } from "tabler-react";
import "./Login.css"
import logo from '../../assets/images/logo.png'

class Login extends Component {
  state = {
    username: "",
    pwd: "",
    loading: false,
    userNameErorr: false,
    pwdErorr: false,
    emailPwdErorr: false,
    hidePassword: true
  };
  onLogin = () => {
    this.setState({ loading: true });
    const {
      username,
      pwd,
      userNameErorr,
      pwdErorr,
      emailPwdErorr,
    } = this.state;
    if (username === "" && pwd === "") {
      this.setState({
        loading: false,
        userNameErorr: true,
        pwdErorr: true,
      });
    } else if (username === "") {
      this.setState({ loading: false, userNameErorr: true });
    } else if (pwd === "") {
      this.setState({ loading: false, pwdErorr: true });
    }
    else {
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
            this.setState({ loading: false });

            localStorage.setItem("user", JSON.stringify({ username, pwd }));
            this.props.history.push("/register");
          } else {
            this.setState({ loading: false, emailPwdErorr: true });
            console.log("inncorrect");
          }
        })
        .catch((err) => this.setState({ loading: false }));
    }

  };
  render() {
    const { userNameErorr, pwdErorr, emailPwdErorr } = this.state;
    return (
      <div className="container">
        <div className="img">
          <img style={{width: "150px", height:"80px"}} src={logo}/>
        </div>
        {/* <div className="form-wrapper"> */}
          <div className="login-form-element">
            {/* <Form onSubmit={this.onLogin}> */}
            <Grid.Row>
              <Grid.Col md={12} xs={12} sm={12}>
                <Form.Group label="User Name" isRequired>
                  <Form.Input
                    icon="user"
                    placeholder="Username"
                    onFocus={() => this.setState({ userNameErorr: false, emailPwdErorr: false })}
                    onChange={(e) =>
                      this.setState({ username: e.target.value })
                    }
                  />
                  {userNameErorr && (
                    <span style={{ color: "red" }}>Please fill out this</span>
                  )}
                </Form.Group>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col md={12} xs={12} sm={12}>
                <Form.Group label="Password" isRequired>
                  <Form.Input
                    icon="user"
                    type="password"
                    placeholder="Password"
                    onFocus={() => this.setState({ pwdErorr: false, emailPwdErorr: false })}
                    onChange={(e) => this.setState({ pwd: e.target.value })}
                    secureTextEntry={this.state.hidePassword}
                  />
                  {pwdErorr && (
                    <span style={{ color: "red" }}>Please fill out this</span>
                  )}
                </Form.Group>
              </Grid.Col>
            </Grid.Row>

            <Grid.Row>
              <Grid.Col>
                {emailPwdErorr && (
                  <span style={{ color: "red" }}>
                    Email and Password Incorrect
                  </span>
                )}
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col>
                <Button.List align="center">
                  <Button
                    color="primary"
                    type="submit"
                    loading={this.state.loading}
                    onClick={this.onLogin}
                  >
                    Login
                  </Button>
                </Button.List>
              </Grid.Col>
            </Grid.Row>
            {/* </Form> */}
          </div>
        {/* </div> */}
      </div>
    );
  }
}

export default Login;
