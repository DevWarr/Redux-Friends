import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss"

const NavBar = () => {
    return (
        <nav>
            <span>Friend Database</span>
            <Link to="/login">Login</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/friends/new">Add a Friend</Link>
        </nav>
    );
}

export default NavBar;