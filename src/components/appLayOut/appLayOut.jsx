import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Menu from "../menu/menu";
import Footer from "../footer/Footer";

const AppLayOut = () => {
    return <>
        <Header/>
        <Menu/>
        <Outlet/>
        <Footer/>
    </>
}

export default AppLayOut;
