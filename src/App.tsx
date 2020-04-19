import React from 'react';

import './App.scss';

import { Routes } from './Routes';
import { Navigation } from './Navigation';
import { ContextProvider } from './ContextProvider';

export const App: React.FC = () => {
  return (
    <ContextProvider>
      <Navigation />
      <Routes />
    </ContextProvider>
  );
};
