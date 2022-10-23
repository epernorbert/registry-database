import React from 'react'

const TextArea = (props) => {
  return (
    <div className={props.className + ' ' + 'flex flex-col w-full'}>
      <label className='mb-1 text-left w-full'>{props.title}</label>
      <textarea 
        className='secondary-text-color w-full h-[140px] outline-none focus:bg-blue-100 p-1'
        type={props.type} 
        name={props.name}
        onChange={props.onChange}
        value={props.value} />
    </div>
  )
}

export default TextArea