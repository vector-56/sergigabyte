import React from 'react';
import cl from './nav.module.css'

function Nav() {
    return (
        <div className={cl.nav}>
        <div><a href="#">Profile</a></div>
        <div><a href="#">Message</a></div>
        <div><a href="#">News</a></div>
        <div><a href="#">Music</a></div>
        <div><a href="#">Setting</a></div>
      </div>)
}

export default Nav;