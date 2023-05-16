import React from 'react';
import { NavLink } from 'react-router-dom';
import {IoHome, IoGameController} from "react-icons/io5";
import {FaMedal} from 'react-icons/fa'
import Dropdown from './Dropdown/Dropdown';


function Menu() {
    
    return (
        <nav>
        <h2>Constellation Kids</h2>
        <NavLink to="/"><IoHome size="30" color='white'/></NavLink>
        <NavLink to="/games"><IoGameController size="30" color='white'/></NavLink>
        <NavLink to="/scoreboard"><FaMedal size="30" color='white'/></NavLink>
        <Dropdown />
        </nav>
    )

}

export default Menu