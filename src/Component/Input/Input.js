import React from 'react'

const Input = (props) => {
  return (
    <div>
      <label>{props.title}</label>
      <input 
        type={props.type} 
        name={props.name}
        onChange={props.onChange}
        value={props.value} />
    </div>
  )
}

export default Input