import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return <>
    <Navbar className ="bg-blue-900" data-bs-theme="dark" >
    <Container style={{ maxWidth: '1100px' }}>
            <Navbar.Brand href="/" style={{ fontWeight: 'bold' , fontSize:'25px' }}>Booking.com</Navbar.Brand>
            <Nav className="ms-auto ">
            <button className="ml-5 py-2 px-2 bg-white text-blue-800 rounded-sm"><NavLink to="/register" className={'text-decoration-none'}>Register</NavLink></button>
            <button className="ml-5 py-2 px-2 bg-white text-blue-800 rounded-sm"><NavLink to="/login" className={'text-decoration-none'}>Sign in</NavLink></button>
            </Nav>
    </Container>
    </Navbar>
    </>
}

export default Header;
