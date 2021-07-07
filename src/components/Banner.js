import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export default function Banner() {
  return (
    <Container>
      <h1>Brian Franklin</h1>
      <h2>Full Stack Web Developer</h2>
    </Container>
  )
}