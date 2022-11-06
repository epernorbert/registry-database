import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import Delete from '../Delete/Delete';
import Button from '../UI/Button/Button';
import Input from '../Input/Input';
import KeyContext from '../Context/keyContextProvider';

const MovieList = (props) => {
  
  const [movies, setMovies] = useState([]);
  const [filterTo, setFilterTo] = useState(18)
  const [num, setNum] = useState(''); // number input field maxlength
  const [update, setUpdate] = useState(false)
  const key = useContext(KeyContext)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleUpdate = () => {
    setUpdate(!update);
  }

  const fetchData = async () => {
    try {
      setIsLoading(true)
      setError('')
      const response = await fetch(`https://crudcrud.com/api/${key.key}/movie`)
      const data = await response.json()
      setMovies([...data])
      setIsLoading(false)  
    } catch (e) {
      setIsLoading(false)
      setError(e.message)
    }
  }

  // read API
  useEffect(() => {
    fetchData()
  }, [props.update, update, key.key])

  // listen to filter input change
  const onFilterTo = e => {
    setFilterTo(e.target.value);
    if(e.target.value === ''){
      setFilterTo(18)
    }
    const limit = 2;
    setNum(e.target.value.slice(0, limit));
  }

  const filteredMovies = movies.filter(item => {
    return +item.ratingSystem <= +filterTo;
  });

  return (
    <>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <label className='secondary-text-color pr-1'>Age filter:</label>
          <Input
            onChange={onFilterTo}
            placeholder='Your age'
            type='number'
            className='border w-[75px]'
            value={num}
          />
        </div>
        <Button
          className='btn-green mb-1'
          title="Add new movie"
          onClick={props.setModal}
        />
      </div>
      <div className='theme-color shadow-xl'>
        <div className='theme-color flex py-2 items-center'>
          <p className='w-[50%] font-bold'>Title</p>
          <p className='ml-auto pr-[60px] font-bold'>Actions</p>
        </div>
        {error.length > 0 && !isLoading && 
          <div className="flex gap-3 py-4 border-t items-center theme-color">
            <h1 className='w-full'>{error}</h1>
          </div>
        }
        {isLoading && 
          <div className="flex gap-3 py-4 border-t items-center theme-color">
            <h1 className='w-full'>Loadin...</h1>
          </div>
        }
        {filteredMovies.length === 0 && !isLoading && error.length === 0 &&  
          <div className="flex gap-3 py-4 border-t items-center theme-color">
            <h1 className='w-full'>No data found</h1>
          </div>
        }
        {!isLoading && filteredMovies.map((movie) => {
          return( 
            <div key={movie.uuid} className="flex gap-3 py-3 border-t items-center theme-color">
              <h1 className='w-[50%]'>{movie.title}</h1>
              <Link to={`/movie/${movie._id}`} className="ml-auto" >
                <Button
                  className="btn-blue"
                  title="View"
                />
              </Link>
              <Delete
                className="btn-red mr-5"
                title="Delete"
                uuid={movie._id}
                update={handleUpdate}
              />
            </div>
            )
          })
        }
      </div>
    </>
  )
}

export default MovieList