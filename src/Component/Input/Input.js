import React from 'react'

const Input = (props) => {
  console.log(props.maxLength);
  return (
    <div className={props.className + ' ' + 'flex flex-col'}>
      {props.title && <label className='mb-1 text-left'>{props.title}</label>}
      <input 
        className='secondary-text-color outline-none focus:theme-color focus:bg-blue-100 px-1'
        type={props.type} 
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        max={props.max}
        required />
    </div>
  )
}

export default Input