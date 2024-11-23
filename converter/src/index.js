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


setTimeout(() => {
  console.log(1)
}, 1000);


root.render(
  <Provider store={storeRedux}>
    {document.cookie.includes("access_token") && document.cookie.includes("refresh_token") ? null : <AuthModal isClosed={true}/>}
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route element={<App />} path='/'></Route>
            <Route element={document.cookie.includes("access_token") && document.cookie.includes("refresh_token") ? <CompressPage /> : <App />} path='/compress'></Route>
            <Route element={document.cookie.includes("access_token") && document.cookie.includes("refresh_token") ? <ConvertPage /> : <App />} path='/convert'></Route>
            <Route element={document.cookie.includes("access_token") && document.cookie.includes("refresh_token") ? <ProfilePage /> : <App />} path='/profile'></Route>
            <Route element={<App />} path="/*"/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);