import React from 'react'
import './Header.css';
import{Link} from 'react-router-dom'
function Header() {
    return (
        <div>

        <header className="header">
        <ul className="nav-links">
            
                    <li>
                        <Link className="links" to="/watchlist">WatchList</Link>
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
