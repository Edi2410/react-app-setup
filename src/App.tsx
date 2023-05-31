import React from "react";
import { RoutesList } from "components";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar className="bg-warning" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://www.freeiconspng.com/uploads/pikachu-transparent-28.png"
              width="40"
              height="40"
              className="d-inline-block align-centar me-2"
              alt=""
            />
            React Bootstrap
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutme">About Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <RoutesList />
    </div>
  );
}

export default App;
