import Container from 'react-bootstrap/Container';
import "../../styles/stayesHeader.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Col, Row } from 'react-bootstrap';

const SearchInRoom = () => {
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
    navigate("/hotels", { state: { date, options } });
    };
    return <>
            <Container style={{ maxWidth: '1000px' }}>
            <Row style={{backgroundColor:"white"}} className='justify-between headerSearch2'>
            <Col lg="4" className='flex self-center'>
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
            </Col>
            <Col lg="4" className='flex self-center'>
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
            </Col>
            <Col lg="2">
            <button className="headerBtn" onClick={handleSearch}>
            Change Search
            </button>
            </Col>
                
            </Row>
        </Container>
    </>
}

export default SearchInRoom;
