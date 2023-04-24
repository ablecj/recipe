import React from 'react'
import { Nav,Container,Navbar } from 'react-bootstrap';

function Header() {
  return (
   <header >
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Checkout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   </header>
  )
}

export default Header
