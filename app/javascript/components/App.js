import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Greet from './Greet';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greet />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Greet />} />
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;
