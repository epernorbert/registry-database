import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import { onValue, ref } from 'firebase/database';
import { Link } from 'react-router-dom';
import Delete from '../Delete/Delete';
import Button from '../UI/Button/Button';

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
    <div className='theme-color'>
      <div className='theme-color flex pt-2 items-center'>
        <p className='w-[50%] font-bold'>Title</p>
        <p className='ml-auto pr-[60px] font-bold'>Actions</p>
      </div>
      {movies.map((movie) => {
        return(
          <div key={movie.uuid} className="flex gap-3 my-2 py-2 border-t items-center theme-color">
            <h1 className='w-[50%]'>{movie.title}</h1>
            <Link to={`/movie/${movie.uuid}`} className="ml-auto" >
              <Button
                className="btn-blue"
                title="View"
              />
            </Link>
            <Delete
              className="btn-red mr-5"
              title="Delete"
              uuid={movie.uuid}
            />
          </div>
          )
      })}
    </div>
  )
}

export default MovieList