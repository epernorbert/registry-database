import React from 'react'

const TextArea = (props) => {
  return (
    <div className={props.className + ' ' + 'flex flex-col w-full'}>
      {props.title && <label className='mb-1 text-left w-full'>{props.title}</label>}
      <textarea 
        className='secondary-text-color w-full outline-none focus:bg-blue-100 p-1 h-full'
        type={props.type} 
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        maxLength="200"
        required />
    </div>
  )
}

export default TextArea