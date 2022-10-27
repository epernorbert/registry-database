import React, { useState } from 'react'
import Create from '../../Component/Create/Create'
import MovieList from '../../Component/Movie/MovieList'
import Modal from '../../Component/UI/Modal/Modal'

const HomePage = () => {

  const [modal, setModal] = useState(false)
  const [update, setUpdate] = useState(false)

  const handleUpdate = () => {
    setUpdate(!update);
  }

  return (
    <>
      <header className='secondary-text-color my-5 text-3xl font-semibold'>
        <h1>All stored movie</h1>
      </header>
      {(modal) && (
        <Modal title="Add new movie">
          <Create onClick={() => setModal(!modal)} triggerUpdate={handleUpdate}  />
        </Modal>
      )}
      <MovieList setModal={() => setModal(!modal)} update={update} />
    </>
  )
}

export default HomePage