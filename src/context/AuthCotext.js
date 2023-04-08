import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {apiUrl} from "../config/api";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const login = async (inputs) => {
        const res = await axios.post(`${apiUrl}/auth/login`, inputs, {
            withCredentials: true,
        });
        setCurrentUser(res.data)
    }
    const logout = async () => {
        await setCurrentUser(null)
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser])

    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>{children}</AuthContext.Provider>
    )

};