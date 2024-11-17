import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeRedux from './store/storeRedux';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={storeRedux}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route element={<App />} path='/'></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);