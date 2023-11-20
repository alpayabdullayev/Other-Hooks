import React from 'react'
import { useReducer } from 'react'

const reducer = (state,action) =>{
    switch (action.type) {
        case "SET_TODO":
            return {...state,value:action.value}
            break;
        case "ADD_TODO":
            return {...state,
                value: "",
                todos:[...state.todos,action.value]}
            break;
        default:
            break;
    }
}

const UseReducerTodo = () => {
    const [state, dispatch] = useReducer(reducer,{
        todos:[],
        value: ""
    })

    const handleChange = (e) =>{
        dispatch({type:"SET_TODO",value:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch({type: "ADD_TODO" ,value:state.value})
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text"  value={state.value} onChange={(e)=>handleChange(e)} />
            <button disabled={!state.value} type='submit' >add</button>
        </form>


        {
            state.todos && state.todos.map((item,index)=>(
                <ul key={index}>
                    <li>
                        {item}
                    </li>
                </ul>
            ))
        }
    </>
  )
}

export default UseReducerTodo