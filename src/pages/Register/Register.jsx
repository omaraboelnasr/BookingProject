import { useNavigate } from 'react-router-dom';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import RegFoot from "../../components/regFoot/RegFoot";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Regist } from "../../services/auth";
import toast, { Toaster } from 'react-hot-toast';
const Register = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,watch
  } = useForm({ mode: "onChange" });

  const [showPassword, setShowPassword] = useState(false);

  const handelShowPassword = (evt) => {
    evt.preventDefault()
    setShowPassword(!showPassword);
  };

  const handleRegist =async (user) => {
    if(!errors.email && !errors.password){
      try{
            await  Regist(user.email,user.password)
            navigate('/login')
      }catch(err){
          toast.error('This email is already exist')
      }
  }else{
      toast.error('Validation Error')
  }
    reset();
  };

  const validatePassword = (value) => {
    if (!value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)) {
      return "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit.";
    }
    return true;
  };

  return (
    <div className="flex justify-center p-10">
      <div className="w-[600px]">
        <h1 className=" mt-4 text-2xl	font-bold">Create an account</h1>
        <div className=" mt-9">
          <div>
            <form onSubmit={handleSubmit(handleRegist)}>
              <div className="pt-4">
                <label htmlFor="emailIn" className=" font-semibold">
                  Email address
                </label>
                <br />
                <input
                  type="email"
                  id="emailIn"
                  className=" w-full px-3 border border-slate-400 rounded-sm shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email address" autoComplete="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z]{3,22}\d*(@)(gmail|yahoo|outlook|hotmail)(.com)$/,
                  })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600">Email is required</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="text-red-600">Invalid Email format</p>
                )}
              </div>

              <div className="pt-4">
                <label htmlFor="password" className=" font-semibold">
                  Password
                </label>
                <br />
                <div className=" relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className=" w-full px-3 border border-slate-400 rounded-sm shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
                    placeholder="Enter a Password"
                    {...register("password", {
                      required: true,
                      validate: validatePassword,
                    })}
                  />
                  <div className=" text-md flex justify-center items-center px-2 absolute right-1 top-[20px]">
                    <button onClick={(ev) => handelShowPassword(ev)}>
                      {showPassword ? (
                        <MdOutlineRemoveRedEye />
                      ) : (
                        <FaRegEyeSlash />
                      )}
                    </button>
                  </div>
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.message && (
                    <p className="text-red-600">{errors.password.message}</p>
                  )}
                </div>
              </div>
              <div className="pt-4">
                <label htmlFor="Conpassword" className=" font-semibold">
                  Confirm Password
                </label>
                <br />
                <div className=" relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="Conpassword"
                    className=" w-full px-3 border border-slate-400 rounded-sm shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
                    placeholder="Confirm your Password"
                    {...register("confirmPassword" , { required: true, validate: value => value === watch('password') || "Passwords do not match" })}
                  />
                  <div className=" text-md flex justify-center items-center px-2 absolute right-1 top-[20px]">
                    <button onClick={(ev) => handelShowPassword(ev)}>
                      {showPassword ? (
                        <MdOutlineRemoveRedEye />
                      ) : (
                        <FaRegEyeSlash />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword?.type === 'required' && <p className='text-red-600'>Confirm Password is required</p>}
                        {errors.confirmPassword?.message && <p className='text-red-600'>{errors.confirmPassword.message}</p>}
                </div>
              </div>
              <button
                className="flex w-full justify-center rounded-sm bg-blue-600 py-3 text-lg my-5 font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-800"
                type="submit"
              >
                Register
              </button>
              <Toaster/>
            </form>
          </div>

          <hr />
        </div>
        <RegFoot className="" />
      </div>
    </div>
  );
};

export default Register;
