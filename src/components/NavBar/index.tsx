import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <nav className="nav-container">
            <div className="nav-center">
                <Link to="/">
                    <h3>Project Name</h3>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/login">login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
