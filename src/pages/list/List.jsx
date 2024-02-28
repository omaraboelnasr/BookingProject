import"./list.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import AttractionPage2 from "../AttractionPage2/AttractionPage2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    
    const navigate = useNavigate();
    const handleSearch = () => {
      navigate("/attractions/list", { state: { destination, date, options } });
    };

  return (
    <div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
              <input placeholder="Destination" style={{border:"1px solid gray", marginBottom:"2px"}}></input>
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
                
            <button>Search</button>
            
          </div>
          <div className="listResult">
            <AttractionPage2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
