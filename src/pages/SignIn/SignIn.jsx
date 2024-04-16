import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useContext, useState } from "react";
import { authenticationContext } from "../../context/authentication";
import toast, { Toaster } from "react-hot-toast";
import { userSignin } from "../../services/user";
import { useTranslation } from "react-i18next";

const SignIn = () => {
	const { t, i18n } = useTranslation();
	const { isAuth, setAuth } = useContext(authenticationContext);
	const [error, setError] = useState("");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();
	const handleSignIn = async (user) => {
		if (!errors.email && !errors.password) {
			try {
				const response = await userSignin(user.email, user.password);
				const { email, userName, token, userId, active, owner } =
					response;
				localStorage.setItem("email", email);
				localStorage.setItem("token", token);
				localStorage.setItem("userName", userName);
				localStorage.setItem("userId", userId);
				localStorage.setItem("owner", owner);
				if (!active) {
					return navigate("/register");
				}
				navigate("/");
				setAuth(true);
			} catch (err) {
				console.log(err);
				setError("please recheck your password and email");
			}
		} else {
			toast.error("Validation Error");
		}
	};

	return (
		<Container className="pb-5 " style={{ maxWidth: "890px" }}>
			<div>
				<div>
					<h1 className="mt-4 text-2xl font-bold ">
						{`${t("login")} ${t("or")} ${t("createAnAccount")}`}
					</h1>
					<div className=" mt-9">
						<div>
							<form onSubmit={handleSubmit(handleSignIn)}>
								<label
									htmlFor="email"
									className="font-semibold "
								>
									{t("emailAddress")}
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
									placeholder={t("enterEmailAddress")}
								/>
								{errors.email && (
									<p className="text-danger">
										{i18n.resolvedLanguage === "en"
											? `${t("invalid")} ${t(
													"emailAddress"
											  )}`
											: `${t("emailAddress")} ${t(
													"invalid"
											  )}`}
									</p>
								)}
								<label
									htmlFor="password"
									className="font-semibold "
								>
									{t("password")}
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
										placeholder={t("enterPassword")}
									/>
									<div
										className={`text-md flex justify-center items-center px-2 absolute top-[20px] ${
											i18n.language === "en"
												? "right-1"
												: "left-1"
										}`}
									>
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
								>
									{t("login")}
								</button>
								<Toaster />
							</form>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};
export default SignIn;
