import React from 'react';
import logo from './logo_1.png';
import { Link } from '@reach/router';

function Nav(){
    return(
        <nav className="navbar is-warning is-fixed-top" 
             role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href="#" className="navbar-item">
                    <img src={logo} alt="Logo"/>
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" 
                   aria-expanded="false" data-target="mainNavBar">
                       <span aria-hidden="true"></span>
                       <span aria-hidden="true"></span>
                       <span aria-hidden="true"></span>
                   </a>
            </div>

            <div id="mainNavBar" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/"  className="navbar-item">Home</Link>
                    <Link to="search-repo"  className="navbar-item">Repo Search</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;