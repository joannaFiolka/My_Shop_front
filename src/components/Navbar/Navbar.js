import "./Navbar.scss"
import logo from '../../assets/app-store.png'
import basket from '../../assets/shopping-cart.png'

export const Navbar = () => {
    return (
        <div className="containerN">
            <div className="logo">
                <img src={logo} alt="shop logo"/>
                <p className="logoText"> Shoes Shop</p>
            </div>
            <div className="search">
                <input type="text" placeholder="Szukaj..."/>
                <button className="btnSearch"> Szukaj</button>
            </div>
            <div className="basket">
                <img src={basket} alt="shop cart"/>
            </div>
        </div>
    )
}