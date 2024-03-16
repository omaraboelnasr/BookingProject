import RegFoot from "../../components/regFoot/RegFoot";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BiLogoApple } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useState } from "react";
import axiosInstance from "../../axios";
// import axios from "axios";

const SignIn = () => {
	const [error, setError] = useState("");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();
	const onSubmit = async (data) => {
		event.preventDefault();
		try {
			await axiosInstance
				.post("/login", {
					email: data.email,
					password: data.password,
				})
				.then((response) => {
					const {email , userName , token , userId} = response.data
					localStorage.setItem("email", email);
					localStorage.setItem("token", token);
					localStorage.setItem("userName", userName);
					localStorage.setItem("userId", userId);
					navigate("/");
					window.location.reload();
				})
				.catch((error) => {
					setError("please recheck your password and email");
					console.log(error);
				});
		
		} catch (error) {
			console.log("here");
			setError(error);
			console.log(error);
		}
	};
	return (
		<Container className="pb-5 " style={{ maxWidth: "890px" }}>
			<div>
				<div>
					<h1 className="mt-4 text-2xl font-bold ">
						Sign in or create an account
					</h1>
					<div className=" mt-9">
						<div>
							<form action="" onSubmit={handleSubmit(onSubmit)}>
								<label
									htmlFor="email"
									className="font-semibold "
								>
									Email address
								</label>
								<br />
								<input
									type="email"
									id="email"
									{...register("email", {
										required: true,
										pattern:
                    /^[a-zA-Z]{3,22}\d*(@)(gmail|yahoo|outlook|hotmail)(.com)$/,
									})}
									className="w-full px-3 py-2 pl-2 text-gray-900 bg-transparent border rounded-sm shadow-sm  border-slate-400 placeholder-slate-400 sm:text-sm sm:leading-6 focus:outline-none focus:ring-2 focus:ring-blue-600"
									placeholder="Enter your email address"
								/>
								{errors.email && (
									<p className="text-danger">Invalid Email</p>
								)}
								<label
									htmlFor="password"
									className="font-semibold "
								>
									Password
								</label>
								<br />
								<div className="relative">
									<input
										type="password"
										id="password"
										{...register("password", {
											required: true,
											minLength: "6",
										})}
										className=" w-full px-3 border border-slate-400 rounded-md shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5"
										placeholder="Enter a Password"
									/>
									{errors.password && (
										<p className="text-danger">
											Invalid Password
										</p>
									)}
									<div className=" text-md flex justify-center items-center px-2 absolute right-1 top-[20px]">
										<button>
											<MdOutlineRemoveRedEye />
										</button>
									</div>
								</div>

								{error && (
									<div>
										<p className="text-danger">{error}</p>
									</div>
								)}

								<button
									type="submit"
									className="flex justify-center w-full py-3 my-5 text-lg font-semibold leading-6 text-white bg-blue-600 rounded-sm shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-800"
									// onClick={() => navigate("/")}
								>
									Sign in
								</button>
							</form>
						</div>
						<div className="flex">
							<hr className="flex-1 mt-3 mr-2 border-gray-400 border-b-solid border-1" />
							<p className="whitespace-nowrap">
								or use one of these options
							</p>
							<hr className="flex-1 mt-3 ml-2 border-gray-400 border-b-solid border-1" />
						</div>
						<div className="flex justify-around my-6">
							<a href="">
								<div className="flex items-center justify-center w-20 h-20 m-4 border  border-slate-200 hover:outline-none hover:ring-1 hover:ring-blue-500">
									<AiFillFacebook className="w-12 h-12  fill-blue-700" />
								</div>
							</a>
							<a href="">
								<div className="flex items-center justify-center w-20 h-20 m-4 border  border-slate-200 hover:outline-none hover:ring-1 hover:ring-blue-500">
									<FcGoogle className="w-12 h-12 " />
								</div>
							</a>
							<a href="">
								<div className="flex items-center justify-center w-20 h-20 m-4 border  border-slate-200 hover:outline-none hover:ring-1 hover:ring-blue-500">
									<BiLogoApple className="w-12 h-12 " />
								</div>
							</a>
						</div>
						<hr />
					</div>
					<RegFoot className="" />
				</div>
			</div>
		</Container>
	);
};
export default SignIn;
