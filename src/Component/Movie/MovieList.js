import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import { onValue, ref } from 'firebase/database';
import { Link } from 'react-router-dom';
import Delete from '../Delete/Delete';
import Button from '../UI/Button/Button';
import Input from '../Input/Input';

const MovieList = (props) => {
  
  const [movies, setMovies] = useState([]);
  const [filterTo, setFilterTo] = useState(18)
  const [num, setNum] = useState('');

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

  const onFilterTo = e => {
    setFilterTo(e.target.value);
    if(e.target.value === ''){
      setFilterTo(18)
    }
    const limit = 2;
    setNum(e.target.value.slice(0, limit));
  }

  const filteredMovies = movies.filter(item => {
    return item.ratingSystem <= filterTo;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('VALITY CHECK');
    }, 1000);

    return () => {
      console.log('CLEAN UP');
      clearTimeout(timer)
    }
  }, [filterTo])

  return (
    <>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <label className='secondary-text-color pr-1'>Age filter:</label>
          <Input
            onChange={onFilterTo}
            placeholder='To'
            type='number'
            className='border w-[70px]'
            value={num}
          />
        </div>
        <Button
          className='btn-green mb-1'
          title="Add new movie"
          onClick={props.setModal}
        />
      </div>
      <div className='theme-color'>
        <div className='theme-color flex pt-2 items-center'>
          <p className='w-[50%] font-bold'>Title</p>
          <p className='ml-auto pr-[60px] font-bold'>Actions</p>
        </div>
        {filteredMovies.map((movie) => {
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
    </>
  )
}

export default MovieList