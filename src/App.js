import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

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
