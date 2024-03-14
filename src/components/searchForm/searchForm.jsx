import "../../styles/stayesHeader.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { IoBedOutline , IoPersonOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";

const SearchForm = () => {
    const [destination, setDestination] = useState("");
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

    return (
            <div className=' container'>
            <div className=' justify-between flex flex-row items-center border-5 bg-white flex-wrap border-yellow-500 rounded-md max-w-7xl'>
            <div className='flex self-center'>
            <IoBedOutline className="headerIcon" />
            <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"
                onChange={(e) => setDestination(e.target.value)}
            />
            </div>
            <div className='flex self-center'>
            <MdOutlineCalendarMonth className="headerIcon" />
                <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
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
            <IoPersonOutline className="headerIcon" />
            <span
            onClick={() => setOpenOptions(!openOptions)}
            className="headerSearchText"
            >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
            {openOptions && (
            <div className="options">
                <div className="optionItem">
                    <span className="optionText">Adult</span>
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
                    <span className="optionText">Children</span>
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
                    <span className="optionText">Room</span>
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
            <button className="headerBtn" onClick={handleSearch}>
            Search
            </button>
            </div>
                
            </div>
        </div>
        
    );
}

export default SearchForm;
