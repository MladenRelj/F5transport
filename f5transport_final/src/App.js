import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Home";
import Leistungen from "./components/layouts/Leistungen";
import Kontakt from "./components/layouts/Kontakt";
import Footer from "./components/layouts/Footer";

import "materialize-css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/leistungen" component={Leistungen} />
          <Route path="/kontakt_anfahrt" component={Kontakt} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
