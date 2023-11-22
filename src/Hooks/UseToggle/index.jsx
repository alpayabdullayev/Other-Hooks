import React from 'react'
import { useState } from 'react'


function UseToggle() {


    const [active, setActive] = useState(false)

    const handleClick = (val="you") =>{
        if (val=== "you") {
            setActive(!active)
            return
        }
        if (val) {
            setActive(true)
            return
        }else{
            setActive(false)
        }

    }
    return {
        active,
        handleClick,
    }

}

export default UseToggle