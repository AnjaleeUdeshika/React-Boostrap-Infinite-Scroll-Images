import React from "react";
 
import { Button } from "react-bootstrap";
import { Container, Navbar, Nav, NavDropdown, Form,FormControl } from 'react-bootstrap';

function NavBar() {
    return (
      <div >

    {/*--------------------Nav-Bar--------------------------*/}

        <h2>Responsive Behavior NavBar 1 - Dark Theme</h2>
            <Navbar className="Nav-Bar-Responsive-Behaviors" collapseOnSelect expand="lg" bg="dark" variant="dark">
            
            <Container>
                
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">  
                <Nav className="me-auto">
                    
                    <Nav.Link href="#features">Features</Nav.Link>
                        
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                            Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    </Nav>

                    
                </Navbar.Collapse>
                
                <Nav>
                    
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-warning">Search</Button>
                    </Form>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>    
      </div>
    );
  }
  
  export default NavBar;