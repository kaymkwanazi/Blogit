/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Register } from "./pages/Register";
import { SignIn } from "./pages/SignIn";
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

const App: React.FC = () => {
  
  return (
    <>
    <div className='md:w-8/12 mx-auto'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/register" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path='/home' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
