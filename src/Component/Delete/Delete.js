import React, { useState, useContext } from 'react'
import Button from '../UI/Button/Button'
import Modal from '../UI/Modal/Modal';
import KeyContext from '../Context/keyContextProvider';

// delete API
const Delete = (props) => {

  const [modal, setModal] = useState(false)
  const key = useContext(KeyContext)

  // get selected ID param and remove from database
  const deleteHandler = (id) => {
    fetch(`https://crudcrud.com/api/${key.key}/movie/${id}`,
      { method: 'DELETE' })
      .then(props.update)
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