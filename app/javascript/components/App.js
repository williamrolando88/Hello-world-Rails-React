import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/configStore';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Greet from './Greet';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Greet />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
