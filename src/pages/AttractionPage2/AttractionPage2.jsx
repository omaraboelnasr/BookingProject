
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import "./AttractionPage2.css";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

const AttractionPage2 = () => {
  const navigate = useNavigate();

  const attractions = [
    {
      id: 1,
      title: "Luxury Sunrise Balloon Rides in Luxor",
      subtitle: "Known as Egypt's open air museum, Luxor offers visitors the chance to experience the ancient world...",
      features: "Entire studio • 1 bathroom • 21m² 1 full bed",
      cancelOp: "4.5 / 5 Fabulous (69 reviews)",
      cancelOpSubtitle: "Free cancellation available",
      price: "112.EG",
      imgSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/f0/2d/da/caption.jpg?w=1200&h=-1&s=1"
    },
 
  ];

  const handleClick = () => {
    navigate('/attractions/AttractionPage3');
  };

  const renderAttractionCard = (attraction, index) => (
    <Card.Body key={index}>
      <div className="searchItem">
        <img
          src={attraction.imgSrc}
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">{attraction.title}</h1>
          <span className="siSubtitle">{attraction.subtitle}</span>
          <span className="siFeatures">{attraction.features}</span>
          <span className="siCancelOp">{attraction.cancelOp}</span>
          <span className="siCancelOpSubtitle">{attraction.cancelOpSubtitle}</span>
        </div>
        <div className="siDetails">
          <div className="siRating"></div>
          <div className="siDetailTexts">
            <span className="siPrice">{attraction.price}</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={handleClick}>See availability</button>
          </div>
        </div>
      </div>
    </Card.Body>
  );

  const repeatedCards = Array.from({ length: 7 }).map((_, index) => renderAttractionCard(attractions[index % attractions.length], index));

  return (
    <Card>
      {repeatedCards}
    </Card>
  );
};

export default AttractionPage2;

