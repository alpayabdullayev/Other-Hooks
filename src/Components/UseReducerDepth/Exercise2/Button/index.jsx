import React from 'react'

const Button = ({text,dispatch,action}) => {
    function handleClick(ac) {
        dispatch(action)
    }
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

export default Button