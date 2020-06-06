import React from "react";

const NavBar = () => {
  return (
    <nav className="sticky-top b bt bb tc mw7 center mt4 black-80 avenir">
      <a
        className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
        href="/"
      >
        Home
      </a>
      <a
        className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
        href="/saved"
      >
        Saved Assignments
      </a>
      <a
        className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
        href="/create"
      >
        Create New Assignment
      </a>
    </nav>
  );
};

export default NavBar;
