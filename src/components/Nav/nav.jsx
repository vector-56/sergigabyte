import React from 'react';
import cl from './nav.module.css'
import {NavLink} from 'react-router-dom';


function Nav() {
  return (
    <div className={cl.nav}>
          <div><NavLink to="/wrapper">Profile</NavLink></div>
          <div><NavLink to="/message">Message</NavLink></div>
          <div><NavLink to="/news">News</NavLink></div>
          <div><NavLink to="/music">Music</NavLink></div>
          <div><NavLink to="/setting">Setting</NavLink></div>
    </div>
    )
}

export default Nav;