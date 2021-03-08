import React, { Component } from "react";
import "./Register.css";
import { Button, Grid, Form } from "tabler-react";
import CreateGroupModal from "../create-group-modal/CreateGroupModal";
class Register extends Component {
  constructor(props) {
    super(props);
    this.showGroupModal = React.createRef();
  }
  onRegister = () => {
    this.showGroupModal.showModal();
  };

  render() {
    return (
      <>
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
              <Grid.Row>
                <Grid.Col>
                  <Button.List align="right">
                    <Button color="primary" onClick={this.onRegister}>
                      Register
                    </Button>
                  </Button.List>
                </Grid.Col>
              </Grid.Row>
            </div>
          </div>
          <CreateGroupModal ref={(target) => (this.showGroupModal = target)} location={this.props.history} />
         
        </div>
      </>
    );
  }
}

export default Register;
