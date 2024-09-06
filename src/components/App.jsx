import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from 'pages/LandingPage/LandingPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';

export default function App() {
  return (
    <Routes>
      <Route path="/MoneyGuard/" element={<LandingPage />} />
      <Route path="/MoneyGuard/RegisterPage" element={<RegisterPage />} />
    </Routes>
    // <>
    //   <Modal header={{ title: 'Money Guard' }} />
    // </>
  );
}
