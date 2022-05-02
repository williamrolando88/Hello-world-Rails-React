import React from 'react';
import { Route, Router, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Greet from './Greet';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
