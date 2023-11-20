import React from 'react'
import Button from '../Button'
import { useReducer } from 'react';

function reducer(state,action) {
    switch (action.type) {
        case "PLUS":
            return state + action.value
            break;
        case "MINUS":
            return state = action.value
            break
        case "RESET":
            return 0
            break            
        default:
            break;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer,1)


  return (
    <>
    
    <h1>{state}</h1>
    <Button action={{type:"PLUS",value:1}} text={"plus"} dispatch={dispatch}/>
    <Button action={{type:"MINUS",value:1}} text={"minus"} dispatch={dispatch}/>
    <Button action={{type:"RESET"}} text={"reset"} dispatch={dispatch}/>
    
    </>
  )
}

export default Counter