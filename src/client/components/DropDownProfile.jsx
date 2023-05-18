import React, {useState} from 'react'


export default function DropDownProfile({info, title}) {
    const [toggle, setToggle] = useState(false)
 
    return (
        <div className='dropdown'>
            <div className='dropdown-title'>
            <h3 className={toggle ? "active" : "nothing"} onClick={() => setToggle(!toggle)}>{title}</h3>
            </div>
            {
                toggle
                ? 
                <p className='logout-info'>{info}</p>
                : 
                null
            }
        </div>
    )
}
