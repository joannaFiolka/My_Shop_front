import "./Navbar.scss"
import logo from '../../assets/app-store.png'
import basket from '../../assets/shopping-cart.png'
import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {Cart} from "../Cart/Cart";
import {useSelector} from "react-redux";
import {AuthContext} from "../../context/AuthCotext";

export const Navbar = () => {
    const products = useSelector(state=>state.cart.products );;
    const [open, setOpen]=useState(false);
    const {currentUser, user, login, logout } = useContext(AuthContext);
    const[err, setErr] = useState(false);
    const navigate = useNavigate()


    const handleLogout = async(e) =>{
        e.preventDefault()
        try{
            await logout()
            navigate('/');
        } catch (err){
            setErr(true)
        }
    }
    return (
        <div className="containerN">
            <div className="logo">
                <Link to="/"  style={{ color: "inherit", textDecoration: "none"}}>
                    <img src={logo} alt="shop logo"/>
                    <p className="logoText"> Shoes Shop</p>
                </Link>
            </div>
            <div className="search">
                <input type="text" placeholder="Szukaj..."/>
                <button className="btnSearch"> Szukaj</button>
            </div>

                <div className="loginWrapper">
                    {currentUser ? (<div className="logout"><p>{currentUser.otherDetails.username}</p> <button className="logoutBtn" onClick={handleLogout}>Wyloguj</button></div>): (
                        <div className="navItem">
                            <Link to="/register" className="navBtn">REGISTER</Link>
                            <Link to="/login" className="navBtn">LOGIN</Link>
                        </div>
                    )}
                </div>

            <div className="basket">
                <img src={basket} alt="shop cart" onClick={()=>setOpen(!open)}/>
                <span>{products.length}</span>
            </div>
            {open && <Cart/>}
        </div>
    )
}