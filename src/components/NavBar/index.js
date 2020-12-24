import React from 'react';
    import { NavLink } from 'react-router-dom';
    import './NavBar.css';
    
    const Navbar = () => (
      <nav className='navbar'>

         <NavLink
            exact
          activeClassName="navbarLinkActive"
          className="navbar__link"
          to="/"
        >
          Home
        </NavLink>


       <NavLink
          activeClassName="navbarLinkActive"
          className="navbar__link"
          to="/About"
        >
         A propos
        </NavLink>

        <NavLink
          activeClassName="navbarLinkActive"
          className="navbar__link"
          to="/AuHasard"
        >
          🙈
        </NavLink>


        <NavLink
          activeClassName="navbarLinkActive"
          className="navbar__link"
          to="/Work"
        >
          Tous mes projets
        </NavLink>

        <NavLink
          activeClassName="navbarLinkActive"
          className="navbar__link"
          to="/products"
        >
          Contact
        </NavLink>
      </nav>
    );
    
    export default Navbar;


