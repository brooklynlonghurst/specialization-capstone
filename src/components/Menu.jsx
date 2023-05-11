import React from 'react';
import Quiz from '../screens/Quiz';
import { NavLink } from 'react-router-dom';


function Menu() {
    return (
        <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/quiz">Quiz</NavLink>
   
        </nav>
    )
}

export default Menu