import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import Howto from './pages/Howto/index';
import Todo from './pages/Todo/index';
import Sample from './pages/Howto/sample/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='howto' element={<Howto />} />
        <Route path='todo' element={<Todo />} />
        <Route path='howto/sample' element={<Sample />} />
        <Route path='*' element={
          <main>
            <p>404エラー</p>
          </main>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
