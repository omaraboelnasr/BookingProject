import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const PropertyType = () => {
    return <>
    <Container className='pt-10 ' style={{ maxWidth: '1100px'}}>
                <div>
                <h3 style={{ fontWeight: 'bold' , fontSize:'25px'}}>Browse by property type</h3>
                </div>
        <Container className='flex space-x-4 pt-3'>
        <Card style={{ width: '18rem' }} className='border-0 cityCard'>
            <img src="../../../public/images/hotelsm.jpeg" alt="" style={{borderRadius:'5px'}} />
            <div className='pt-2'>
            <Card.Title>Hotels</Card.Title>
            </div>
        </Card>

        <Card style={{ width: '18rem' }} className='border-0 cityCard'>
            <img src="../../../public/images/apartsm.jpeg" alt="" style={{borderRadius:'5px'}} />
            <div className='pt-2'>
            <Card.Title>Apartments</Card.Title>
            </div>
        </Card>

        <Card style={{ width: '18rem' }} className='border-0 cityCard'>
            <img src="../../../public/images/resortssm.jpeg" alt="" style={{borderRadius:'5px'}} />
            <div className='pt-2'>
            <Card.Title>Resorts</Card.Title>
            </div>
        </Card>

        <Card style={{ width: '18rem' }} className='border-0 cityCard'>
            <img src="../../../public/images/villassm.jpeg" alt="" style={{borderRadius:'5px'}} />
            <div className='pt-2'>
            <Card.Title>Villas</Card.Title>
            </div>
        </Card>
        </Container>
    </Container>            

    </>
}

export default PropertyType;
