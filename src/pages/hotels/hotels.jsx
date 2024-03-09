import SearchForm from "../../components/searchForm/searchForm";
import { TiTick } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const Hotels = () => {
    return <>
    <div className ="pb-5 bg-blue-900">
    <SearchForm/>
    </div>
    <div className="flex flex-col justify-around pt-20 max-w-[890px] mx-auto">
    <div className="mt-4   w-[864px] p-2 mb-5">
        <div className="flex border rounded-md p-[15px]">
            <div  className="self-center ml-0 mr-10">
            <img src="../../../public/images/hotel1.jpeg" alt="" />
            </div>
            <div className=" mr-4">
            <div>
                <h4 className=" font-bold text-blue-800">Comfort Pyramids&Sphinx Inn</h4>
                <p className="text-muted">11.7 Km from center</p>
                <div style={{borderLeft:'3px solid #e0e0e0'}}>
                    <div className="ms-2">
                <h5 className="p-0 m-0">Standerd Douple Room</h5>
                <p className="p-0 m-0">2 single beds</p>
                <p  className="p-0 m-0 text-green-700 font-bold">Breakfast included</p>
                <p  className="p-0 m-0 text-green-700"><span><TiTick className="inline"/></span>Free cancellation</p>
                <p  className="p-0 m-0 text-green-700"><span><TiTick className="inline"/></span>No prepayment needed - <span>pay at the property</span></p>
                    </div>
                </div>
            </div>
            </div>
            <div>
                <div className="flex flex-col justify-between">
                    <div  className="flex space-x-4 mb-2">
                    <div>
                        <p className="p-0 m-0">Good</p>
                        <p className="p-0 m-0">50 reviews</p>
                    </div>
                    <div>
                    <div  className="p-1 mt-1 bg-blue-800 text-white rounded-lg">7.9</div>
                    </div>
                    </div>
                    <div >
                    <p className="p-0 m-0 text-muted">1 night, 1 adult</p>
                    <h3 className="p-0 m-0">EGP 603</h3>
                <button className=" bg-blue-600 pt-2 pb-1 rounded-lg mt-2"><NavLink to={"/hotels/rooms"} className="text-white p-3 text-decoration-none" >{`${"See availability >"}`}</NavLink></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
}

export default Hotels;
