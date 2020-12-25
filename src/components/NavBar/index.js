import React from 'react';
    import { NavLink } from 'react-router-dom';
    import './NavBar.css';
    
    const Navbar = () => (
      <nav className='navbar'>
    <div className='item'>
         <NavLink
            exact
          activeClassName="navbarLinkActive"
          className="navbar__link"
          to="/"
        >
          Home
        </NavLink>
        <div className='circleButton'></div>
    </div>

    <div className='item'>
       <NavLink
          activeClassName="navbarLinkActive"
          className="navbar__link"
          to="/About"
        >
         A propos
        </NavLink>
        <div className='circleButton'></div>
    </div>

    <div className='item'>

        <NavLink
          activeClassName="navbarLinkActive"
          className="navbar__link"
          to="/AuHasard"
        >
          La roue de la fortune
        </NavLink>
        <div className='circleButton'></div>
    </div>

    
    <div className='item'>
        <NavLink
          activeClassName="navbarLinkActive"
          className="navbar__link"
          to="/Work"
        >
          Tous mes projets
        </NavLink>
        <div className='circleButton'></div>
    </div>

    <div className='item'>

        <NavLink
          activeClassName="navbarLinkActive"
          className="navbar__link"
          to="/Contact"
        >
          Contact
        </NavLink>
        <div className='circleButton'></div>
    </div>
      </nav>
    );
    
    export default Navbar;


