import React from 'react'
import './Header.css';
function Header() {
    return (
        <div>

        <header className="header">
        <ul className="nav-links">
            
                    <li>
                        <h2 to="/">WatchList</h2>
                    </li>
                    <li>
                        <h2 to="/watched">Watched</h2>
                    </li>
                   
                </ul>
      </header>
 
            
        </div>
    )
}

export default Header
