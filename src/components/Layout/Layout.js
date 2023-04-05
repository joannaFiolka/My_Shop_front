import {Header} from "../Header/Header";
import {Navbar} from "../Navbar/Navbar";
import {Outlet} from "react-router-dom";
import {Footer} from "../Footer/Footer";
import './Layout.scss'

export const Layout = () => {
    return (
        <div className="app">
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}