import RegFoot from "../regFoot/RegFoot";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Container } from "react-bootstrap";

const TypePass = () => {
  return (
    <Container className=" pb-5" style={{ maxWidth: "890px" }}>
      <div>
        <h1 className=" mt-4 text-2xl	font-bold mb-2">Enter your password</h1>
        <p>
          Please enter your Booking.com password for{" "}
          <strong>example123@gmail.com</strong>
        </p>
        <div className=" mt-9">
          <div>
            <form action="">
              <label htmlFor="password" className=" font-semibold">
                Password
              </label>
              <br />
              <div className="flex relative">
                <input
                  type="password"
                  id="password"
                  className=" w-full px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
                  placeholder="Enter a Password"
                />
                <div className=" text-md flex justify-center items-center px-2 absolute right-1 top-[20px]">
                  <button>
                    <MdOutlineRemoveRedEye />
                  </button>
                </div>
              </div>
              <button className="flex w-full justify-center rounded-md bg-blue-600 py-4 text-lg my-3 font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-800">
                Sign In
              </button>
            </form>
            <div className="flex my-5">
              <hr className="border-b-solid border-1 border-gray-400 flex-1 mr-2 mt-3" />
              <p className="whitespace-nowrap">or</p>
              <hr className="border-b-solid border-1 border-gray-400 flex-1 ml-2 mt-3" />
            </div>
            <button className="flex w-full justify-center outline outline-1 outline-blue-600 rounded-md bg-white text-blue-600 py-3 text-lg my-3 font-semibold leading-6 shadow-sm hover:bg-slate-100">
              Sign In with a verification link
            </button>
            <button className="flex w-full justify-center  rounded-md bg-white text-blue-600 py-1 text-md my-5 font-semibold leading-6 shadow-sm hover:bg-slate-100">
              Forgotten your password
            </button>
          </div>
          <hr />
        </div>
        <RegFoot className="" />
      </div>
    </Container>
  );
};

export default TypePass;
