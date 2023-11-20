import React from 'react'
import { useReducer } from 'react'

function reducer(state,action) {
    console.log({state}, {action});
    switch (action.type) {
        case "RESET":
            // return 0
            return state = action.value
            break;
        case "PLUS":
            return state + action.value
            break;
        case "MINUS":
            return state - action.value
        default:
            break;
    }
}

const Exercise1 = () => {
    const [state, dispatch] = useReducer(reducer,1)


    const handleCLickReset = () =>{
        dispatch({type:"RESET",value:0})
    }
    const handleCLickPlus    = () =>{
        dispatch({type:"PLUS" , value:1})
        
    }
    const handleCLickMinus = () =>{
        dispatch({type:"MINUS",value:1})
        
    }

  return (
    <>
    
    <h1>{state}</h1>
    <button onClick={handleCLickReset}>reset</button>
    <button onClick={handleCLickPlus}>+</button>
    <button onClick={handleCLickMinus}>-</button>

    </>
  )
}

export default Exercise1