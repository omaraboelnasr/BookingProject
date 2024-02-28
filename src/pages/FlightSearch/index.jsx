import { SearchFlights } from "./../../components/SearchFlights/index";

const FlightsSearch = () => {
  return (
    <>
      <div className="container">
        <h2 className=" d-none d-lg-block my-5">
          Search hundreds of flight sites at once.
        </h2>
      </div>
      <div className="mt-5 mb-3">
        <SearchFlights></SearchFlights>;
      </div>
    </>
  );
};

export default FlightsSearch;
