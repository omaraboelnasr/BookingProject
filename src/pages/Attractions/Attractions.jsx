import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./attraction.css"
import {
    faCalendarDays,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';

const Attractions = () => {

  const destinations = [
    { 
      name: "Dahab", 
      image: "https://media.cnn.com/api/v1/images/stellar/prod/200611101955-01-egypt-dahab.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_618" 
    },
    { 
      name: "Aswan", 
      image: "https://r-xx.bstatic.com/xdata/images/xphoto/max1200/131493349.jpg?k=12d4887d4648d29248b386e08c10c19ec607f0283deddc949c57a84cdc87d8d9&o=" 
    },
    { 
      name: "Cairo", 
      image: "https://q-xx.bstatic.com/xdata/images/xphoto/max1200/119194433.jpg?k=6e9111ee21438ce97cd7753855a9e68e8d4de75d76a022e2b71f4fb953ed251a&o=" 
    },
    { 
      name: "Marsa Alam", 
      image: "https://q-xx.bstatic.com/xdata/images/xphoto/max1200/289421276.jpg?k=4a093d72a5296290b51f1fcd5a3ef1352d60c7fcfb42671649036d5efb076750&o=" 
    }
 
  ];


  const Destinations = [
    {
      name: "Dahab",
      image: "https://media.cnn.com/api/v1/images/stellar/prod/200611101955-01-egypt-dahab.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_618",
      properties: 532
    },
    {
      name: "Aswan",
      image: "https://r-xx.bstatic.com/xdata/images/xphoto/max1200/131493349.jpg?k=12d4887d4648d29248b386e08c10c19ec607f0283deddc949c57a84cdc87d8d9&o=",
      properties: 532
    },
    {
      name: "Cairo",
      image:"https://q-xx.bstatic.com/xdata/images/xphoto/max1200/119194433.jpg?k=6e9111ee21438ce97cd7753855a9e68e8d4de75d76a022e2b71f4fb953ed251a&o=",
      properties:1233 
    },
    {
      name:"Luxor",
      image:"https://q-xx.bstatic.com/xdata/images/xphoto/max1200/127809683.jpg?k=bc8395e350d2e5707640953b62d3404e5342375dc7156aa1613ae922222e084e&o=",
      properties:321
    },
    {
      name:"Marsa Alam",
      image:"https://q-xx.bstatic.com/xdata/images/xphoto/max1200/289421276.jpg?k=4a093d72a5296290b51f1fcd5a3ef1352d60c7fcfb42671649036d5efb076750&o=",
      properties:412
    },
    {
      name:"Hurghada",
      image:"https://r-xx.bstatic.com/xdata/images/xphoto/max1200/131526321.jpg?k=1b810b2dea0c7be549676faffafb5e5c00f71cfe5f70cefd0e3c26a445f7e153&o=",
      properties:543
    }
    // Add more destinations as needed
  ];
  

    const navigate = useNavigate()

  const handleClick = () => {

    navigate('/attractions/list')
  };

    return (
        <>
<Container fluid>
<Container style={{marginTop:"33px"}} className="mx-auto" >
  <h4>Nearby destinations</h4>
  <Row xs={1} md={3}>
    {Destinations.map((Destinations, index) => (
      <Col key={index}>
        <Card style={{ width: '20rem' }} className="m-2 w-100">
          <div className="featuredItem">
            <img
              src={Destinations.image}
              alt={Destinations.name}
              className="featuredImg"
              onClick={() => handleClick(Destinations.name)}
            />
            <div className="featuredTitles">
              <h3>{Destinations.name}</h3>
              <h4>{Destinations.properties} properties</h4>
            </div>
          </div>
        </Card>
      </Col>
    ))}
  </Row>
</Container>
    <Container style={{marginTop:"40px"}}>
    <Card body>
    <h5>We've got you covered</h5>
    <Row xs={1} md={3}>
        <Col>
    <h6>Explore top attractions</h6>
    <p>Experience the best of your destination, with attractions, tours, activities and more</p>
</Col>
<Col>
    <h6><span><FontAwesomeIcon icon={faCalendarDays} /></span> Fast and flexible</h6>
    <p>Book tickets online in minutes, with free cancellation on many attractions</p>
</Col>

<Col>
    <h6>Support when you need it</h6>
    <p>Booking.coms global Customer Service team is here to help 24/7</p>

</Col>
      </Row>
        </Card>
    </Container>

<Container style={{ marginTop: "40px", width: "100%" }} className='w-100'>
  <h5>Explore more destinations</h5>
  <p>Find things to do in cities around the world</p>

  {Array.from({ length: 12 }).map((_, rowIndex) => (
    <Row xs={1} md={4} className="g-4 mb-2" key={rowIndex}>
      {destinations.map((destination, index) => (
        <Col key={index}>
          <div className="featuredItem">
            <img
              src={destination.image}
              alt={destination.name}
              className="featuredImg"
              onClick={() => handleClick(destination.name)}
            />
            <div className="featuredTitles">
              <h3>{destination.name}</h3>
              <h4>532 properties</h4>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  ))}
</Container>
    </Container>
        </>
    );

}

export default Attractions;
