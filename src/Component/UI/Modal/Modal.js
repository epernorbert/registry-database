import React from 'react'

const Modal = (props) => {
  return (
    <div className={props.className + ' ' + 'absolute backdrop-blur-[2px] bg-[#000000]/[.7] w-[100%] h-[100%] left-0 top-0'}>
      <div className='relative top-[50%] m-auto w-fit theme-color translate-y-[-50%] p-6'>
        <header className='p-3 mb-3 btn-blue absolute top-0 left-0 w-[100%]'>
          <h1 className='text-xl font-semibold'>{props.title}</h1>
        </header>
        <div className='mt-14 flex gap-[20px]'>{props.children}</div>
      </div>
    </div>
  )
}

export default Modal