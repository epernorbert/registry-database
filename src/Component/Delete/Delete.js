import React, { useState } from 'react'
import Button from '../UI/Button/Button'
import { db } from '../../firebase'
import { ref, remove } from 'firebase/database';
import Modal from '../UI/Modal/Modal';

const Delete = (props) => {

  const [modal, setModal] = useState(false)

  // get selected ID param and remove from database
  const deleteHandler = (uuid) => {
    remove(ref(db, uuid))
  }

  return (
    <>
      {modal && (
        <Modal title='Are you sure?'>
          <Button
            title='Yes, delete'
            className='btn-red'
            onClick={() => deleteHandler(props.uuid)}
          />
          <Button
            title='Cancel'
            className='btn-green'
            onClick={() => setModal(false)}
          />
        </Modal>
      )}
      <Button
        className={props.className}
        type={props.type}
        title={props.title}
        onClick={() => setModal(true)}
      />
    </>
  )
}

export default Delete