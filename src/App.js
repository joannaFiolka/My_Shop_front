
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Product} from "./views/Product/Product";
import {Login} from "./views/Login/Login";
import {Home} from "./views/Home/Home";
import {List} from "./views/List/List";



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = { <Home/> } />
          <Route path = '/hotels' element = { <List/> } />
          <Route path = '/hotels/:id' element = { <Product/> } />
          <Route path = '/login' element = { <Login/> } />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
