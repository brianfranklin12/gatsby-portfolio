import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 2rem 0;
  background-color: #333;
  color: #fff;
  text-transform: uppercase;
  div {
    margin: 0 2rem;
  }
`

export default function Navigation() {
  return (
    <Nav>
      <div>About</div>
      <div>Projects</div>
      <div>Contact</div>
    </Nav>
  )
}