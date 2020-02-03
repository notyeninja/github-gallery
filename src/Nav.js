import React, { useState } from 'react';
import logo from './logo_1.png';
import { navigate } from '@reach/router';

function Nav(){

    const [isMeanuActive,setIsMenuActive] = useState(false);

    function toggleNav(){
        let newState = !isMeanuActive;
        setIsMenuActive(newState);
    }

    function navigateTo(e){
        debugger;
       // e.preventDefault();
        toggleNav();
        switch(e.target.text){
            case 'Home':
                navigate("/");
                break;
            case 'Repo Search':
                navigate("search-repo");
                break;
        }
    }

    return(
        <nav className="navbar is-warning is-fixed-top" 
             role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href="#" className="navbar-item">
                    <img src={logo} alt="Logo"/>
                </a>

                <a role="button" 
                   onClick={(e) => toggleNav(e)}
                   className={`navbar-burger burger ${isMeanuActive ? 'is-active':''}`} 
                   aria-label="menu" 
                   aria-expanded="false" 
                   data-target="mainNavBar">
                       <span aria-hidden="true"></span>
                       <span aria-hidden="true"></span>
                       <span aria-hidden="true"></span>
                   </a>
            </div>

            <div id="mainNavBar" className={`navbar-menu ${isMeanuActive ? 'is-active':''}`}>
                <div className="navbar-start">
                    <a onClick={ (e) => navigateTo(e)}  className="navbar-item">Home</a>
                    <a onClick={ (e) => navigateTo(e)}  className="navbar-item">Repo Search</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;