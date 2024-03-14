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
					const email = response.data.email;
					const user = response.data.userName;
					const token = response.data.token;
					localStorage.setItem("email", email);
					localStorage.setItem("token", token);
					if (user) {
						localStorage.setItem("user", user);
					}
					navigate("/");
					window.location.reload();
				})
				.catch((error) => {
					setError("please recheck your password and email");
					console.log(error);
				});
			// mostafa get api from backend
			//هنا هتعمل call your login API endpoint (data.email & data.password)
			// Handle success - redirect to home page
		} catch (error) {
			console.log("here");
			setError(error);
			console.log(error);
		}
	};
	return (
		<Container className=" pb-5" style={{ maxWidth: "890px" }}>
			<div>
				<div>
					<h1 className=" mt-4 text-2xl	font-bold">
						Sign in or create an account
					</h1>
					<div className=" mt-9">
						<div>
							<form action="" onSubmit={handleSubmit(onSubmit)}>
								<label
									htmlFor="email"
									className=" font-semibold"
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
									className=" w-full px-3 border border-slate-400 rounded-sm shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2
                  text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600"
									placeholder="Enter your email address"
								/>
								{errors.email && (
									<p className="text-danger">Invalid Email</p>
								)}
								<label
									htmlFor="password"
									className=" font-semibold"
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
									className="flex w-full justify-center rounded-sm bg-blue-600 py-3 text-lg my-5 font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-800"
									// onClick={() => navigate("/")}
								>
									Sign in
								</button>
							</form>
						</div>
						<div className="flex">
							<hr className="border-b-solid border-1 border-gray-400 flex-1 mr-2 mt-3" />
							<p className="whitespace-nowrap">
								or use one of these options
							</p>
							<hr className="border-b-solid border-1 border-gray-400 flex-1 ml-2 mt-3" />
						</div>
						<div className="flex justify-around my-6">
							<a href="">
								<div className=" w-20 h-20 m-4 items-center flex justify-center border border-slate-200 hover:outline-none  hover:ring-1 hover:ring-blue-500">
									<AiFillFacebook className=" w-12 h-12 fill-blue-700" />
								</div>
							</a>
							<a href="">
								<div className=" w-20 h-20 m-4 items-center flex justify-center border border-slate-200 hover:outline-none  hover:ring-1 hover:ring-blue-500">
									<FcGoogle className=" w-12 h-12 " />
								</div>
							</a>
							<a href="">
								<div className=" w-20 h-20 m-4 items-center flex justify-center border border-slate-200 hover:outline-none  hover:ring-1 hover:ring-blue-500">
									<BiLogoApple className=" w-12 h-12" />
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
