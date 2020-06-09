import React from "react";
import Particles from "react-particles-js";
import Navbar from "./components/NavBar.js";
import Header from "./components/Header.js";
import AssignmentList from "./components/AssignmentList";
import CreateAssignment from "./components/CreateAssignment";
import Signin from "./components/Signin";
import Register from "./components/Register";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="center">
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 120,
              density: {
                enable: true,
                value_area: 800,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <Header />
      <Navbar />
      <Router>
        <Route path="/signin" exact component={Signin} />
        <Route path="/register" exact component={Register} />

        <Route path="/" exact component={AssignmentList} />
        <Route path="/edit/:id" component={CreateAssignment} />
        <Route path="/create" component={CreateAssignment} />
        <Route path="/saved" component={AssignmentList} />
      </Router>
    </div>
  );
};

export default App;
