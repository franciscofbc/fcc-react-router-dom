import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVans from './pages/Host/HostVans';
import HostLayoutVanDetail from './pages/Host/HostVanDetail';
import Detail from './pages/Host/Detail';
import Price from './pages/Host/Price';
import Photos from './pages/Host/Photos';
import './server';
import HostVanDetail from './pages/Host/HostVanDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans">
              <Route index element={<HostVans />} />
              <Route path=":id" element={<HostLayoutVanDetail />}>
                {/* <Route index element={<HostVanDetail />} /> */}
                <Route path="details" element={<Detail />} />
                <Route path="pricing" element={<Price />} />
                <Route path="photos" element={<Photos />} />
              </Route>
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
