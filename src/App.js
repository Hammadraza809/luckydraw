import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home/Home";
import Main from "./pages/Main/MainScreen";

import "tabler-react/dist/Tabler.css";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Winner from "./pages/winner/Winner";
import About from "./pages/about";
import Contact from "./pages/contact";
const imgMyimageexample = require('../src/assets/images/bg.jpg');

const divStyle = {
  // width: '100%',
  // height: '500px',
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover'
}

function App() {
  return (
    // <div style={{}}>
      <React.StrictMode>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/winner" component={Winner} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/home" component={Home} />
            <Route exact path="/" component={Main} />
            
          </Switch>
        </Router>
      </React.StrictMode>
    // </div>
  );
}

export default App;
