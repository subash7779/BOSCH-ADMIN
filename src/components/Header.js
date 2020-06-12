import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const header = (props) => {
	//console.log(props);
	return (
	    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
		  <Navbar.Brand href="#home">Logo</Navbar.Brand>
		  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav" >
		    <Nav className="ml-auto">
		      <Nav.Link eventKey={2} href="#">
		        K Subash Chandra
		      </Nav.Link>
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
    );
};

export default header;