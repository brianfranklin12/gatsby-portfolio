import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  background-color: var(--grey);
  color: var(--bg-color);
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.1em;
  div {
    margin: 0 2rem;
  }
  @media (min-width: 500px) {
    font-size: 2rem;
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