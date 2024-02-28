import Container from 'react-bootstrap/Container';
import "../../styles/stayesHeader.css";
import SearchForm from '../searchForm/searchForm';

const StayesHeader = () => {
    return <>
        <Container fluid className ="bg-blue-900 pt-5 pb-10">
            <Container style={{ maxWidth: '1100px' }}>
                <h1 style={{ fontWeight: 'bold' , fontSize:'50px', color:'white'}}>Find your next stay</h1>
                <h5 style={{ fontSize:'25px', color:'white'}}>Search low prices on hotels, homes and much more...</h5>
            </Container>            
            <SearchForm/>
        </Container>
    </>
}

export default StayesHeader;
