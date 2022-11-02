import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const NavBar = () => {
  return (
    <>
      <Navbar color="dark" dark>
        <div className="container">
          <NavbarBrand href="/">Redblock</NavbarBrand>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
