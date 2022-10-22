import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import { onValue, ref } from 'firebase/database';
import { Link } from 'react-router-dom';
import Delete from '../Delete/Delete';

const MovieList = () => {
  
  const [movies, setMovies] = useState([]);

  // read
  useEffect(() => {
    onValue(ref(db), snapshop => {
      setMovies([])
      const data = snapshop.val();
      //console.log(Object.keys(data)); // return object keys(uuid)
      if(data !== null){
        Object.values(data).map(movie => {
          return setMovies(oldArray => [...oldArray, movie])
        })
      }
    })
  }, [])

  return (
    <>
      {movies.map((movie) => {
        return(
          <div key={movie.uuid}>
            <Link to={`/movie/${movie.uuid}`}>
              <h1>{movie.title}</h1>
            </Link>
            <Delete
              type="submit"
              title="Delete"
              uuid={movie.uuid}
            />
          </div>
          )
      })}
    </>
  )
}

export default MovieList