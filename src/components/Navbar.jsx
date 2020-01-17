import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Drew DSC</Link>
            </div>
        </nav>
    )
}

export default Navbar