import React from 'react';

function Nav(){
    return(
        <nav className="navbar is-dark" 
             role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href="#" className="navbar-item">
                    <img src={ process.env.PUBLIC_URL + 'logo_1.png'} alt="Logo"/>
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
                    <a  className="navbar-item">Home</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;