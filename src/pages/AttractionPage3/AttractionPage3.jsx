import "./AttractionPage3.css";

import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
  faStar,
  faCheck,
  faCalendarCheck,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Container } from "react-bootstrap";

const AttractionPage3 = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://r-xx.bstatic.com/xdata/images/xphoto/max1200/134514732.jpg?k=3a0e6990894a5d3eddc55a3512c361e3a839825f2aea6a20c8530ae30736d706&o=",
    },
    {
      src: "https://r-xx.bstatic.com/xdata/images/xphoto/max1200/134514763.jpg?k=44f1680146d81d42d8a132af54cb05877b32b5ebc39783870ded1bb4d35b1713&o=",
    },
    {
      src: "https://q-xx.bstatic.com/xdata/images/xphoto/max1200/134514811.jpg?k=33bc36ae573cf496d210245e0fd82a431344eea97225cc1734c71cc4bcfd0486&o=",
    },
    {
      src: "https://r-xx.bstatic.com/xdata/images/xphoto/max1200/134514824.jpg?k=b7157886ee2fb89067546650fa402224e96d10d7a8e8738f3d2cb29d31d83bd5&o=",
    },
    {
      src: "https://q-xx.bstatic.com/xdata/images/xphoto/max1200/134514839.jpg?k=04f7f5e338d7c319315a980a9f030aa800cfa4d20d84f426f52bc1d8679d141a&o=",
    },
    {
      src: "https://r-xx.bstatic.com/xdata/images/xphoto/max1200/134514959.jpg?k=b4f12c2ba16e10285f243014ef03407d0835207b5a3016afc537c6049d8cb267&o=",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>

      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
      
          <h1 className="hotelTitle">Luxury Sunrise Balloon Rides in Luxor</h1>
          <div className="hotelAddress mb-3">
          <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",fontSize:"25px"}} />
            <span style={{fontSize:"15px"}}>4.5 / 5
Fabulous
(69 reviews)</span>
          </div>
   
          
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <span className="hotelPriceHighlight"><FontAwesomeIcon icon={faCalendarCheck} style={{color: "#18f226", fontSize:"20px",marginRight:"5px"}} />
          Free cancellation available
          </span>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
        
              <p className="hotelDesc">
              Known as Egypt's open air museum, Luxor offers visitors the chance to experience the ancient world at its temples, monuments, and tombs. But few visitors get to see these historic sights from the sky. On this unparalleled hot air balloon adventure, see Luxor from high above the desert, and snap stunning photos in the morning light as you soar through the sky.
              Known as Egypt's open air museum, Luxor offers visitors the chance to experience the ancient world at its temples, monuments, and tombs. But few visitors get to see these historic sights from the sky. On this unparalleled hot air balloon adventure, see Luxor from high above the desert, and snap stunning photos in the morning light as you soar through the sky

              </p>
              <div>
              <h3>What's included</h3>
              <div className="hotelAddress mb-3">
              <FontAwesomeIcon icon={faCheck} style={{color: "#19fb09",fontSize:"25px"}} />
            <span style={{fontSize:"15px"}}>30 mins hot air balloon flight</span>
          </div>

          <div className="hotelAddress mb-3">
              <FontAwesomeIcon icon={faCheck} style={{color: "#19fb09",fontSize:"25px"}} />
            <span style={{fontSize:"15px"}}>If crossing by river boat</span>
          </div>

          <div className="hotelAddress mb-3">
              <FontAwesomeIcon icon={faCheck} style={{color: "#19fb09",fontSize:"25px"}} />
            <span style={{fontSize:"15px"}}>Flight certificate</span>
          </div>

          <div className="hotelAddress mb-3">
              <FontAwesomeIcon icon={faCheck} style={{color: "#19fb09",fontSize:"25px"}} />
            <span style={{fontSize:"15px"}}>All Fees and Taxes</span>
          </div>

          <div className="hotelAddress mb-3">
              <FontAwesomeIcon icon={faCheck} style={{color: "#19fb09",fontSize:"25px"}} />
            <span style={{fontSize:"15px"}}>Pick up from hotel/boat and drop off.</span>
          </div>
            </div>
            <div className="w-50">
            <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>How do i book a ticket</Accordion.Header>
        <Accordion.Body>
        Select a date and time.

Choose the number of tickets.

Click through to the next page and enter your personal details.

After entering your personal details, select your payment method and enter your payment details.

Once you’ve entered your payment details successfully, you will be redirected to your ticket page, where you can check the status and details of your reservations.

You'll receive a confirmation email once the reservation is confirmed with the attraction operator. This could take some time based on the supplier.

You can view your tickets in your confirmation email, or in the Booking & Trips section of your account.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>When do i pay</Accordion.Header>
        <Accordion.Body>
        Booking.com collects payment on behalf of the attraction operator when you book your ticket.
        </Accordion.Body>
      </Accordion.Item>

          <Accordion.Item eventKey="2">
        <Accordion.Header>How do digital tickets work</Accordion.Header>
        <Accordion.Body>
        Each digital ticket contains a unique code. This is usually a QR or numerical code, but could be something else and can be found on your ticket or the PDF sent to you.

If your digital ticket contains a barcode or QR code, give it to the staff at the attraction's entrance or ticket collection point so they can scan it.

For those with numerical codes, just show your ticket to staff for verification.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </div>
            </div>
          
            <div className="hotelDetailsPrice">
              <h1>Luxury Sunrise Balloon Rides in Luxor</h1>
              <span className="hotelPriceHighlight"><FontAwesomeIcon icon={faCalendarCheck} style={{color: "#18f226", fontSize:"20px",marginRight:"5px"}} />
          Free cancellation available
          </span>
          <span style={{fontSize:"14px"}}>Cancel for free before 27 February at 04:30 EET for a full refund</span>
              

          <span className="hotelPriceHighlight"><FontAwesomeIcon icon={faCircleCheck} style={{fontSize:"20px",marginRight:"5px"}}/>
          Pickup included
          </span>
          
          <div>
          <span>Language options</span>
          <Form.Select aria-label="Default select example">
      <option>English-Tourguide
      </option>
      <option value="1">French-Audio guide</option>
      <option value="2">French-written guide</option>
      <option value="3">German-Audio guide</option>
      <option value="3">German-written guide</option>
      <option value="3">Italin-Audio guide</option>
    </Form.Select>


          </div>

          <div >
            <span style={{marginRight:"16px"}}>Child 
EGP 1,854</span>
                    <button style={{width:"44",borderColor:"black",marginRight:"5px"}} >
                     +
                    </button>
                    <span>1</span>
                    <button style={{width:"44",borderColor:"black",marginLeft:"5px"}} >
                     -
                    </button>
                  </div>

                  <div >
            <span style={{marginRight:"16px"}}>Adult
EGP 1,854</span>
                    <button style={{width:"44",borderColor:"black",marginRight:"5px"}} >
                     +
                    </button>
                    <span>1</span>
                    <button style={{width:"44",borderColor:"black",marginLeft:"5px"}} >
                     -
                    </button>
                  </div>

 
            </div>

            
           
          </div>
          
         

<div>
  
</div>

        </div>
        

      </div>
    </div>
  );
};

export default AttractionPage3;
