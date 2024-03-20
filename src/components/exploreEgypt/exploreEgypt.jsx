import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';

const ExploreEgypt = () => {
    const navigate = useNavigate()
    const handleClick = (city) => {
        navigate(`/hotels/${city}`)
        };
    return <>
    <Container className='pt-10 ' style={{ maxWidth: '1100px'}}>
                <div>
                <h3 style={{ fontWeight: 'bold' , fontSize:'25px'}}>Explore Egypt</h3>
                <h5 style={{ fontSize:'17px' , color:'#a2a2a2'}}>These popular destinations have a lot to offer</h5>
                </div>
        <Container className='flex space-x-4 pt-3'>
        <Card style={{ width: '10rem' }} className='border-0 cityCard' onClick={() => handleClick("alexandria")}>
            <img src="../../../public/images/alxsm.jpg" alt="" style={{borderRadius:'5px'}} />
            <div className='pt-2'>
            <Card.Title>Alexandria</Card.Title>
            <Card.Text className='text-muted'>
            70 properties
            </Card.Text>
            </div>
        </Card>

        <Card style={{ width: '10rem' }} className='border-0 cityCard' onClick={() => handleClick("hurghada")}>
            <img src="../../../public/images/hurghadasm.jpg" alt="" style={{borderRadius:'5px'}} />
            <div className='pt-2'>
            <Card.Title>Hurghada</Card.Title>
            <Card.Text className='text-muted'>
            150 properties
            </Card.Text>
            </div>
        </Card>

        <Card style={{ width: '10rem' }} className='border-0 cityCard' onClick={() => handleClick("cairo")}>
            <img src="../../../public/images/cairosm.jpg" alt="" style={{borderRadius:'5px'}} />
            <div className='pt-2'>
            <Card.Title>Cairo</Card.Title>
            <Card.Text className='text-muted'>
            200 properties
            </Card.Text>
            </div>
        </Card>

        <Card style={{ width: '10rem' }} className='border-0 cityCard' onClick={() => handleClick("sharmelsheikh")}>
            <img src="../../../public/images/sharmsm.jpg" alt="" style={{borderRadius:'5px'}} />
            <div className='pt-2'>
            <Card.Title>Sharm El Sheikh</Card.Title>
            <Card.Text className='text-muted'>
            180 properties
            </Card.Text>
            </div>
        </Card>

        <Card style={{ width: '10rem' }} className='border-0 cityCard' onClick={() => handleClick("dahab")}>
            <img src="../../../public/images/dahabsm.jpg" alt="" style={{borderRadius:'5px'}} />
            <div className='pt-2'>
            <Card.Title>Dahab</Card.Title>
            <Card.Text className='text-muted'>
            50 properties
            </Card.Text>
            </div>
        </Card>

        </Container>
    </Container>            

    </>
}

export default ExploreEgypt;
