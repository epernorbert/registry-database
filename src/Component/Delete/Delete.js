import React from 'react'
import Button from '../UI/Button/Button'
import { db } from '../../firebase'
import { ref, remove } from 'firebase/database';

const Delete = (props) => {

  const deleteHandler = (uuid) => {
    remove(ref(db, uuid))
  }

  return (
    <Button
      type={props.type}
      title={props.title}
      onClick={() => deleteHandler(props.uuid)}
    />
  )
}

export default Delete