import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <header>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Venta/permuta de Automoviles</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Motos</Nav.Link>
                        <Nav.Link href="#features">Autos</Nav.Link>
                        <Nav.Link href="#pricing">Camionetas</Nav.Link>
                    </Nav>
                    <CartWidget/>
                </Container>
            </Navbar>
           
        </header>
    )
        

    
}