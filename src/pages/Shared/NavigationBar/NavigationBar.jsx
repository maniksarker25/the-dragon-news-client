import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { authContext } from "../../../Providers/AuthProvider";

const NavigationBar = () => {
    const {user,logOut} = useContext(authContext);
    const handleLogOut = () =>{
      logOut()
    }
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
                <Link className="text-decoration-none text-dark mt-2" to="/category/0">
                  Home
                </Link> 
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center">
                {user && <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>}
                {user ? (
                  <Button onClick={handleLogOut} variant="secondary ms-2">Logout</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary ms-2">Login</Button>
                  </Link>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
