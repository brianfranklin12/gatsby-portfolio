import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: var(--primary-color);
  color: var(--bg-color);
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: clamp(2.25rem, 8vw, 8rem);
    font-weight: 600;
    letter-spacing: 0.1em;
    margin: 0;
  }
  h2 {
    font-size: clamp(1.125rem, 4vw, 4rem);
    font-weight: 300;
    letter-spacing: 0.1em;
    margin: 1em 0;
  }
`

export default function Banner() {
  return (
    <Container>
      <h1>Brian Franklin</h1>
      <h2>Full Stack Web Developer</h2>
    </Container>
  )
}