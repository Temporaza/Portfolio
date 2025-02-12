import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function NavBar() {
  return (
    <Navbar className="fixed-top w-auto">
      <Nav
        style={{
          border: "solid 2px #fba518",
          backgroundColor: "#5E686D",
        }}
        className="d-flex flex-nowrap justify-content-center mx-auto rounded px-2 mx-2"
      >
        <NavItem className="">
          <NavLink className="nav-txt" href="#home">
            Home
          </NavLink>
        </NavItem>
        <NavItem className="">
          <NavLink className="nav-txt" href="#about">
            Project
          </NavLink>
        </NavItem>
        <NavItem className="">
          <NavLink className="nav-txt" href="#contact">
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
