import './Login.scss'
import {useContext, useState} from "react";

import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthCotext";
import logo from "../../assets/app-store.png";

export const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });
    const [err, setErr] = useState(null);

    const navigate = useNavigate()

    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))

    }
    const {login} = useContext(AuthContext)

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await login(inputs)
            navigate('/');
        } catch (err) {
            setErr(true)
        }
    }
    return (
        <div className="login">
            <div className="logoLogin">
                <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
                    <img src={logo} alt="shop logo"/>
                    <p className="logoText"> Shoes Shop</p>
                </Link>
            </div>
            <div className="cardLog">
                <h1>Zaloguj się</h1>
                <form>
                    <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                    <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                    {err && err}
                    <button onClick={handleLogin}>Zaloguj</button>
                </form>

            </div>
        </div>
    )

}