
import './App.css';
import {BrowserRouter, Navigate, Outlet, Route, Routes} from "react-router-dom";
import {Product} from "./views/Product/Product";
import {Login} from "./views/Login/Login";
import {Home} from "./views/Home/Home";
import {Register} from "./views/Register/Register";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Footer} from "./components/Footer/Footer";

import {AuthContext} from "./context/AuthCotext";
import {useContext} from "react";
import {CartPages} from "./views/CartPage/CartPages";


const Layout =() => {
    return (
        <div className="app">
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export const App=()=> {

  return (
      <BrowserRouter>
        <Routes>
            <Route path = '/login' element = { <Login/>} />
            <Route path = '/register' element = { <Register/> } />
            <Route path = '/' element = { <Layout/>}>
                <Route path ='/' element = { <Home/> }/>
                <Route path = 'products/:id' element = { <Product/> }/>
                <Route path= '/cart' element={<CartPages/>} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
