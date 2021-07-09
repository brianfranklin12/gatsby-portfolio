import React from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';


const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  background-color: var(--grey);
  color: var(--bg-color);
  
  button {
    background-color: inherit;
    color: inherit;
    border: none;
    text-transform: uppercase;
    font-size: 1.5rem;
    letter-spacing: 0.1em;
    padding: 0 2rem;
    cursor: pointer;
    transition: all 200ms;
  }
  button:hover {
    color: #fff;
  }
  @media (min-width: 500px) {
    font-size: 2rem;
    button {
      padding: 0 4rem;
    }
  }
`

export default function Navigation() {
  return (
    <Nav id="nav">
      <button onClick={() => scrollTo('#about')}>About</button>
      <button onClick={() => scrollTo('#projects')}>Projects</button>
      <button onClick={() => scrollTo('#contact')}>Contact</button>
    </Nav>
  )
}