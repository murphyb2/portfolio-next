import React from "react";
import Nav from "./Nav";

const NavBar = () => {
  return (
    <Nav className="grid justify-items-center grid-cols-9">
      <Nav.Item className="col-start-4" to="/">
        projects
      </Nav.Item>
      <Nav.Item className="" to="/">
        about
      </Nav.Item>
      <Nav.Item className="" to="/">
        contact
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
