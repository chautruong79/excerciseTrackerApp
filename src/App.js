import React from "react";
import Navbar from "./components/NavBar.js";
import AssignmentList from "./components/AssignmentList";
import EditAssignment from "./components/EditAssignment";
import CreateAssignment from "./components/CreateAssignment";
import SavedAssignment from "./components/SavedAssignment";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={AssignmentList} />
      <Route path="/edit/:id" component={EditAssignment} />
      <Route path="/create" component={CreateAssignment} />
      <Route path="/saved" component={SavedAssignment} />
    </Router>
  );
};

export default App;
