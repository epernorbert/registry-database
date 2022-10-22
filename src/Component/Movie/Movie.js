import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { ref, onValue, } from 'firebase/database';
import React, { useEffect, useState } from 'react';

const Movie = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState("")

  // read
  useEffect(() => {
    onValue(ref(db, id), snapshot => {
      /*setTodos([])
      const data = snapshop.val();
      if(data !== null){
        Object.values(data).map(todo => {
          return setTodos(oldArray => [...oldArray, todo])
        })
      }*/
      setMovie(snapshot.val())
    })
  }, [id])

  return (
    <>
      <h1>{movie.title}</h1>
      <h2>{movie.ratingSystem}</h2>
      <p>{movie.description}</p>
    </>
  )
}

export default Movie