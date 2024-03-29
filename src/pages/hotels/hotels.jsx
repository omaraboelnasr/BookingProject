import SearchForm from "../../components/searchForm/searchForm";
import { TiTick } from "react-icons/ti";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllHotels} from "../../services/hotels";


const Hotels = () => {
    const [hotels,setHotels]=useState([])
    const navigate = useNavigate()

    const location = useLocation();
    const { destination:city, date, options } = location.state|| {};
    const getHotelsByCity =async () => {
        try{
            if(!city){
                navigate('/')
            }
        var hotelsData = await getAllHotels(city)
        setHotels(hotelsData)
        }catch(err){
            console.log(err)
        }}

        useEffect(()=>{
            getHotelsByCity()
        },[city])

        const handleGetRooms=(hotelId)=>{
            navigate(`/rooms/${hotelId}`, { state: { destination:city, date, options } });
        }

    return <>
<div className=" relative">
<div className =" bg-blue-900 mb-3">
    <SearchForm/>
    </div>
    {hotels.map((hotel)=>(
        <div key={hotel._id} className="flex  justify-between pt-5 max-w-[990px] mx-auto ">
        <div className="mt-4   mb-5">
            <div className="flex border rounded-md p-3 h-auto w-full hover:bg-blue-200 hover:shadow-md">
                <div  className="self-center w-[50%] mr-2 h-full">
                <img className="w-full rounded-md" src={hotel.hotelMainImage} alt="" />
                </div>
                
                <div className="p-0 m-0">
                    <h4 className=" font-bold text-blue-800">{hotel.hotelName}</h4>
                    <div className="flex">
                    <p className=" text-blue-500 text-decoration-underline mr-2">{hotel.hotelAddress}</p>
                    <p className="text-muted">{hotel.distanceFromCenter} Km from center</p>
                    </div>
                    <div className=" hidden">{hotel.hotelCity}</div>
                    <div>
                    <p  className="p-0 m-0">{hotel.hotelSubDescription}</p>
                        
                    </div>
                </div>
                
                <div className="flex flex-col  p-0 w-[35%]">
                    
                        <div  className="flex space-x-4 mb-2">
                        <div className="">
                            <p className=" font-semibold p-0 m-0">Good</p>
                            <p className="p-0 m-0">50 reviews</p>
                        </div>
                        <div>
                        <div  className="p-1 mt-1 bg-blue-800 text-white rounded-lg">7.9</div>
                        </div>
                        </div>
                        <div >
                    <button className=" bg-blue-600 pt-2 pb-1 rounded-lg mt-2" onClick={()=>handleGetRooms(hotel._id)}>{`${"See availability >"}`}</button>
                        </div>                 
                </div>
            </div>
        </div>
        </div>
    ))}
</div>
    </>
}

export default Hotels;
