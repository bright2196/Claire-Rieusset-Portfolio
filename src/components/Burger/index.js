import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from '../RightNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 30px;
  position: fixed;
  top: 20px;
  right: 35px;
  z-index: 1001;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
   transition-property: transform;
  transition-duration: 400ms;

  StyledBurger:hover {
    transform: translateX(2em);
  }
  div {
    width: 2rem;
    height: 0.15rem;
    background-color: ${({ open }) => open ? '#E0E0E0' : '#E0CF04'};
  
    transform-origin: 2px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open}  onClick={() => setOpen(!open)} >
        
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} setOpen={setOpen}/>
    </>
  )
}
export default Burger