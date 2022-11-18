import React from "react";
import {outlet, Link} from "react-router-dom";

const Layout = () =>{
    <nav>
        <ul>
            <li>
                <Link to = "/Home"></Link>
            </li>
            <li>
                <Link to = "/About"></Link>
            </li>
            <li>
                <Link to = "/Photos"></Link>
            </li>
        </ul>
    </nav>
}

export default Layout;