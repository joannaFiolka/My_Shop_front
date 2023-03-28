import './Register.scss'
import {useState} from "react";
import axios from "axios";


export const Register = () => {
    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
    });

    const[err, setErr] = useState(null)
    const handleChange = e =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))

    }
    const handleClick = async (e) => {
        e.preventDefault()
        try{
            await axios.post('http://localhost:3002/auth/register', inputs)
        } catch(err) {
            setErr(err.message)
            //ToDo obsluga błędów
        }
    };

    console.log(err)
    return (
        <div className="register">
            <div className="card">
                    <h1>Zarejestruj konto</h1>
                    <form >
                        <input name="username" type="text" placeholder="Username" onChange={handleChange}/>
                        <input name="email"  type="email" placeholder="Email" onChange={handleChange} />
                        <input name="password"  type="password" placeholder="Password" onChange={handleChange}/>
                        {err && err}
                        <button onClick={handleClick} >Zarejestruj się</button>

                    </form>
            </div>

        </div>
    )

}