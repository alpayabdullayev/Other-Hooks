import React from 'react'
import { useState } from 'react';
import UseToggle from '../../Hooks/UseToggle'
import "./index.css"



function Navbar() {

    const { active, handleClick } = UseToggle();
    
  return (
   <>
            <button className="hamburger" onClick={()=>{handleClick()}}>
                show
            </button>



    <div className={`sidebar ${active ? 'active' : ''}`}>
        <ul className='navbar-links-SideBar'>
                <li className='Home'><a href="">Home
                </a></li>
                <li><a href="">About</a></li>
                <li><a href="">Restauramty</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Contact</a></li>
            </ul>
    </div>
   
   </>
  )
}

export default Navbar