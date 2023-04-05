import "./Header.scss"
import fb from "../../assets/facebook.png"
import inst from "../../assets/instagram.png"
import yt from "../../assets/youtube.png"


export const Header = () => {
    return (
        <div className="containerHeader">
            <div className="left">
                <p>+68 12 36 56 591</p>
                <p> info@myshop.pl</p>
            </div>
            <div className="right">
                <img src={fb} alt=""/>
                <img src={inst} alt=""/>
                <img src={yt} alt=""/>
            </div>
        </div>
    )
}