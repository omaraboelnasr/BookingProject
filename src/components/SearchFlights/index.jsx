// import React from "react";
import { useState } from "react";
import "./style.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
// import { Dropdown, DropdownButton } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

export const SearchFlights = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/flights");
  };
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const [openTravelers, setOpenTravelers] = useState(false);
  const [travelers, setTravelers] = useState({
    adults: 1,
    students: 0,
    seniors: 0,
    youths: 0,
    children: 0,
    toddlers: 0,
    infants: 0,
  });
  const handleCounter = (name, operation) => {
    setTravelers((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? travelers[name] + 1 : travelers[name] - 1,
      };
    });
  };
  return (
    <div className="container">
      <div className="w-100 row ">
        <div className="col-12">
          <div className="row gx-2">
            <div className="col-3">
              <Form.Select aria-label="Default select example">
                <option value="1">One-way</option>
                <option value="2">Round-trip</option>
                <option value="3">Multi-city</option>
              </Form.Select>
            </div>
            <div className="col-3">
              <div className="w-100 position-relative">
                <span
                  role="button"
                  onClick={() => setOpenTravelers(!openTravelers)}
                >
                  {travelers.adults +
                    travelers.students +
                    travelers.seniors +
                    travelers.youths +
                    travelers.children +
                    travelers.toddlers +
                    travelers.infants}{" "}
                  traveler
                </span>
                {openTravelers && (
                  <div className="z-3 w-100 mt-2 position-absolute top-50 start-50 translate-middle-x">
                    <div className="w-100 position-fixed top-0 start-50 translate-middle-x border p-3 bg-white">
                      <div className="w-100 d-flex justify-content-between align-items-center">
                        <span className="d-flex flex-column w-50">
                          Adults
                          <span className="text-black-50 small">18-64</span>
                        </span>
                        <div className="d-flex align-items-center gap-2 w-50">
                          <button
                            disabled={travelers.adults <= 1}
                            className="btn border bg-white"
                            onClick={() => handleCounter("adults", "d")}
                          >
                            -
                          </button>
                          <span>{travelers.adults}</span>
                          <button
                            className="btn border bg-white"
                            onClick={() => handleCounter("adults", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="w-100 d-flex justify-content-between align-items-center">
                        <span className="d-flex flex-column w-50">
                          Students
                          <span className="text-black-50 small">over 18</span>
                        </span>
                        <div className="w-50 d-flex align-items-center gap-2">
                          <button
                            disabled={travelers.students <= 0}
                            className="btn border bg-white"
                            onClick={() => handleCounter("students", "d")}
                          >
                            -
                          </button>
                          <span>{travelers.students}</span>
                          <button
                            className="btn border bg-white"
                            onClick={() => handleCounter("students", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="d-flex flex-column w-50">
                          Seniors
                          <span className="text-black-50 small">over 65</span>
                        </span>
                        <div className="d-flex align-items-center gap-2">
                          <button
                            disabled={travelers.seniors <= 0}
                            className="btn border bg-white"
                            onClick={() => handleCounter("seniors", "d")}
                          >
                            -
                          </button>
                          <span>{travelers.seniors}</span>
                          <button
                            className="btn border bg-white"
                            onClick={() => handleCounter("seniors", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="d-flex flex-column w-50">
                          Youths{" "}
                          <span className="text-black-50 small">12-17</span>
                        </span>
                        <div className="d-flex align-items-center gap-2">
                          <button
                            disabled={travelers.youths <= 0}
                            className="btn border bg-white"
                            onClick={() => handleCounter("youths", "d")}
                          >
                            -
                          </button>
                          <span>{travelers.youths}</span>
                          <button
                            className="btn border bg-white"
                            onClick={() => handleCounter("youths", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="d-flex flex-column w-50">
                          Children{" "}
                          <span className="text-black-50 small">2-11</span>
                        </span>
                        <div className="d-flex align-items-center gap-2">
                          <button
                            disabled={travelers.children <= 0}
                            className="btn border bg-white"
                            onClick={() => handleCounter("children", "d")}
                          >
                            -
                          </button>
                          <span>{travelers.children}</span>
                          <button
                            className="btn border bg-white"
                            onClick={() => handleCounter("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="d-flex flex-column w-50">
                          Toddlers{" "}
                          <span className="text-black-50 small">under 2</span>
                        </span>
                        <div className="d-flex align-items-center gap-2">
                          <button
                            disabled={travelers.toddlers <= 0}
                            className="btn border bg-white"
                            onClick={() => handleCounter("toddlers", "d")}
                          >
                            -
                          </button>
                          <span>{travelers.toddlers}</span>
                          <button
                            className="btn border bg-white"
                            onClick={() => handleCounter("toddlers", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="d-flex flex-column w-50">
                          Infants{" "}
                          <span className="text-black-50 small">under 2</span>
                        </span>
                        <div className="d-flex align-items-center gap-2">
                          <button
                            disabled={travelers.infants <= 0}
                            className="btn border bg-white"
                            onClick={() => handleCounter("infants", "d")}
                          >
                            -
                          </button>
                          <span>{travelers.infants}</span>
                          <button
                            className="btn border bg-white"
                            onClick={() => handleCounter("infants", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-3">
              <Form.Select aria-label="Default select example">
                <option value="1">Economy</option>
                <option value="2">Premium Economy</option>
                <option value="3">Business</option>
                <option value="3">First</option>
                <option value="3">Multiple</option>
              </Form.Select>
            </div>
          </div>
        </div>
      </div>
      <Form>
        <Form.Group>
          <div className="row w-100 align-items-center">
            <div className="col-lg-6">
              <div className="row mt-2">
                <div className="col-6">
                  <Form.Control
                    type="email"
                    placeholder="From"
                    className="p-3"
                  />
                </div>
                <div className="col-6">
                  <Form.Control type="email" placeholder="To" className="p-3" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row align-items-center text-center ">
                <div className="col-lg-6 position-relative my-2">
                  <div
                    role="button"
                    onClick={() => {
                      setOpenDate(!openDate);
                    }}
                    className="w-100 border p-3 bg-white"
                  >
                    {`${format(date[0].startDate, "dd/MM/yyyy")}`}
                  </div>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="position-absolute top-100 start-50 translate-middle-x z-3"
                    />
                  )}
                </div>
                <div className="col-lg-6">
                  <Button
                    variant="primary"
                    type="submit"
                    className="p-2 fs-5 w-100"
                    onClick={() => handleSearch()}
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};
