import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="light" light>
        <NavbarBrand href="/" className="mr-auto">
          Silent Auction
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              -<Link to="/">Login</Link>
            </NavItem>
            <NavItem>
              -<Link to="/signup">Sign-up</Link>
            </NavItem>
            <NavItem>
              -<Link to="/sellers/dash/:username">Seller Dash</Link>
            </NavItem>
            <NavItem>
              -<Link to="/bidders/dash/:username">Bidder Dash</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;