import './App.css';
import {BrowserRouter, Navigate, Outlet, Route, Routes} from "react-router-dom";
import {Product} from "./views/Product/Product";
import {Login} from "./views/Login/Login";
import {Home} from "./views/Home/Home";
import {Register} from "./views/Register/Register";
import {CartPages} from "./views/CartPage/CartPages";
import {Layout} from "./components/Layout/Layout";


export const App = () => {

    return (
        <BrowserRouter>

            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/search/:term' element={<Home/>}/>
                    <Route path='products/:id' element={<Product/>}/>
                    <Route path='/cart' element={<CartPages/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
