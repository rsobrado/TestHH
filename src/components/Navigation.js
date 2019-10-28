import React, { useState } from 'react';
import { ReactComponent as Logo}  from '../images/logo.svg';
import './Navigation.scss';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
 } from 'reactstrap';


const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="Navigation">
      <header className="Navigation-header">
        <Container>
          <Navbar  expand="md">
            <NavbarBrand href="/">
            <Logo />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#">Duis vestibulum</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Phasellus consequat</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Donec sit amet lectus</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </header>
    </div>
  );
}

export default Navigation;
