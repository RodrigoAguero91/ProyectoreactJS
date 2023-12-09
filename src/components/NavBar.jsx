import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <header>
            <Navbar bg="light" data-bs-theme="light" style={{ textTransform:"uppercase"  }}>
                <Container >
                    <Navbar.Brand>
                        <NavLink to="/" style={{ textDecoration:"none"  }}>Venta de Automoviles</NavLink>
                    </Navbar.Brand>
                    <Nav className="me-auto"  >
                        <NavLink to="category/Motos" style={{ textDecoration:"none", marginLeft:"30px"}} >Motos</NavLink>
                        <NavLink to="category/Autos"style={{ textDecoration:"none", marginLeft:"30px"}}>Autos</NavLink>
                        <NavLink to="category/Camioneta"style={{ textDecoration:"none",marginLeft:"30px" }}>Camionetas</NavLink>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>

        </header>
    )



};


        
    