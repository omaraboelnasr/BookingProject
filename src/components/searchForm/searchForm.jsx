import "../../styles/stayesHeader.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { format } from "date-fns";
import { useLocation, useNavigate } from "react-router-dom";
import { IoBedOutline , IoPersonOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";



const SearchForm = ({ data }) => {
    const { t, i18n } = useTranslation();

    // const [destination, setDestination] = useState("");
    const location = useLocation();
    const { destination:city, date:choosenDate, options:choosenOption } = location.state|| {};
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
    {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
    },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
    });


    useEffect(() => {
        if(city){
            setDestination(city);
        }
        if(choosenDate){
            setDate(choosenDate)
        }
        if(choosenOption){
            setOptions({
                adult: choosenOption.adult,
                children: choosenOption.children,
                room: choosenOption.room,
                })
        }
    },[choosenDate,choosenOption])
   
    const navigate = useNavigate();

    const handleOption = (name, operation) => {
    setOptions((prev) => {
    return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    };
    });
    };

    const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
    };


    const [destination, setDestination] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (data) {
     
            const filtered = data.filter(item =>
                item.toLowerCase().includes(destination.toLowerCase())
            );
            setFilteredData(filtered);
        }
    }, [data, destination]);


    return (
            <div className=' container '>
            <div className=' md:justify-between flex flex-row md:flex-col items-center border-5 bg-white flex-wrap border-yellow-500 rounded-lg max-w-7xl headerSearch'>
            {/* <div className='flex self-center'>
            <IoBedOutline className="headerIcon mr-2" />
            <input
                type="text"
                placeholder={t("where")}
                className="headerSearchInput mr-2"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            />
            </div> */}

<div className='flex self-center'>
            <IoBedOutline className="headerIcon mr-2" />
            <input
                type="text"
                placeholder={t("where")}
                className="headerSearchInput mr-2"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            />
            <ul>
                {filteredData.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>

            <div className='flex self-center'>
            <MdOutlineCalendarMonth className="headerIcon ml-2" />
                <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} __ ${format(
                date[0].endDate,
                "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
                <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
                />
            )}
            </div>
            <div className='flex self-center'>
            <IoPersonOutline className="headerIcon ml-2" />
            <span
            onClick={() => setOpenOptions(!openOptions)}
            className="headerSearchText"
            >{`${options.adult} ${t("adult")} · ${options.children} ${t("children")} · ${options.room} ${t("room")}`}</span>
            {openOptions && (
            <div className="options">
                <div className="optionItem">
                    <span className="optionText">{t("adult")}</span>
                    <div className="optionCounter">
                    <button
                        disabled={options.adult <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "d")}
                    >
                    -
                    </button>
                    <span className="optionCounterNumber">
                    {options.adult}
                    </span>
                    <button
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "i")}
                    >
                    +
                    </button>
                </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">{t("children")}</span>
                    <div className="optionCounter">
                    <button
                        disabled={options.children <= 0}
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "d")}
                    >
                    -
                    </button>
                    <span className="optionCounterNumber">
                    {options.children}
                    </span>
                    <button
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "i")}
                    >
                    +
                    </button>
                    </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">{t("room")}</span>
                    <div className="optionCounter">
                    <button
                        disabled={options.room <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("room", "d")}
                    >
                    -
                    </button>
                    <span className="optionCounterNumber">
                    {options.room}
                    </span>
                    <button
                        className="optionCounterButton"
                        onClick={() => handleOption("room", "i")}
                    >
                    +
                    </button>
                </div>
                </div>
            </div>
            )}
            </div>
            <div>
            <button className="headerBtn pr-8 pl-8" onClick={handleSearch}>
            {t("Search")}
            </button>
            </div>
                
            </div>
        </div>
        
    );
}

export default SearchForm;
