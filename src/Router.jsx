import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './templates/Home';
import SignUp from './templates/SignUp';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
