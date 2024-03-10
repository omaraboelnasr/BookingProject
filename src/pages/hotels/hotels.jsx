import { Col, Container, Row } from "react-bootstrap";
import SearchForm from "../../components/searchForm/searchForm";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { TiTick } from "react-icons/ti";
import Badge from 'react-bootstrap/Badge';
import { NavLink } from "react-router-dom";

const Hotels = () => {
    return <>
    <Container fluid className ="bg-blue-900  pb-5">
    <SearchForm/>
    </Container>
    <Container style={{maxWidth: '890px'}} className="pt-20 flex flex-col justify-around">
    <Card style={{ width: '54rem' ,padding:"10px" , marginTop:"15px"}} >
        <Row>
            <Col lg="3" className="self-center space-x-1">
            <img src="../../../public/images/hotel1.jpeg" alt="" />
            </Col>
            <Col lg="6">
            <Card.Body>
                <Card.Title>Comfort Pyramids&Sphinx Inn</Card.Title>
                <Card.Text className="text-muted">11.7 Km from center</Card.Text>
                <div style={{borderLeft:'3px solid #e0e0e0'}}>
                    <div className="ms-2">
                <h5 className="p-0 m-0">Standerd Douple Room</h5>
                <p className="p-0 m-0">2 single beds</p>
                <p style={{color:'green' , fontWeight:'bold'}} className="p-0 m-0">Breakfast included</p>
                <p style={{color:'green'}} className="p-0 m-0"><span><TiTick className="inline"/></span>Free cancellation</p>
                <p style={{color:'green'}} className="p-0 m-0"><span><TiTick className="inline"/></span>No prepayment needed - <span style={{fontSize:"15px"}}>pay at the property</span></p>
                    </div>
                </div>
            </Card.Body>
            </Col>
            <Col lg="3">
                <div className="flex flex-col justify-between" style={{width:"100%" , height:'100%'}}>
                    <div  className="flex space-x-4">
                    <div>
                        <p className="p-0 m-0">Good</p>
                        <p className="p-0 m-0">50 reviews</p>
                    </div>
                    <div>
                    <Badge bg="primary" className="p-2 fs-6 mt-1">7.9</Badge>
                    </div>
                    </div>
                    <div >
                    <p className="text-muted p-0 m-0">1 night, 1 adult</p>
                    <h3 className="p-0 m-0">EGP 603</h3>
                <Button variant="primary" ><NavLink to={"/hotels/rooms"} style={{color:'white',textDecoration:'none'}}>{`${"See availability >"}`}</NavLink></Button>
                    </div>
                </div>
            </Col>
        </Row>
    </Card>
    </Container>
    </>
}

export default Hotels;
