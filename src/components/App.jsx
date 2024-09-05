import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from 'pages/LandingPage/LandingPage';
import Modal from './Modal/Modal';

export default function App() {
  return (
    <>
      <Modal header={{ title: 'Money Guard' }} />
    </>
  );
}
