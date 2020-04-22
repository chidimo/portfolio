import React from 'react';

import './App.scss';

import { Routes } from './Routes';
import { ContextProvider } from './ContextProvider';

export const App: React.FC = () => {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
};
