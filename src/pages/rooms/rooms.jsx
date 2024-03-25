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
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getHotel } from '../../services/hotels';
import { useEffect } from 'react';
import { listRooms } from '../../services/rooms';

const Rooms = () => {
        const [hotel,setHotel]=useState([])
        const [rooms,setRooms] = useState([])
        const {id} = useParams()

        const location = useLocation();
        const getTheHotel = async ()=>{
            try{
                var hotelData = await getHotel(id)
                setHotel(hotelData)
            }catch(err){
                    console.log(err)
                }}
        const getRooms = async ()=>{
            try{
                var roomsData = await listRooms(id)
                setRooms(roomsData)
            }catch(err){
                    console.log(err)
            }}
            
            useEffect(()=>{
                    getTheHotel()
                    getRooms()
            },[])

    return <>
        <Container style={{maxWidth: '1000px'}} className="pt-20 flex flex-col justify-around">
                <Container>
                    <Row>
                        <Col >
                            <div className='flex justify-between'>
                                <div className='flex'>
                                <h2>{hotel.hotelName}</h2>
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
                            <p>{hotel.hotelAddress}</p>
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
                        <p>{hotel.hotelDescription}</p>
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
                        <SearchInRoom searchHistory={location}/>
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
                                {rooms.map((room)=>(
                                    <tr key={room._id}>
                                        <td>{room.roomType} with {room.bedType}</td>
                                        <td className='flex'>{room.guestNumber===1?<IoPersonSharp />
                                                            :room.guestNumber===2?<><IoPersonSharp /><IoPersonSharp /></>
                                                            :room.guestNumber===3?<><IoPersonSharp /><IoPersonSharp /><IoPersonSharp /></>
                                                            :<><IoPersonSharp /><IoPersonSharp /><IoPersonSharp /><IoPersonSharp /></>}</td>
                                        <td>EGP {room.price}</td>
                                        <td>
                                    <p style={{color:'green' , fontWeight:'bold'}} className="p-0 m-0">Breakfast included</p>
                                    <p style={{color:'green'}} className="p-0 m-0"><span><TiTick className="inline"/></span>Free cancellation</p>
                                    <p style={{color:'green'}} className="p-0 m-0"><span><TiTick className="inline"/></span>No prepayment needed - <span style={{fontSize:"15px"}}>pay at the property</span></p>
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
                                    ))}
                            </tbody>
                        </Table>
                        </Col>
                    </Row>
                </Container>
        </Container>
    </>
}

export default Rooms;
