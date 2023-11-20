import React from 'react'
import { useRef } from 'react'

const UseRef = () => {
    const inp = useRef()
    const btn = useRef()

    const showValue =()=>{
        console.log(inp.current.value);
        console.log(btn.current.textContent);
    }
  return (



    <>
    
    <input type="text"  ref={inp}/>
    <button onClick={showValue}  ref={btn}>Show</button>

    </>
  )
}

export default UseRef