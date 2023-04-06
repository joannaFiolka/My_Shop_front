import './Register.scss'
import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import logo from "../../assets/app-store.png";
import {apiUrl} from "../../config/api";


export const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [err, setErr] = useState(null)
    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))

    }
    const handleClick = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${apiUrl}/auth/register`, inputs)
        } catch (err) {
            setErr(err.message)
        }
    };

    console.log(err)
    return (
        <div className="register">

            <div className="logoLogin">
                <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
                    <img src={logo} alt="shop logo"/>
                    <p className="logoText"> Shoes Shop</p>
                </Link>
            </div>
            <div className="cardRegister">
                <h1>Zarejestruj konto</h1>
                <form>
                    <input name="username" type="text" placeholder="Username" onChange={handleChange}/>
                    <input name="email" type="email" placeholder="Email" onChange={handleChange}/>
                    <input name="password" type="password" placeholder="Password" onChange={handleChange}/>
                    {err && err}
                    <button onClick={handleClick}>Zarejestruj się</button>

                </form>
            </div>

        </div>
    )

}