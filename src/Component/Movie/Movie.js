import { useParams, Link } from 'react-router-dom';
import { db } from '../../firebase';
import { ref, onValue, update } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import Button from '../UI/Button/Button';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';

const Movie = () => {
  const {id} = useParams(); 
  const [movie, setMovie] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const [title, setTitle] = useState("")
  const [ratingSystem, setRatingSystem] = useState("")
  const [description, setDescription] = useState("")

  // read from database
  useEffect(() => {
    onValue(ref(db, id), snapshot => {
      setTitle(snapshot.val().title)
      setRatingSystem(snapshot.val().ratingSystem)
      setDescription(snapshot.val().description)
      setMovie(snapshot.val())
    })
  }, [id])

  const editHandler = () => {
    setIsEdit(true)
  }

  const titleChangeHander = event => {
    setTitle(event.target.value);
  }

  const ratingChangeHandler = event => {
    setRatingSystem(event.target.value)
  }

  const descriptionHandler = event => {
    setDescription(event.target.value)
  }

  // update in database
  const handleUpdate = (e) => {
    e.preventDefault()
    update(ref(db, id),{
      uuid : id,
      title,
      ratingSystem,
      description
    })
    setIsEdit(false)
  }

  return (
    <>
      {
        isEdit ? (
          <form onSubmit={handleUpdate}>
            <header className='secondary-text-color mb-12 mt-4 text-3xl font-semibold border'>
              <Input type="text" value={title} name="title" onChange={titleChangeHander} />
            </header>
            <div className='theme-color mt-8'>
              <div className='theme-color flex p-2 items-center'>
                <div className='w-[60%] font-bold'>Description</div>
                <div className='w-[20%] font-bold'>Age rating</div>
                <div className='w-[20%] font-bold'>Action</div> 
              </div>
              <div className='theme-color flex pt-2 my-2 p-2 border-t items-center'>
                <div className='w-[60%] text-left'>
                  <TextArea type="text" value={description} name="description" onChange={descriptionHandler} /> 
                </div>
                <div className='w-[20%]'>
                  <Input type="number" max='18' value={ratingSystem} name="rating" className="max-w-[30%] mx-auto" onChange={ratingChangeHandler} />
                </div>
                <div className='w-[20%] flex justify-evenly'>
                  <Button
                    className="btn-red"
                    title="Save"
                  /> 
                  <Button
                    className="btn-green"
                    title="Cancel"
                    onClick={() => setIsEdit(false)}
                  /> 
                </div> 
              </div>
            </div> 
          </form>
        ) : (
          <>
            <header className='secondary-text-color my-5 text-3xl font-semibold'>
              <h1>{movie.title}</h1>
            </header>
              <div className='text-right mb-1'>
                <Button className='btn-green'>
                  <Link to="/">Home</Link>
                </Button>
              </div>
              <div className='theme-color'>
                <div className='theme-color flex p-2 items-center font-bold'>
                  <p className='w-[60%]'>Description</p>
                  <p className='w-[20%]'>Age rating</p>
                  <p className='w-[20%]'>Action</p> 
                </div>
                <div className='theme-color flex pt-2 my-2 p-2 border-t items-center'>
                  <p className='w-[60%] text-left'>{movie.description}</p>
                  <p className='w-[20%]'>{movie.ratingSystem}</p>
                  <p className='w-[20%]'>
                    <Button
                      className="btn-blue"
                      title="Edit"
                      onClick={editHandler}
                    />  
                  </p> 
                </div>                
            </div>
          </>
        )
      }
    </>
  )
}

export default Movie