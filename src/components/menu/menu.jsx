import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import "/src/styles/menuStyle.css"
import { IoBedOutline , IoAirplaneOutline ,IoCarOutline } from "react-icons/io5";
import { MdOutlineAttractions } from "react-icons/md";
import { PiTaxi } from "react-icons/pi";
import { Col, Row } from 'react-bootstrap';


const Menu = () => {
    return <>
    <Container fluid className ="bg-blue-900  pb-4">
        <Container style={{ maxWidth: '1100px' }} >
            <Row>
                <Col lg="2">
        <NavLink to="/hotels" className={({ isActive }) => `d-flex align-items-center justify-center ${(isActive) ? 'menuButtonActive' : 'menuButton'}`}>
            <IoBedOutline className='fs-4' />
            <span className='ms-2'>Stays</span>
        </NavLink>
                </Col>
                <Col lg="2">
        <NavLink to="/searchflights" className={({ isActive }) => `d-flex align-items-center justify-center ${(isActive) ? 'menuButtonActive' : 'menuButton'}`}>
            <IoAirplaneOutline className='fs-4' />
            <span className='ms-2'>Flights</span>
        </NavLink>
                </Col>
                <Col lg="2"> 
        <NavLink to="/carrental" className={({ isActive }) => `d-flex align-items-center justify-center ${(isActive) ? 'menuButtonActive' : 'menuButton'}`}>
            <IoCarOutline className='fs-4' />
            <span className='ms-2'>Car rentals</span>
        </NavLink>
        </Col>
        <Col lg="2">
        <NavLink to="/attractions" className={({ isActive }) => `d-flex align-items-center justify-center ${(isActive) ? 'menuButtonActive' : 'menuButton'}`}>
            <MdOutlineAttractions className='fs-4' />
            <span className='ms-2'>Attractions</span>
        </NavLink>
        </Col>
        <Col lg="2">
        <NavLink to="/airporttaxis" className={({ isActive }) => `d-flex align-items-center justify-center ${(isActive) ? 'menuButtonActive' : 'menuButton'}`}>
            <PiTaxi className='fs-4' />
            <span className='ms-2'>Airport taxis</span>
        </NavLink>
        </Col>
        </Row>
        </Container>
    </Container>
    </>
}

export default Menu;
