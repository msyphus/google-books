import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                    Google Bookster
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/search" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                    Search Books
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                    Saved Books
                </Link>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;
