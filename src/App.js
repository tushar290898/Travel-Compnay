
import './App.css';
import Navbar from './compnents/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './compnents/Home';
import About from './compnents/About';
import Service from './compnents/Service'
import Contact from './compnents/Contact'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Service' element={<Service/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
