import { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";


export function Header (){

  const isAuthenticated = useIsAuthenticated()

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Small Hotel</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home </Nav.Link>
          <Nav.Link as={Link} to="/rooms">Rooms </Nav.Link>
          {isAuthenticated ? <Nav.Link as={Link} to="/menu">Menu</Nav.Link>: "Not authenticated"}
          </Nav>
      </Container>
      {isAuthenticated ? <SignOutButton /> : <SignInButton />}
    </Navbar>
  )
}

export default Header;