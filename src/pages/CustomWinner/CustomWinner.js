import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./CustomWinner.css";
import { Button, Grid, Form } from "tabler-react";
import UpdateModal from "../create-group-modal/UpdateModal";
class Main extends Component {
  constructor(props) {
    super(props);
    let user = localStorage.getItem("user");
    if (!user) {
      this.props.history.push("/login");
    }
    this.state = {
      membershipId: "",
    };
  }
  updateWinner = () => {
    let formdata = new FormData();
    formdata.append("membershipid", this.state.membershipId.toUpperCase());
    fetch(`http://mydreamcommittee.com/example/set_customwinner.php`, {
      method: "POST",
      body: formdata,
    })
      .then((response) => response.text())
      .then((result) => this.showGroupModal.showModal())
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="text">
        <div className="headingg">
          <h1>Contact Us</h1>
        </div>
        <div className="contentt">
          <Container>
            <div>
              <Grid.Row>
                <Grid.Col md={12} xs={12} sm={12}>
                  <Form.Group label="Enter custom winner" isRequired>
                    <Form.Input
                      icon="user"
                      placeholder="enter custom winner"
                      onFocus={() =>
                        this.setState({
                          userNameErorr: false,
                          emailPwdErorr: false,
                        })
                      }
                      onChange={(e) =>
                        this.setState({ membershipId: e.target.value })
                      }
                    />
                  </Form.Group>
                </Grid.Col>
              </Grid.Row>
              <Grid.Row>
                <Grid.Col>
                  <Button.List align="center">
                    <Button
                      color="primary"
                      type="submit"
                      // loading={this.state.loading}
                      onClick={this.updateWinner}
                    >
                      Submit
                    </Button>
                  </Button.List>
                </Grid.Col>
              </Grid.Row>
            </div>
          </Container>
        </div>
        <UpdateModal
          ref={(target) => (this.showGroupModal = target)}
          location={this.props.history}
        />
      </div>
    );
  }
}

export default Main;
