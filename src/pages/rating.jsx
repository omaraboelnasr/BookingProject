import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Rating = ({stars,reviews}) => {
  
    const rating = Array.from({length:5},(ele,index) => {
        let number=index + 0.5;

        return (
            <span key={index}>
                {stars >= index +1 ? (
                    <FaStar className="flex flex-row ms-3 mt-2"
										style={{ color: "#febb02" }} />
                ): stars >= number ? (
                   <FaStarHalf  className="flex flex-row  ms-3 mt-2"
										style={{ color: "#febb02" }} /> 
                ) : (
                    <AiOutlineStar  className="flex flex-row  ms-3 mt-2"
										style={{ color: "#febb02" }} />
                )
                }

            </span>
        )
    })


    return (
   

             <div className="flex flex-row ms-1 mt-1">
                {rating}
                {/* <p>({reviews} )</p> */}
            </div>
       
      
       
    );
}

export default Rating;
