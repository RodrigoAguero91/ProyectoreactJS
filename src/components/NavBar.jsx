import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <header>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/">Home</NavLink>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="category/Motos">Motos</NavLink>
                        <NavLink to="category/Autos">Autos</NavLink>
                        <NavLink to="category/Camioneta">Camionetas</NavLink>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>

        </header>
    )



}