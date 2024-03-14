import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [userName] = useState(localStorage.getItem("user"));
	const [email] = useState(localStorage.getItem("email"));
	const logOut = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("email");
		localStorage.removeItem("user");

		setToken(null);
		window.location.reload();
	};
	useEffect(() => {
		const handleStorageChange = () => {
			const storedToken = localStorage.getItem("token");
			setToken(storedToken);
		};

		window.addEventListener("storage", handleStorageChange);

		return () => {
			window.removeEventListener("storage", handleStorageChange);
		};
	}, [token]);
	return (
		<>
			<Navbar className="bg-blue-900" data-bs-theme="dark">
				<Container style={{ maxWidth: "1100px" }}>
					<Navbar.Brand
						href="/"
						style={{ fontWeight: "bold", fontSize: "25px" }}
					>
						Booking.com
					</Navbar.Brand>
					{token ? (
						<>
							<div className="flex flex-col items-center pt-5">
								<div className="flex flex-row items-center space-x-2">
									<img
										className="w-12 h-12 rounded-full shadow-lg"
										src="https://placehold.co/12x12"
										alt="Bonnie image"
									/>
									<p className="my-0 text-xl font-medium text-gray-100 dark:text-white">
										{userName ? `${userName}` : `${email}`}
									</p>
								</div>
								<div className="flex mt-4 md:mt-6">
									<a
										onClick={logOut}
										href="#"
										className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
									>
										Logout
									</a>
								</div>
							</div>
						</>
					) : (
						<Nav className="ms-auto ">
							<button className="ml-5 py-2 px-2 bg-white text-blue-800 rounded-sm">
								<NavLink
									to="/register"
									className={"text-decoration-none"}
								>
									Register
								</NavLink>
							</button>
							<button className="ml-5 py-2 px-2 bg-white text-blue-800 rounded-sm">
								<NavLink
									to="/login"
									className={"text-decoration-none"}
								>
									Sign in
								</NavLink>
							</button>
						</Nav>
					)}
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
