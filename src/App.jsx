import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayOut from "./components/appLayOut/appLayOut";
import Home from "./pages/home/home";
import NotFound from "./pages/notFound/notFound";
import Hotels from "./pages/hotels/hotels";
import Rooms from "./pages/rooms/rooms";
import Attractions from "./pages/Attractions/Attractions";
import List from "./pages/list/List";
import AttractionPage3 from "./pages/AttractionPage3/AttractionPage3";
import FlightsSearch from "./pages/FlightSearch";
import Flights from "./pages/Flights";

import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";
import UserProfile from "./pages/userProfile/userProfile";
import { AuthenticationProvider } from "./context/authentication";
import { useState } from "react";
import Protected from "./components/protected/protected";
import UserProtected from "./components/userProtected/userProtected";



const routes = createBrowserRouter([
	{
		path: "/",
		element: <AppLayOut />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "/hotels/:city", element: <Hotels /> },
			{ path: "/hotels/rooms", element: <Rooms /> },
			{ path: "/searchflights", element: <FlightsSearch /> },
			{ path: "/flights", element: <Flights /> },
			{ path: "/attractions", element: <Attractions /> },
			{ path: "/attractions/list", element: <List /> },
			{ path: "/attractions/AttractionPage3", element: <AttractionPage3 />},
			{ path: "/register", element:<UserProtected><Register/></UserProtected> },
			{ path: "/login", element: <UserProtected><SignIn/></UserProtected>},
			{path:"/profile",element:<Protected><UserProfile/></Protected>},
			{ path: "*", element: <NotFound /> },
		],
	},
]);

function App() {
	const [isAuth,setAuth]=useState(localStorage.getItem('token')?true:false)
	return (
		<>
		<AuthenticationProvider value={{isAuth,setAuth}}><RouterProvider router={routes} /></AuthenticationProvider>
		</>
	);
}
export default App;
