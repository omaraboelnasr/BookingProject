import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { MdOutlineAirportShuttle , MdOutlineRoomService ,MdBalcony ,MdOutlineCoffeeMaker,MdOutlineFreeBreakfast} from "react-icons/md";
import { LiaSmokingBanSolid } from "react-icons/lia";
import { RiRestaurantLine } from "react-icons/ri";
import { GrWifi } from "react-icons/gr";
import { BiDrink } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import Badge from 'react-bootstrap/Badge';

import SearchInRoom from '../../components/searchInRoom/searchInRoom';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

const Rooms = () => {
    return <>
        <Container style={{maxWidth: '1000px'}} className="pt-20 flex flex-col justify-around">
                <Container>
                    <Row>
                        <Col >
                            <div className='flex justify-between'>
                                <div className='flex'>
                                <h2>Pyramids express view Inn</h2>
                                <div className='flex ms-3 mt-2' style={{color:"#febb02"}}><FaStar/><FaStar/><FaStar/></div>
                                </div>
                                <div  className="flex space-x-4 ">
                                <div>
                                    <p className="p-0 m-0">Good</p>
                                    <p className="p-0 m-0">50 reviews</p>
                                </div>
                                <div>
                                <Badge bg="primary" className="p-2 fs-6 mt-1">7.9</Badge>
                                </div>
                            </div>
                            </div>
                            <div className='flex mt-2'>
                            <MdLocationPin className='fs-3 text-blue-900' />
                            <p>Giza - Cairo - Egypt</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='pt-3'>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="../../../public/images/hotel1.jpeg"
                                    alt="Third slide"
                                    style={{width:'800px',height:'500px'}}
                                    />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="../../../public/images/hotel2.jpg"
                                alt="Third slide"
                                style={{width:'800px',height:'500px'}}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="../../../public/images/hotel3.jpg"
                                alt="Third slide"
                                style={{width:'800px',height:'500px'}}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="../../../public/images/hotel3.jpg"
                                alt="Third slide"
                                style={{width:'800px',height:'500px'}}
                                />
                            </Carousel.Item>
                        </Carousel>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className='pt-4'>
                        <h5>Description</h5>
                        <p>Pyramids express view Inn features a garden, terrace, a restaurant and bar in Cairo. With free WiFi, this 3-star hotel offers room service and an ATM. The property is allergy-free and is located 700 metres from Great Sphinx.</p>
                        <p>All units are equipped with air conditioning, a flat-screen TV with satellite channels, a fridge, a kettle, a shower, free toiletries and a desk. All rooms include a wardrobe.</p>
                        <p>Breakfast is available daily, and includes continental, American and Asian options.</p>
                        <p>Staff at the 24-hour front desk speak Arabic, German, English and Spanish.</p>
                        <p>Giza Pyramids is 4.8 km from the hotel, while Cairo Tower is 14 km away. The nearest airport is Cairo International Airport, 30 km from Pyramids express view Inn.</p>
                        </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className='pt-4'>
                            <h5>Most popular facilities</h5>
                            <div className='flex flex-wrap'>
                                <p className='me-3'> <MdOutlineAirportShuttle className='inline-block me-1 text-green-500 fs-4' />Airport shuttle (free)</p>
                                <p className='me-3'><LiaSmokingBanSolid className='inline-block me-1 text-green-500 fs-4' />Non-smoking rooms</p>
                                <p className='me-3'><MdOutlineRoomService className='inline-block me-1 text-green-500 fs-4' />Room service</p>
                                <p className='me-3'> <RiRestaurantLine className='inline-block me-1 text-green-500 fs-4' />Restaurant</p>
                                <p className='me-3'><GrWifi className='inline-block me-1 text-green-500 fs-4' />Free WiFi</p>
                                <p className='me-3'><BiDrink className='inline-block me-1 text-green-500 fs-4' />Bar</p>
                                <p className='me-3'><MdBalcony className='inline-block me-1 text-green-500 fs-4' />Terrace</p>
                                <p className='me-3'><MdOutlineCoffeeMaker className='inline-block me-1 text-green-500 fs-4' />Tea/coffee maker in all rooms</p>
                                <p className='me-3'><MdOutlineFreeBreakfast className='inline-block me-1 text-green-500 fs-4' />Breakfast</p>
                            </div>
                        </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col className='mt-4'>
                        <h5>Availability</h5>
                        <SearchInRoom/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mt-4'>
                        <h5>Rooms</h5>
                        <Table bordered >
                            <thead>
                            <tr>
                                <th>Room type	</th>
                                <th>Number of guests</th>
                                <th>Today price</th>
                                <th>Your choices</th>
                                <th>Select rooms</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Standard Double Room with Two single Beds</td>
                                <td className='flex'><IoPersonSharp /><IoPersonSharp /></td>
                                <td>EGP 500</td>
                                <td>
                                    <p style={{color:'green' , fontWeight:'bold'}} className="p-0 m-0">Breakfast included</p>
                                    <p style={{color:'green'}} className="p-0 m-0"><span><TiTick className="inline"/></                 span>Free cancellation</p>
                                    <p style={{color:'green'}} className="p-0 m-0"><span><TiTick className="inline"/></                 span>No prepayment needed - <span style={{fontSize:"15px"}}>pay at the property</span></p>
                                </td>
                                <td>
                                    <Form.Select aria-label="Default select example">
                                        <option>0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Form.Select>
                                </td>
                                </tr>
                                <tr>
                                <td>Standard Double Room with Two Double Beds</td>
                                <td className='flex'><IoPersonSharp /><IoPersonSharp /><IoPersonSharp /><IoPersonSharp /></td>
                                <td>EGP 783</td>
                                <td>
                                    <p style={{color:'green' , fontWeight:'bold'}} className="p-0 m-0">Breakfast included</p>
                                    <p style={{color:'green'}} className="p-0 m-0"><span><TiTick className="inline"/></                 span>Free cancellation</p>
                                    <p style={{color:'green'}} className="p-0 m-0"><span><TiTick className="inline"/></                 span>No prepayment needed - <span style={{fontSize:"15px"}}>pay at the property</span></p>
                                </td>
                                <td>
                                    <Form.Select aria-label="Default select example">
                                        <option>0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Form.Select>
                                </td>
                                </tr>
                            </tbody>
                        </Table>
                        </Col>
                    </Row>
                </Container>
        </Container>
    </>
}

export default Rooms;
