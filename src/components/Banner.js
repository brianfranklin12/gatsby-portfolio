import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export default function Banner() {
  return (
    <Container>
      <h1>Banner</h1>
    </Container>
  )
}