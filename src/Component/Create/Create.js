import React, { useState, useContext } from 'react'
import { uid } from 'uid';
import Input from '../Input/Input'
import Button from '../UI/Button/Button'
import TextArea from '../TextArea/TextArea';
import KeyContext from '../Context/keyContextProvider';

const Create = (props) => {

  const [title, setTitle] = useState("")
  const [ratingSystem, setRatingSystem] = useState("")
  const [description, setDescription] = useState("")
  const key = useContext(KeyContext)

  const titleChangeHander = event => {
    setTitle(event.target.value);
  }

  const ratingChangeHandler = event => {
    setRatingSystem(event.target.value)
  }

  const descriptionHandler = event => {
    setDescription(event.target.value)
  }
    
  // store API
  const submitHandler = event => {
    event.preventDefault();
    const uuid = uid();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        uuid: uuid,
        title: title,
        ratingSystem: ratingSystem,
        description: description
        })
      };
      fetch(`https://crudcrud.com/api/${key.key}/movie`, requestOptions)
        .then(response => response.json())
        .then(props.triggerUpdate)

    setTitle("");
    setRatingSystem("");
    setDescription("");
  }

  return (
    <form onSubmit={submitHandler} className="flex items-center justify-center flex-col gap-2">
      <div className='flex gap-7 content-center'>
        <Input
          title="Movie title"
          type="text"
          name="title"
          onChange={titleChangeHander}
          value={title}
        />
        <Input
          title="Rating system"
          type="number"
          name="rating"
          onChange={ratingChangeHandler}
          value={ratingSystem}
          max='18'
        />
      </div>
      <TextArea
        className="flex items-center h-[140px]"
        title="Description"
        type="text"
        name="description"
        onChange={descriptionHandler}
        value={description}
      />
      <div className='flex mt-4 w-full gap-5'>
        <Button
          title="Add new movie"
          type="submit"
          className="btn-green w-[50%]"
        />
        <Button
          title="Close"
          type="submit"
          className="btn-red w-[50%]"
          onClick={props.onClick}
        />
      </div>
    </form>
  )
}

export default Create