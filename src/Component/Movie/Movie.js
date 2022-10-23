import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { ref, onValue, update } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import Button from '../UI/Button/Button';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';

const Movie = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const [title, setTitle] = useState("")
  const [ratingSystem, setRatingSystem] = useState("")
  const [description, setDescription] = useState("")

  // read
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
            <Input type="text" value={title} name="title" onChange={titleChangeHander} />
            <Input type="text" value={ratingSystem} name="rating" onChange={ratingChangeHandler} />
            <TextArea type="text" value={description} name="description" onChange={descriptionHandler} /> 
            <Button
              type="submit"
              title="Save"
            /> 
            <Button
              type="submit"
              title="Cancel"
              onClick={() => setIsEdit(false)}
            /> 
          </form>
        ) : (
          <>
            <h1>{movie.title}</h1>
            <h2>{movie.ratingSystem}</h2>
            <p>{movie.description}</p>
            <Button
              type="submit"
              title="Edit"
              onClick={editHandler}
            />   
          </>
        )
      }
    </>
  )
}

export default Movie