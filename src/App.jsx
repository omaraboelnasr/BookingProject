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
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import CreatePass from "./components/CreatePass/CreatePass";
import TypePass from "./components/typePass/TypePass";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      { index: true, element: <Home /> },
      { path: "/hotels", element: <Hotels /> },
      { path: "/hotels/rooms", element: <Rooms /> },
      { path: "/searchflights", element: <FlightsSearch /> },
      { path: "/flights", element: <Flights /> },
      { path: "/attractions", element: <Attractions /> },
      { path: "/attractions/list", element: <List /> },
      { path: "/attractions/AttractionPage3", element: <AttractionPage3 /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <SignIn /> },
      { path: "create", element: <CreatePass /> },
      { path: "type", element: <TypePass /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
