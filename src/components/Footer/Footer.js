import "./Footer.scss"
import fb from "../../assets/facebook.png"
import inst from "../../assets/instagram.png"
import yt from "../../assets/youtube.png"

export const Footer = () => {
    return (
        <div className="footContainer">
            <div className="footer">
                <div className="info">
                    <h2>Centum Pomocy</h2>
                    <p>Pytania i odpowiedzi</p>
                    <p>Dostawa i płatności</p>
                    <p>Zwroty i reklamacje</p>
                </div>
                <div className="info">
                    <h2>Informacje</h2>
                    <p>Aplikacje do pobrania</p>
                    <p>Karty podarunkowe</p>
                    <p>Program lojalnościowy</p>
                </div>
                <div className="info">
                    <h2>Warunki</h2>
                    <p>Polityka prywatności</p>
                    <p>Cookies</p>
                    <p>Ogólne warunki sprzedaży</p>
                </div>
                <div className="info">
                    <h2>Media społecznościowe </h2>
                    <span> <img src={fb} alt=""/> Facebook</span>
                    <span> <img src={yt} alt=""/> You Tube</span>
                    <span> <img src={inst} alt=""/> Instagram</span>
                </div>

            </div>
        </div>
    )
}