import React, { useState } from 'react'
import Create from '../../Component/Create/Create'
import MovieList from '../../Component/Movie/MovieList'
import Modal from '../../Component/UI/Modal/Modal'

const HomePage = () => {

  const [modal, setModal] = useState(false)

  return (
    <>
      <header className='secondary-text-color my-5 text-3xl font-semibold'>
        <h1>All movie in database</h1>
      </header>
      {(modal) && (
        <Modal title="Add new movie">
          <Create onClick={() => setModal(!modal)} />
        </Modal>
      )}
      <MovieList setModal={() => setModal(!modal)} />
    </>
  )
}

export default HomePage