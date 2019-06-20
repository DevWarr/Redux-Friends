import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to="/login">Login</Link>
            <Link to="/friends">Friends</Link>
        </nav>
    );
}

export default NavBar;