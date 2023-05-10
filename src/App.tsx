import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import TeltonikaPage from './pages/Teltonika/Teltonika';
import NavBar from './components/NavBar/NavBar';
import TeltonikaRouters from './pages/TeltonikaRouters/TeltonikaRouters';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teltonika" element={<TeltonikaPage />} />
        <Route path="/teltonika/routers" element={<TeltonikaRouters />} />
      </Routes>
    </>
  );
}

export default App;
