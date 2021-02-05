import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link className="links" to="/">
              Featured
            </Link>
          </li>
          <li>
            <Link className="links" to="/watchlist">
              WatchList
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
