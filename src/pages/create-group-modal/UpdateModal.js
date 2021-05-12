import React, { useState } from "react";
import Modal from "react-modal";
import { Button, Grid, Form } from "tabler-react";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "50%",
  },
};
Modal.setAppElement("#root");
class UpdateModal extends React.Component {
  constructor() {
    super();
    this.showGroupModal = React.createRef();
    this.state = {
      loading: false,
      visible: false,
      user: "",
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  closeModal = () => {
    this.setState({ visible: false });
  };
  setWinner = () => {

    this.closeModal();
   
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <Modal
        isOpen={visible}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Grid.Row>
            <Grid.Col>
              <h1>User Update Successfully</h1>
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col>
              <Button.List align="center">
                <Button color="primary" onClick={this.setWinner}>
                  OK
                </Button>
              </Button.List>
            </Grid.Col>
          </Grid.Row>
        </div>
      </Modal>
    );
  }
}

export default UpdateModal;
