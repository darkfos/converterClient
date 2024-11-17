import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeRedux from './store/storeRedux';

// Pages
import App from './App';
import CompressPage from './core/pages/CompressPage';
import ConvertPage from './core/pages/ConvertPage';
import ProfilePage from './core/pages/ProfilePage';
import AuthModal from './core/widgets/modals/AuthModal';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={storeRedux}>
    <AuthModal isClosed={true}/>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route element={<App />} path='/'></Route>
            <Route element={<CompressPage />} path='/compress'></Route>
            <Route element={<ConvertPage />} path='/convert'></Route>
            <Route element={<ProfilePage />} path='/profile'></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);