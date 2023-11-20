import React from 'react'
import { useReducer } from 'react'


function reducer(state,action) {
    switch (action.type) {
        case "CHANGE":
            return {...state,
                [action.value.name]:action.value.value}
            break;
    
        default:
            break;
    }
}


const initialDeyer = {
    name : "",
    email : "",
    work: '',
    age : ''

}

const ControlledForm = () => {
    const [formState, dispatchForm] = useReducer(reducer,initialDeyer)


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formState);
    }

    const formChange = (e) =>{
        console.log(e.target.value);
        dispatchForm({type:"CHANGE",value:{name:e.target.name,value:e.target.value}})
    }
  return (
    <>
    
    <form onSubmit={(e)=>handleSubmit(e)} onChange={formChange}>
            <input type="text" name='name' value={formState.name} />
            <input type="text" name='email' value={formState.email}/>
            <input type="text" name='work' value={formState.work}/>
            <input type="number" name='age' value={formState.age}/>

            <button type='submit'>ADD USER</button>
    </form>
    
    </>
  )
}

export default ControlledForm