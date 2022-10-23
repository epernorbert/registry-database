import React from 'react'

const Input = (props) => {
  return (
    <div className={props.className + ' ' + 'flex flex-col'}>
      <label className='mb-1 text-left'>{props.title}</label>
      <input 
        className='secondary-text-color outline-none focus:theme-color focus:bg-blue-100 p-1'
        type={props.type} 
        name={props.name}
        onChange={props.onChange}
        value={props.value} />
    </div>
  )
}

export default Input