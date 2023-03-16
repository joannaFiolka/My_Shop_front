import "./Home.scss"
import {Header} from "../../components/Header/Header";
import {Navbar} from "../../components/Navbar/Navbar";
import {Footer} from "../../components/Footer/Footer";
import {List} from "../List/List";

export const Home = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <List/>
            <Footer/>
        </div>
    )
}