import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { authenticationContext } from "../../context/authentication";
import { useTranslation } from "react-i18next";
import { faLungs } from "@fortawesome/free-solid-svg-icons";
import DropdownButton from "react-bootstrap/DropdownButton";

const Header = () => {
	const { t, i18n } = useTranslation();
	const lngs = {
		en: {
			nativeName: (
				<>
					<div className="flex align-middle justify-center gap-2">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQItKRYKh2e6KgmbWxAHtkIei0vf4HY4_z86DxaaDiWnA&s"
							alt=""
							className="w-5 h-5"
						/>
						<span>en</span>
					</div>
				</>
			),
			name: "English",
		},
		ar: {
			nativeName: (
				<>
					<div className="flex align-middle justify-center gap-2">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5MrDMFjTpvP6RwQtnmLESYGpZwd8UXGJALAidi5GGyg&s"
							alt=""
							className="w-5 h-5"
						/>
						<span>ar</span>
					</div>
				</>
			),
			name: "Arabic",
		},
	};
	const { isAuth, setAuth } = useContext(authenticationContext);
	const [userName, setUserName] = useState(
		localStorage.getItem("userName") || ""
	);
	const [email, setEmail] = useState(localStorage.getItem("email") || "");
	const [userId, setuserId] = useState(localStorage.getItem("userId") || "");

	const navigate = useNavigate();
	const logOut = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("email");
		localStorage.removeItem("userName");
		localStorage.removeItem("userId");
		localStorage.removeItem("owner");
		setUserName("");
		setEmail("");
		navigate("/");
		setAuth(false);
	};
	const manageAccount = () => {
		navigate("/profile");
	};

	useEffect(() => {
		isAuth
			? setUserName(localStorage.getItem("userName"))
			: setUserName("");
	});

	const listProperty = () => {
		navigate("/addproperty");
	};

	return (
		<>
			<Navbar className="bg-blue-900 pb-4" data-bs-theme="dark">
				<Container>
					<Navbar.Brand
						href="/"
						style={{ fontWeight: "bold", fontSize: "25px" }}
					>
						Booking.com
					</Navbar.Brand>

					<div className="flex justify-center items-center gap-3">
						<DropdownButton
							title={lngs[i18n.language].nativeName}
							id="dropdown-basic"
							className="bg-blue-900 flex"
						>
							{Object.keys(lngs).map((lng) => (
								<Dropdown.Item
									key={lng}
									onClick={() => i18n.changeLanguage(lng)}
									disabled={i18n.resolvedLanguage === lng}
									className="flex-1 justify-center bg-blue-900 hidden"
								>
									{lngs[lng].nativeName}
								</Dropdown.Item>
							))}
						</DropdownButton>

						<button
							onClick={() => listProperty()}
							className="hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded"
						>
							{t("listProperty")}
						</button>
						<div>
							{isAuth ? (
								<Menu as="div" className="relative ">
									<div>
										<Menu.Button className="inline-flex w-full justify-center align-middle gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
											{userName}
											<ChevronDownIcon
												className="-mr-1 h-5 w-5 text-gray-400"
												aria-hidden="true"
											/>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											<div className="py-1">
												<Menu.Item>
													<button
														className={classNames(
															"text-gray-700 block w-full px-4 py-2 text-left text-sm"
														)}
														onClick={manageAccount}
													>
														{t("manageAccount")}
													</button>
												</Menu.Item>
												<Menu.Item>
													<button
														className={classNames(
															"text-gray-700 block w-full px-4 py-2 text-left text-sm"
														)}
														onClick={logOut}
													>
														{t("logout")}
													</button>
												</Menu.Item>
											</div>
										</Menu.Items>
									</Transition>
								</Menu>
							) : (
								<div>
									<Nav className="flex gap-2">
										<button className="px-3 py-2 text-blue-800 bg-white rounded-sm">
											<NavLink
												to="/register"
												className={
													"text-decoration-none"
												}
											>
												{t("register")}
											</NavLink>
										</button>
										<button className="px-3 py-2 text-blue-800 bg-white rounded-sm">
											<NavLink
												to="/login"
												className={
													"text-decoration-none"
												}
											>
												{t("login")}
											</NavLink>
										</button>
									</Nav>
								</div>
							)}
						</div>
					</div>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
