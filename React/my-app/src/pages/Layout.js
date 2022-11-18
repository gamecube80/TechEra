import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link> &gt; <Link to="/About">About</Link> &gt; <Link to="/Photos">Photos </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Layout;