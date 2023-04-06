import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import TeltonikaPage from './pages/Teltonika/Teltonika';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teltonika" element={<TeltonikaPage />} />
      </Routes>
    </>
  );
}

export default App;
