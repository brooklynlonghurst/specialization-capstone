import React, {useState, useEffect, useRef} from 'react'
import { BsPersonCircle } from "react-icons/bs";

import DropdownItem from './DropdownItem';

function Dropdown() {
    const [open, setOpen] = useState(false)
    let menuRef = useRef()

    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)){
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler)
        return() => {
            document.removeEventListener("mousedown", handler)
        }
    })


    return (
        <div className='menu-container' ref={menuRef}>
            <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                <BsPersonCircle size="30" color='white' />
                <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                    <ul>
                        <DropdownItem 
                         text= {"Logout"} />
                    </ul>
                </div>
            </div>
        </div>
    )
    
}

export default Dropdown