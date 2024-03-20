import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import "../../styles/textStyle.css";
import "../../styles/cardStyle.css";
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';

const TrendingDest = () => {

    const navigate = useNavigate()
    const handleClick = (city) => {
    navigate(`/hotels/${city}`)
    };
    return <>
            <Container className='pt-20' style={{ maxWidth: '1100px'}}>
                <div>
                <h3 style={{ fontWeight: 'bold' , fontSize:'25px'}}>Trending destinations</h3>
                <h5 style={{ fontSize:'17px' , color:'#a2a2a2'}}>Most popular choices for travellers from Egypt</h5>
                </div>
                <Container className='pt-3 flex space-x-4'>
                <Card className="text-white cityCard" style={{ width: '34rem' }} onClick={() => handleClick("cairo")}>
                    <Card.Img src="../../../public/images/cairo.jpg" alt="Card image"  />
                    <Card.ImgOverlay>
                    <Card.Title style={{ fontWeight: 'bold' , fontSize:'25px'}} className='textShadow' >Cairo</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                <Card className="text-white cityCard" style={{ width: '34rem' }} onClick={() => handleClick("hurghada")}>
                    <Card.Img src="../../../public/images/hurghada.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                    <Card.Title style={{ fontWeight: 'bold' , fontSize:'25px'}} className='textShadow'>Hurghada</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                </Container>
                <Container className='pt-3 flex space-x-4'>
                <Card className="text-white cityCard" style={{ width: '25rem' }} onClick={() => handleClick("alexandria")}>
                    <Card.Img src="../../../public/images/alex.jpg" alt="Card image" style={{ width: '354px' , height:'255px'}}/>
                    <Card.ImgOverlay>
                    <Card.Title style={{ fontWeight: 'bold' , fontSize:'25px'}} className='textShadow' >Alexandria</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                <Card className="text-white cityCard" style={{ width: '25rem' }} onClick={() => handleClick("sharmelsheikh")}>
                    <Card.Img src="../../../public/images/sharm.jpeg" alt="Card image" style={{ width: '354px' , height:'255px'}} />
                    <Card.ImgOverlay>
                    <Card.Title style={{ fontWeight: 'bold' , fontSize:'25px'}} className='textShadow'>Sharm El Sheikh</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                <Card className="text-white cityCard" style={{ width: '25rem' }} onClick={() => handleClick("dahab")}>
                    <Card.Img src="../../../public/images/daha.jpg" alt="Card image" style={{ width: '354px' , height:'255px'}}/>
                    <Card.ImgOverlay>
                    <Card.Title style={{ fontWeight: 'bold' , fontSize:'25px'}} className='textShadow'>Dahab</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                </Container>
            </Container>            

    </>
}
export default TrendingDest;
