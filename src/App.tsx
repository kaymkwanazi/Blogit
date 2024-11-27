/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Register } from "./pages/Register";
import { SignIn } from "./pages/SignIn";
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  
  return (
    <>
    <div className='md:w-8/12 mx-auto'>
        <Navbar />
      
        <BrowserRouter>
        {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Navigate to="/register" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
