import React from "react";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary"
      style={{ backgroundColor: "violet" }}
    >
      <a className="navbar-brand" href="/">
        Assignment Tracker
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Assignments <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/saved">
              Saved Assignments
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/create">
              Create New Assignment
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success  bg-primary "
            style={{ color: "#36012e" }}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
