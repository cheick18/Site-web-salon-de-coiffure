import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Rendezvous from './Pages/Rendezvous';
import About from './Pages/About';
import Home from './Pages/Home';
import CustomNavbar from './Components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
    <div className="App">
        <Routes>
      
        <Route path="/" element={< Home/>} />
          <Route path="/rendez-vous" element={< Rendezvous/>} />
          <Route path="/about" element={<About />} />

        </Routes>
      
        <Outlet />
    
    </div>

    
    </BrowserRouter>
  );
}

export default App;
