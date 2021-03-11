import React, { Component } from "react";
import "./Register.css";
import { Button, Grid, Form } from "tabler-react";
import CreateGroupModal from "../create-group-modal/CreateGroupModal";
class Register extends Component {
  constructor(props) {
    super(props);

    this.showGroupModal = React.createRef();
    this.state = {
      nextOfKin: "",
      idCard: "",
      fatherName: "",
      mobileNo: "",
      memberShipId: "",
      referenceId: "",
      winner: false,
      customWinner: false,
    };
  }
  onRegister = (e) => {
    e.preventDefault();

    const {
      nextOfKin,
      idCard,
      fatherName,
      mobileNo,
      memberShipId,
      winner,
      customWinner,
      referenceId,
    } = this.state;
    let formdata = new FormData();

    formdata.append("nextofkin", nextOfKin);
    formdata.append("cnic", idCard);
    formdata.append("fathername", fatherName);
    formdata.append("mobileno", mobileNo);
    formdata.append("membershipid", memberShipId);
    formdata.append("refrenceid", referenceId);
    formdata.append("winner", winner);
    formdata.append("customwinner", customWinner);
    fetch('http://mydreamcommittee.com/user_registration.php', {
      method: "POST",

      body: formdata,
    })
      .then((res) => res.text())
      .then((result) => {
        if (result == "Inserted") {
    this.showGroupModal.showModal();
    this.setState({
      nextOfKin: "",
      idCard: "",
      fatherName: "",
      mobileNo: "",
      memberShipId: "",
      referenceId: "",
      winner: false,
      customWinner: false,
    })
      } else {
        console.log("inncorrect");
      }
    });
  };

  render() {
    const {
      nextOfKin,
      idCard,
      fatherName,
      mobileNo,
      memberShipId,
      winner,
      customWinner,
      referenceId,
    } = this.state;
    return (
      <>
        <div className="container">
          <div className="form-wrapper">
            <div className="form-element">
              <Grid.Row>
                <Grid.Col md={6} xs={12} sm={12}>
                  <Form.Group label="Next of kin">
                    <Form.Input
                      icon="user"
                      placeholder="Next of kin"
                      value={nextOfKin}
                      onChange={(e) =>
                        this.setState({ nextOfKin: e.target.value })
                      }
                    />
                  </Form.Group>
                </Grid.Col>
                <Grid.Col md={6} xs={12} sm={12}>
                  <Form.Group label="CNIC">
                    <Form.Input
                      icon="user"
                      placeholder="CNIC"
                      value={idCard}
                      onChange={(e) =>
                        this.setState({ idCard: e.target.value })
                      }
                    />
                  </Form.Group>
                </Grid.Col>
              </Grid.Row>
              <Grid.Row>
                <Grid.Col md={6} xs={12} sm={12}>
                  <Form.Group label="Father Name">
                    <Form.Input
                      icon="user"
                      placeholder="Father Name"
                      value={fatherName}
                      onChange={(e) =>
                        this.setState({ fatherName: e.target.value })
                      }
                    />
                  </Form.Group>
                </Grid.Col>
                <Grid.Col md={6} xs={12} sm={12}>
                  <Form.Group label="Mobile No">
                    <Form.Input
                      icon="user"
                      placeholder="Mobile No"
                      value={mobileNo}
                      onChange={(e) =>
                        this.setState({ mobileNo: e.target.value })
                      }
                    />
                  </Form.Group>
                </Grid.Col>
              </Grid.Row>
              <Grid.Row>
                <Grid.Col md={6} xs={12} sm={12}>
                  <Form.Group label="Membership Id">
                    <Form.Input
                      icon="user"
                      placeholder="Membership Id"
                      value={memberShipId}
                      onChange={(e) =>
                        this.setState({ memberShipId: e.target.value })
                      }
                    />
                  </Form.Group>
                </Grid.Col>
                <Grid.Col md={6} xs={12} sm={12}>
                  <Form.Group label="Reference Id">
                    <Form.Input
                      icon="user"
                      placeholder="Reference Id"
                      value={referenceId}
                      onChange={(e) =>
                        this.setState({ referenceId: e.target.value })
                      }
                    />
                  </Form.Group>
                </Grid.Col>
              </Grid.Row>
              <Grid.Row>
                <Grid.Col>
                  <Button.List align="right">
                    <Button
                      color="primary"
                      type="submit"
                      onClick={this.onRegister}
                    >
                      Register
                    </Button>
                  </Button.List>
                </Grid.Col>
              </Grid.Row>
            </div>
          </div>
          <CreateGroupModal
            ref={(target) => (this.showGroupModal = target)}
            location={this.props.history}
          />
        </div>
      </>
    );
  }
}

export default Register;