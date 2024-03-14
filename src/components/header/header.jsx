import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

const Header = () => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [userName, setUserName] = useState(localStorage.getItem("user") || '');
    const [email, setEmail] = useState(localStorage.getItem("email") || '');
	const navigate = useNavigate();
    const logOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("user");

        setToken(null);
        setUserName('');
        setEmail('');
        window.location.reload();
    };
	const manageAccount=() =>{
		navigate("/HomeEdit")
	}

    useEffect(() => {
        const handleStorageChange = () => {
            const storedToken = localStorage.getItem("token");
            setToken(storedToken);
            if (!storedToken) {
                setUserName('');
                setEmail('');
            }
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
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <img
                                    className="w-12 h-12 rounded-full shadow-lg"
                                    src="https://placehold.co/12x12"
                                    alt="User image"
                                />
                                <span className="my-0 text-xl font-medium text-gray-100 dark:text-white">
                                    {userName || email}
                                </span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
							<Dropdown.Item onClick={manageAccount}>Manage account</Dropdown.Item>
                                <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                        <Nav className="ms-auto">
                            <button className="px-2 py-2 ml-5 text-blue-800 bg-white rounded-sm">
                                <NavLink
                                    to="/register"
                                    className={"text-decoration-none"}
                                >
                                    Register
                                </NavLink>
                            </button>
                            <button className="px-2 py-2 ml-5 text-blue-800 bg-white rounded-sm">
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
