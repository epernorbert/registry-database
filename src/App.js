import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Movie from './Component/Movie/Movie';
import MovieList from './Component/Movie/MovieList';
import Create from './Component/Create/Create';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<><Create/><MovieList /></>} />
        <Route path="/movie/:id"element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
