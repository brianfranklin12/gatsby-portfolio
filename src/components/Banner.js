import React from 'react';
import styled from 'styled-components';
import { socials } from '../data/socials';
import arrowDown from '../images/arrow-down.svg';

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: var(--primary-color);
  color: var(--bg-color);
  height: 100%;
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
    text-decoration: underline;
    text-decoration-color: var(--secondary-color);
    text-decoration-thickness: .1em;
    text-underline-offset: .2em;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`
const Socials = styled.div`
  display: flex;
  li {
    font-size: 1.5rem;
    padding: 1.5em;
  }
`

const Resume = styled.li`
  font-size: 2rem;
  padding: 1.5rem;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: var(--secondary-color);
`

const DownArrow = styled.div`
  text-align: center;
  font-size: 2rem;
  h4 {
    margin-bottom: 1rem;
  }
  img {
    width: 35px;
    margin-bottom: 1.5rem;
  }
`
export default function Banner() {
  return (
    <Container>
      <Links>
        <Socials>
          {socials.map(s => {
            return <li key={s}><img alt={s} width="30px" src={s} /></li>
          })}
        </Socials>
        <Resume>Resume</Resume>
      </Links>
      <Content>
      <h1>Brian Franklin</h1>
      <h2>Full Stack Web Developer</h2>
      </Content>
      <DownArrow>
        <h4>Learn More</h4>
        <img alt="down arrow" src={arrowDown} />
      </DownArrow>
      
    </Container>
  )
}