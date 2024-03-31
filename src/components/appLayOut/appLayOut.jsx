import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Menu from "../menu/menu";
import Footer from "../footer/Footer";
import { useTranslation } from "react-i18next";

const AppLayOut = () => {
	const { i18n } = useTranslation();
	return (
		<>
			<div
				dir={i18n.language === "en" ? "ltr" : "rtl"}
				className="flex flex-col h-screen"
			>
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
