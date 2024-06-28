import React from 'react';

import './App.css';
import HomeScreen from './HomeScreen';
import Movie from './features/counter/Movie';
import Login from './features/counter/Login';
import { Route, BrowserRouter, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
            <Route index element={<HomeScreen/>}/>
            <Route path='Movie' element={<Movie/>} />
            <Route path='Login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
