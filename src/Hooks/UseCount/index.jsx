import React, { useState } from "react";

function UseCount() {

    const [count, setCount] = useState(1)

    const handleClick = ()=>{
        setCount(x=>x+1)
    }
    const handleClickMinus =()=>{
        setCount(x=>x-1)
    }


  return [count,handleClick,handleClickMinus]
}

export default UseCount;
