import React from 'react'

const Button = (props) => {
  return (
    <button
      className={props.className + ' ' +  'py-1 px-2 rounded'}
      type={(props.type) ? props.type : 'submit'}
      onClick={(props.onClick) ? props.onClick : null }
    >
      {props.title}
      {props.children}
    </button>
  )
}

export default Button