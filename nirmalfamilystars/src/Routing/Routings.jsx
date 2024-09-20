import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../Components/LoginComp/Login';
import Dashboard from '../Components/Dashboard/Dashboard';
import Income from '../Components/IncomeComp/Income';
const Routings = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/income" element={<Income />} />
     </Routes>
    </BrowserRouter>
  )
}

export default Routings