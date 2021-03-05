import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home/Home";
import Faq from "./pages/faq/Faq";

import "tabler-react/dist/Tabler.css";
import Register from "./pages/register/Register";


function App(){
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;