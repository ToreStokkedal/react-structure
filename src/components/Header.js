import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";


export function Header (){

  const isAuthenticated = useIsAuthenticated()
  return (
    <div>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Critical applications</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home </Nav.Link>
          <Nav.Link as={Link} to="/applications">Applicaitions </Nav.Link>
          <Nav.Link as={Link} to="/play">Play </Nav.Link>
          {isAuthenticated ? <Nav.Link as={Link} to="/locations">Locations</Nav.Link>: "Not authenticated"}
          </Nav>
          {isAuthenticated ? <SignOutButton /> : <SignInButton />}
      </Container>  
    </Navbar>
    </div>
  )
}

export default Header;