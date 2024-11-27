/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Register } from "./pages/Register";
import { SignIn } from "./pages/SignIn";
import { Home } from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
