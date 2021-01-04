import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`

    list-style: none;
    display: flex;
    z-index: 1000;
    background-color: #020202;
    border-radius: 30px 0 30px 0;
    margin:0;
    flex-direction: column;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 70vw;
    align-items: center;
    justify-content: center;
   
    transition: transform 0.5s ease-in-out;
    .navbar__link {
      color: #E0CF04;
      margin: 50px 10px;
      text-align: center;
      font-size: 50px;
      display:flex;
      justify-content:center;
      align-items:center;
      text-transform: uppercase;
      font-family: linotype-didot,serif;
      font-weight: 550;
      font-style: normal;
      text-align: center;
      transition: transform 0.5s ease-in-out;
      
    }

  

  .item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition-property: transform;
    transition-duration: 400ms;
    
   
  }

    .circleButton {
        width: 50px;
        height: 50px;
        display: flex;
        background-color:RGBA(224,224,224,0.16) ;
        justify-content: center;
        align-items: center;
        z-index: 0;
        position: absolute;
        
        border-radius: 50%;
        transition-property: transform;
        transition-duration: 400ms;
        
    
      }

      .item:hover .circleButton {
        transform: scale(1.5);
        background-color: #e0ce0446;
      }

      @media (max-width: 768px) {
        flex-flow: column nowrap;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 70vw;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        .navbar__link {
            color: #E0CF04;
            margin: 50px 10px;
            text-align: center;
            font-size: 40px;
            display:flex;
            justify-content:center;
            align-items:center;
            text-transform: uppercase;
            font-family: linotype-didot,serif;
            font-weight: 550;
            font-style: normal;
            text-align: center;
            transition: transform 0.5s ease-in-out;
            
          }
       
      }
    `;
   


  


const RightNav = ({ open }) => {
  return (
    <div className='container'>
    <Ul open={open}>
    <div className='item'>
            <NavLink
                activeClassName="navbarLinkActive"
                className="navbar__link"
                to="/"
            >
                    <li>Home</li>
            </NavLink>
            <div className='circleButton'></div>
    </div>
    <div className='item'>
            <NavLink
                activeClassName="navbarLinkActive"
                className="navbar__link"
                to="/About"
            >
                    <li>A propos</li>
            </NavLink>
            <div className='circleButton'></div>
    </div>
    <div className='item'>
            <NavLink
                activeClassName="navbarLinkActive"
                className="navbar__link"
                to="/Work"
            >
                    <li>Tous mes projets</li>
            </NavLink>
            <div className='circleButton'></div>
    </div>
    <div className='item'>
            <NavLink
                activeClassName="navbarLinkActive"
                className="navbar__link"
                to="/Contact"
            >
                    <li>Contact</li>
            </NavLink>
            <div className='circleButton'></div>
    </div>
            
      
    </Ul>
    </div>
  )
}

export default RightNav