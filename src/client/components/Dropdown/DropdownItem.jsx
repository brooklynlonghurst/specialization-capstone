import React from 'react'
import { TbLogout } from "react-icons/tb";

function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <TbLogout size="25" color='white'/>
        <a href='/auth'> {props.text} </a>
      </li>
    );

}

export default DropdownItem