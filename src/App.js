import React from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import MoviePage from './Pages/MoviePage/MoviePage';

function App() {

  const slug = useLocation().pathname;

  return (
    <div className="App">
      {
        (slug !== '/') ? (
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
                </li>
            </ul>
          </nav>
        ) : null
      }
          
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
