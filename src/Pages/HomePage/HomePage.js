import React, { useState } from 'react'
import Create from '../../Component/Create/Create'
import MovieList from '../../Component/Movie/MovieList'
import Modal from '../../Component/UI/Modal/Modal'
import Button from '../../Component/UI/Button/Button'

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
      <div className='text-right'>
        <Button
          className='btn-green mb-1'
          title="Add new movie"
          onClick={() => setModal(!modal)}
        />
      </div>
      <MovieList />
    </>
  )
}

export default HomePage