import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
`
const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h3 {
  font-size: clamp(2.25rem, 8vw, 8rem);
  font-weight: 600;
  letter-spacing: 0.1em;
  margin: 0;
}
p {
  font-size: clamp(1.125rem, 4vw, 4rem);
  font-weight: 300;
  letter-spacing: 0.1em;
  margin: 1em 0;
  text-align: center;
  a {
    text-decoration: underline;
    text-decoration-color: var(--primary-color);
    text-decoration-thickness: .1em;
    text-underline-offset: .2em;
    cursor: pointer;
  }
}
`

const Footer = styled.footer`
  background-color: var(--primary-color);
  color: var(--bg-color);
  padding: 2rem;
  font-size: 1rem;
`
export default function Contact() {
  return (
    <Container>
      <Content>
      <h3>Want to get in touch?</h3>
      <p>Check out my <a>resume</a>, my <a>blog</a> or shoot me an <a>email.</a></p>
      </Content>
      <Footer>
        &copy; 2021 Brian Franklin. Built with GatsbyJS
      </Footer>
    </Container>
  )
}