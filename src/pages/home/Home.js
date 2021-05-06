import React, { Component } from "react";
import Confetti from "react-dom-confetti";
import TextLoop from "react-text-loop";
import { Helmet } from "react-helmet";
import { Button, Grid } from "tabler-react";

import "./Home.css";
import DrawForm from "../../components/DrawForm";
import PreviouslyDrawnItemsBlock from "../../components/PreviouslyDrawnItemsBlock";
import SiteWrapper from "../../SiteWrapper";
import "tabler-react/dist/Tabler.css";
import ShowPassModal from "../create-group-modal/ShowPassModal";
import car1 from "../../assets/images/car1.png"
import car2 from "../../assets/images/car2.png"
import car3 from "../../assets/images/car3.png"
import car4 from "../../assets/images/car4.png"
// import { HOME } from "../Json-ld";

const style = {
  drawForm: {
    width: "100%",
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    let user = localStorage.getItem("user");
    if (!user) {
      this.props.history.push("/login");
    }
    this.showConfirmModal = React.createRef();
    this.state = {
      items: [],
      drawItems: [],
      currentItems: [],
      pastDrawnItems: [],
      result: "",
      showTextAnimation: true,
      removeDrawnItem: true,
      animationInterval: 150,
      showResult: false,
      disableDrawButton: false,
      value: "",
      placeholder: "Please enter the draw items here. One item per line.",
      valid: false,
      touched: false,
      showConfirm: false,
      validationRules: {
        minLength: 3,
        isRequired: true,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSkipAnimationChange = this.handleSkipAnimationChange.bind(this);
    this.handleRemoveDrawnItemChange = this.handleRemoveDrawnItemChange.bind(
      this
    );
  }
  componentDidMount() {
    this.getUsers()
  }
  async getUsers() {
    await fetch('http://mydreamcommittee.com/example/get_userlist.php', {
      method: 'GET'
    })
      .then(res => res.json())
      .then((result) => {
        console.log(result)
        this.setState({
          ...this.state,
          items: result,
          currentItems: result,
        });

      })
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.drawItems.length > 2) {
      let formInputItems = this.state.drawItems;
      let itemList = formInputItems.split("\n");
      this.setState({
        ...this.state,
        items: itemList,
        currentItems: itemList,
      });
    }
  }

  handleChange(e) {
    this.setState({ [e.name]: e.value });
  }

  handleSkipAnimationChange = () => {
    this.setState({ showTextAnimation: !this.state.showTextAnimation });
  };

  handleRemoveDrawnItemChange = () => {
    this.setState({ removeDrawnItem: !this.state.removeDrawnItem });
  };

  sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  randomDrawItem = () => {
    const { currentItems, showTextAnimation, removeDrawnItem } = this.state;
    const currItems = currentItems.map(res => {
      return res.membershipid
    })

    var tuna = currentItems.find(function (sandwich) {
      return sandwich.customwinner == 'true';
    });
    this.setState({
      ...this.state,
      showResult: true,
      disableDrawButton: true,

    });

    let maxItemIndex = currItems.length;
    const getIndex = currentItems.indexOf(tuna)
    console.log(getIndex)
    // const randomIndex = Math.floor(Math.random() * maxItemIndex);
    const randomIndex = getIndex
    this.sleep(showTextAnimation ? 30000 : 0).then(() => {
      this.setState({
        ...this.state,
        result: currItems[randomIndex],
        pastDrawnItems: [
          ...this.state.pastDrawnItems,
          currItems[randomIndex],
        ],
        showResult: false,
        disableDrawButton: false,
        showConfirm: true
      });
    });
    if (removeDrawnItem) {
      const copyCurrentItems = [...this.state.currentItems];
      copyCurrentItems.splice(randomIndex, 1);
      this.setState({
        currentItems: copyCurrentItems,
      });
    }
  };
  showModal = () => {
    this.showConfirmModal.showModal();
  }
  hideConfirm = () => {
    this.setState({ showConfirm: false })
  }
  render() {
    const {
      items,
      drawItems,
      currentItems,
      result,
      disableDrawButton,
      pastDrawnItems,
      placeholder,
      showResult,
      showConfirm
    } = this.state;
    // console.log(items)

    const newItems = items.map(res => {
      return res.membershipid
    })

    return (
      <SiteWrapper location={this.props.history} className="mainn">
        <div className="texxt">
          Welcome to the lucky draw for Dream Car Committee<br />
          Your Dream Car is on your way .... <hr />
        </div>
        <div className="imgs">
          <img style={{ width: "200px" }} src={car1} />
          <img style={{ width: "200px" }} src={car2} />
          <img style={{ width: "200px" }} src={car3} />
          <img style={{ width: "200px" }} src={car4} />
          <img style={{ width: "200px" }} src={car3} />
        </div>
        {items.length !== 0 && (
          <div className="draw-block">
            <Grid.Row>
              <Grid.Col md={12} sm={12}>
                <div className="draw-section">
                  {showResult && items &&

                    <TextLoop
                      className="draw-text"
                      interval={100}
                      springConfig={{ stiffness: 250, damping: 10 }}
                      children={newItems}
                    />
                  }
                  <Confetti active={this.state.showResult} />
                  {!showResult && result}
                </div>
                <Button
                  pill
                  block
                  name="drawButton"
                  color="primary"
                  onClick={this.randomDrawItem}
                  disabled={disableDrawButton || currentItems.length <= 1}
                >
                  {disableDrawButton ? "Drawing..." : "Draw"}
                </Button>
              </Grid.Col>
            </Grid.Row>
            <br />
            {showConfirm &&
              <Grid.Row>
                <Grid.Col md={12} sm={12}>
                  <Button
                    color="primary"
                    onClick={this.showModal}
                  >
                    Confirm
                </Button>
                </Grid.Col>
              </Grid.Row>
            }
          </div>
        )}
        {showConfirm &&
          <ShowPassModal
            ref={(target) => (this.showConfirmModal = target)}
            user={result}
            hideConfirm={this.hideConfirm}
            location={this.props.history}
          />}

      </SiteWrapper>
    );
  }
}

export default App;
