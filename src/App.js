import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import MoviePage from './Pages/MoviePage/MoviePage';

function App() {
  return (
    <div className="App m-auto primary-text-color max-w-4xl box-border">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
