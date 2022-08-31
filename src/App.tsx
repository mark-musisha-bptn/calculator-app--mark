import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Stack } from './global/utils/utils';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/notFound/NotFound';

const Stacked = new Stack();

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
