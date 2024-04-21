import SearchForm from "../../components/searchForm/searchForm";
import { TiTick } from "react-icons/ti";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllHotels} from "../../services/hotels";
import { useTranslation } from "react-i18next";



const Hotels = () => {
    const { t, i18n } = useTranslation();
    const [hotels, setHotels] = useState([]); 
    const [selectedStars , setSelectedStars] = useState([])
    const navigate = useNavigate()

    const location = useLocation();
    const { destination:city, date, options } = location.state|| {};

    useEffect(() => {
        const getHotelsByCity = async () => {
            try {
                if(!city) {
                    navigate('/');
                    return;
                }
                const hotelsData = await getAllHotels(city);
                setHotels(hotelsData);
            } catch(err) {
                console.log(err);
            }
        };
        getHotelsByCity();
    }, [city, navigate]);

    const handleGetRooms = (hotelId) => {
        navigate(`/rooms/${hotelId}`, { state: { destination:city, date, options } });
    }

    const handleStarFilter = (event)=>{
        const starRating = event.target.value;
            const filterStar = hotels.filter((hotel)=> hotel.hotelRating == starRating)
            setHotels(filterStar);
    }
    return (
        <div>
            <div className="bg-blue-900 mb-5">
                <SearchForm/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 pt-5">
                    <div className="rounded-lg border border-slate-300 p-5 h-fit sticky top-10 ">
                        <div className="space-y-5">
                        <h3 className="text-lg font-semibold border-b border-slate-300 pb-5">Filter By</h3>
                        <div className="starRating">
                        <div className="border-b border-slate-300 pb-5">
                        <h4 className="text-md font-semibold mb-2">Property Rating</h4>
                        {["5", "4", "3", "2", "1"].map((star) => (
                        <label className="flex items-center space-x-2">
                        <input
                        type="checkbox"
                        className="rounded"
                        value={star}
                        onChange={handleStarFilter}
                        />
                        <span>{star} Stars</span>
                        </label>
                        ))}
                    </div>
                </div>
                <div className="hotelType">
                    <div >
                    <h4 className="text-md font-semibold mb-2">Hotel Type</h4>
                    {["hotel", "apartment", "resort", "villa"].map((hotelType) => (
                    <label className="flex items-center space-x-2">
                    <input
                    type="checkbox"
                    className="rounded"
                    value={hotelType}
                    />
                    <span>{hotelType}</span>
                    </label>
                    ))}
                    </div>
                </div>
        </div>
      </div>
                    </div>
                    <div className="col-md-8">
                    {hotels.map((hotel) => (
                <div key={hotel._id} className="flex justify-between pt-5 max-w-[990px] mx-auto">
                    <div className="mt-1 mb-1">
                        <div className="flex border rounded-md p-3 h-auto w-full hover:bg-blue-200 hover:shadow-md">
                            <div className="self-center w-[50%] mr-2 h-full">
                                <img className="w-full rounded-md ml-2" src={hotel.hotelMainImage} alt="" />
                            </div>
                            
                            <div className="p-0 m-0">
                                <h4 className="font-bold text-blue-800 mr-2 ml-2">{i18n.language === 'ar' ? hotel.hotelName_ar : hotel.hotelName}</h4>
                                <div className="flex">
                                    <p className="text-blue-500 text-decoration-underline mr-2 ml-2">{i18n.language === 'ar' ? hotel.hotelAddress_ar : hotel.hotelAddress}</p>
                                    <p className="text-muted">{hotel.distanceFromCenter} {t('KM')} </p>
                                </div>
                                <div className="hidden mr-2 ml-2">{i18n.language === 'ar' ? hotel.hotelCity_ar : hotel.hotelCity}</div>
                                <div>
                                    <p className="p-0  mr-2 ml-2">{i18n.language === 'ar' ? hotel.hotelSubDescription_ar : hotel.hotelSubDescription}</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-col p-0 w-[35%]">
                                <div className="flex space-x-4 mb-2">
                                    <div className="">
                                        <p className="font-semibold p-0 m-1">{t('good')}</p>
                                        <p className="p-0 m-0">{t('reviews')} { hotel.review } {t('Clients')} </p>
                                    </div>
                                    <div>
                                        <div className="p-3 mt-1 bg-blue-800 text-white rounded-lg">{hotel.hotelRating}</div>
                                    </div>
                                </div>
                                <div>
                                    <button className="bg-blue-600 p-3 rounded-lg mt-3 mr-16" onClick={() => handleGetRooms(hotel._id)}>{t('seeAvailability')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Hotels;


