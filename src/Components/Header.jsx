import React from 'react'
import { Nav,Container,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header() {
  return (
   <header >
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Link  to="/">Home</Link>
          {/* &nbsp mean non breaking space between two links */}
          &nbsp; 
          <Link to="checkout">Checkout</Link>
          </Nav>
        </Container>
      </Navbar>
   </header>
  )
}

export default Header
