import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Menu from "../menu/menu";
import Footer from "../footer/Footer";

const AppLayOut = () => {
	return (
		<>
			<div className="flex flex-col h-screen">
				<Header />
				<div className="grow">
					<Menu />
					<Outlet />
				</div>
				<Footer />
			</div>
		</>
	);
};

export default AppLayOut;
