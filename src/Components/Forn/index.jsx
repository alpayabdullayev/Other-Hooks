import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const Form = () => {
    const [username, setUsername] = useState(localStorage.getItem("username") ? localStorage.getItem("username") : '')


    
    useEffect(() => {
        localStorage.setItem("username",username)
    }, [username])



    useEffect(() => {
        const istifadeciAdi = localStorage.getItem("username")
        setUsername(istifadeciAdi)
    }, [])
    

  return (


    
   <>
   
   <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />

   <h1>{username}</h1>
   </>
  )
}

export default Form