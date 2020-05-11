import React from 'react';

import './Header.css';

function Header () {
     return ( 
        <header className="header">
            <div className="container">
                <div className="logo">
                    <a href="index.html">
                        <img src="https://via.placeholder.com/150x60.png?text=Logo" alt="" />
                    </a>
                </div>
                <ul className="menu" id="menuPrincipal">
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a href="/">SOBRE</a>
                    </li> 
                    <li>
                        <a href="/">LOGIN</a>
                    </li>
                    <li>
                        <a href="/" className="icon">responsivo</a>
                    </li>
                </ul>
            </div>    
        </header>
    )
}
    
export default Header;
    