import React from 'react'

const TextArea = (props) => {
  return (
    <div>
      <label>{props.title}</label>
      <textarea 
        type={props.type} 
        name={props.name}
        onChange={props.onChange}
        value={props.value} />
    </div>
  )
}

export default TextArea