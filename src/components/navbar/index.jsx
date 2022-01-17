import React from "react";
import './styles.css'


export const Navbar = ({isAuth}) => {
    return (
        <div className='navbar'>
            <text>Awar</text>
            <text>Awar</text>
            <text>Awar</text>
            {isAuth ? <text>Auth</text> : <text>NoAuth</text>}
        </div>
    )
}
