
 import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
// import fantasy from '../data/fantasy.json';
// import history from '../data/history.json';
// import horror from '../data/horror.json';
// import romance from '../data/romance.json';
// import sciFi from '../data/scifi.json';
// import { Component } from "react";

const MyNav = (props) => {

        return (
            <Navbar expand="lg">
            <Container fluid="md">
                <Navbar.Brand href="#">EpicBooks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Browse</Nav.Link>
                    <NavDropdown title="Categories" id="navbarScrollingDropdown">

                    
                    {props.categories}
                   
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
    
}

export default MyNav