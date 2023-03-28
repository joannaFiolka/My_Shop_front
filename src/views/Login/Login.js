import './Login.scss'
import {useContext, useState} from "react";

import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthCotext";

export const Login = () => {
    const [inputs, setInputs] = useState({
        username:"",
        password:"",
    });
    const[err, setErr] = useState(null);

    const navigate = useNavigate()

    const handleChange = e =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))

    }
    const {login} = useContext(AuthContext)

    const handleLogin = async(e) =>{
        e.preventDefault()
        try{
            await login(inputs)
            navigate('/');
        } catch (err){
            setErr(true)
        }
    }
    return (
        <div className="login">

            <div className="card">
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