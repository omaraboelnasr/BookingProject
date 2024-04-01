import SearchForm from "../../components/searchForm/searchForm";
import { TiTick } from "react-icons/ti";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllHotels} from "../../services/hotels";
import { useTranslation } from "react-i18next";



const Hotels = () => {
    const { t, i18n } = useTranslation();
    const [hotels, setHotels] = useState([]); 

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

    return (
        <div className="relative">
            <div className="bg-blue-900 mb-3">
                <SearchForm/>
            </div>
            {hotels.map((hotel) => (
                <div key={hotel._id} className="flex justify-between pt-5 max-w-[990px] mx-auto">
                    <div className="mt-4 mb-5">
                        <div className="flex border rounded-md p-3 h-auto w-full hover:bg-blue-200 hover:shadow-md">
                            <div className="self-center w-[50%] mr-2 h-full">
                                <img className="w-full rounded-md" src={hotel.hotelMainImage} alt="" />
                            </div>
                            
                            <div className="p-0 m-0">
                                <h4 className="font-bold text-blue-800">{i18n.language === 'ar' ? hotel.hotelName_ar : hotel.hotelName}</h4>
                                <div className="flex">
                                    <p className="text-blue-500 text-decoration-underline mr-2">{i18n.language === 'ar' ? hotel.hotelAddress_ar : hotel.hotelAddress}</p>
                                    <p className="text-muted">{hotel.distanceFromCenter} {t('KM')} </p>
                                </div>
                                <div className="hidden">{i18n.language === 'ar' ? hotel.hotelCity_ar : hotel.hotelCity}</div>
                                <div>
                                    <p className="p-0 m-0">{i18n.language === 'ar' ? hotel.hotelSubDescription_ar : hotel.hotelSubDescription}</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-col p-0 w-[35%]">
                                <div className="flex space-x-4 mb-2">
                                    <div className="">
                                        <p className="font-semibold p-0 m-1">{t('good')}</p>
                                        <p className="p-0 m-0">{t('reviews', { count: 50 })}</p>
                                    </div>
                                    <div>
                                        <div className="p-2 mt-1 bg-blue-800 text-white rounded-lg">7.9</div>
                                    </div>
                                </div>
                                <div>
                                    <button className="bg-blue-600 p-3 rounded-lg mt-8 mr-12" onClick={() => handleGetRooms(hotel._id)}>{t('seeAvailability')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Hotels;


