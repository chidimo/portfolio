import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.scss';

import { Routes } from './Routes';
import { Navigation } from './Navigation';
import { ContextProvider } from './ContextProvider';

export const App: React.FC = () => {
  return (
    <ContextProvider>
      <ToastContainer
        autoClose={2000}
        position="top-right"
        className="toast-container"
        toastClassName="dark-toast"
      />

      <Navigation />
      <Routes />
    </ContextProvider>
  );
};
