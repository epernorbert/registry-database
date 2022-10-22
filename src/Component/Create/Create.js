import React, { useState } from 'react'
import { db } from '../../firebase';
import { uid } from 'uid';
import { set, ref } from 'firebase/database';
import Input from '../Input/Input'
import Button from '../UI/Button/Button'
import TextArea from '../TextArea/TextArea';

const Create = () => {

  const [title, setTitle] = useState("")
  const [ratingSystem, setRatingSystem] = useState("")
  const [description, setDescription] = useState("")

  const titleChangeHander = event => {
    setTitle(event.target.value);
  }

  const ratingChangeHandler = event => {
    setRatingSystem(event.target.value)
  }

  const descriptionHandler = event => {
    setDescription(event.target.value)
  }
    
  // store in database
  const submitHandler = event => {
    event.preventDefault();
    const uuid = uid();
    set(ref(db, uuid), {
      uuid,
      title,
      ratingSystem,
      description
    })
    setTitle("");
    setRatingSystem("");
    setDescription("");
  }

  return (
    <form onSubmit={submitHandler}>
      <Input
        title="Movie title"
        type="text"
        name="title"
        onChange={titleChangeHander}
        value={title}
      />
      <Input
        title="Rating system"
        type="text"
        name="rating"
        onChange={ratingChangeHandler}
        value={ratingSystem}
      />
      <TextArea
        title="Description"
        type="text"
        name="description"
        onChange={descriptionHandler}
        value={description}
      />
      <Button
        title="Add new movie"
        type="submit"
      />
    </form>
  )
}

export default Create