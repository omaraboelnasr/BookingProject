import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames';
import { authenticationContext } from "../../context/authentication";

const Header = () => {
    const {isAuth,setAuth} =useContext(authenticationContext)
    const [userName, setUserName] = useState(localStorage.getItem("userName") || '');
    const [email, setEmail] = useState(localStorage.getItem("email") || '');
    const [userId, setuserId] = useState(localStorage.getItem("userId") || '');

	const navigate = useNavigate();
    const logOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("userName");
        localStorage.removeItem("userId");
        setUserName('');
        setEmail('');
        navigate("/")
        setAuth(false)
    };
	const manageAccount=() =>{
		navigate("/profile")
	}

    useEffect(() => {
        isAuth?setUserName(localStorage.getItem("userName")):setUserName('')
    });

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
                    {isAuth ? 
                        <Menu as="div" className="relative inline-block text-left">
                        <div>
                          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                          {userName}
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                                    className={classNames('text-gray-700 block w-full px-4 py-2 text-left text-sm'
                                    )} onClick={manageAccount}
                                  >
                                    Manage account
                                  </button>
                                </Menu.Item>
                                <Menu.Item>
                                    <button
                                      className={classNames(
                                        'text-gray-700 block w-full px-4 py-2 text-left text-sm'
                                      )} onClick={logOut}
                                    >
                                      Sign out
                                    </button>
                                </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                     : 
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
                    }
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
