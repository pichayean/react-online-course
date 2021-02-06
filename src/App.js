import React from "react";
import Homepage from "./pages/Homepage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPages from "./pages/AboutPages";

function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/home">
              <Homepage />
            </Route>
            <Route path="/about">
              <AboutPages />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
