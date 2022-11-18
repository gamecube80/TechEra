import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Photos from './pages/Photos';
import About from './pages/About';
import Home from './pages/Home';
import Layout from './pages/Layout';

export default function Demo(){
  return(
    <BrowserRouter>
        <Routes>
              <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="about" element={<About/>} />
              <Route path="photos" element={<Photos/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();