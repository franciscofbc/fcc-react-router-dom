import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import logo from './assets/images/logo.png';
import Footer from './pages/Footer';
import Vans from './pages/Vans';
import './server';

function App() {
  return (
    <BrowserRouter>
      <header className="container">
        <Link to="/">
          <img src={logo} alt="VANLIFE" />
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/vans" element={<Vans />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
