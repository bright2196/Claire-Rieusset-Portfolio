import React from 'react';
import styled from 'styled-components';
import Burger from '../Burger';


const Nav = styled.nav`
  width: 100%;
  height: 55px;
  
  
  
  display: flex;
  justify-content: space-between;
  position: absolute;
  zIndex: 1
`

const Navbar2 = () => {
  return (
    <Nav>
      <div className="logo">
        
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar2