import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import TeltonikaPage from './pages/Teltonika/Teltonika';
import NavBar from './components/NavBar/NavBar';
import TeltonikaRouters from './pages/TeltonikaRouters/TeltonikaRouters';
import TeltonikaSwitches from './pages/TeltonikaSwitches/TeltonikaSwitches';
import TeltonikaGateways from './pages/TeltonikaGateways/TeltonikaGateways';
import Support from './pages/Support/Support';
import TeltonikaSingleRouter from './pages/TeltonikaRouters/TeltonikaSingleRouter';
import TeltonikaSingleSwitch from './pages/TeltonikaSwitches/TeltonikaSingleSwitch';
import TeltonikaSingleGateway from './pages/TeltonikaGateways/TeltonikaSingleGateway';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teltonika" element={<TeltonikaPage />} />
        <Route path="/teltonika/routers" element={<TeltonikaRouters />} />
        <Route path="/teltonika/routers/:id" element={<TeltonikaSingleRouter />} />
        <Route path="/teltonika/switches" element={<TeltonikaSwitches />} />
        <Route path="/teltonika/switches/:id" element={<TeltonikaSingleSwitch />} />
        <Route path="/teltonika/gateways" element={<TeltonikaGateways />} />
        <Route path="/teltonika/gateways/:id" element={<TeltonikaSingleGateway />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
