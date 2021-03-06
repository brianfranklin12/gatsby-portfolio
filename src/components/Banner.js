import React from 'react';
import styled from 'styled-components';
import { socials } from '../data/socials';
import arrowDown from '../images/arrow-down.svg';
import resume from '../resume.pdf';
import scrollTo from 'gatsby-plugin-smoothscroll';


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
    margin: 1.5em;
  }
  li:hover {
    opacity: 0.8;
  }
`

const Resume = styled.a`
  text-decoration: none;
  font-size: 2rem;
  padding: 1.5rem;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: var(--secondary-color);
  transition: all 200ms;
  :hover {
    letter-spacing: .2em;
  }
`

const DownArrow = styled.div`
  text-align: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 200ms;
  h4 {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  img {
    width: 35px;
    margin-bottom: 1.5rem;
  }
  :hover {
    letter-spacing: 0.1em;
    transform: translateY(5px);
  }
`
export default function Banner() {
  return (
    <Container>
      <Links>
        <Socials>
          {socials.map(s => {
            return <a key={s} href={s.url}><li><img alt={s.name} width="30px" src={s.img} /></li></a>
          })}
        </Socials>
        <Resume href={resume}>Resume</Resume>
      </Links>
      <Content>
      <h1>Brian Franklin</h1>
      <h2>Full Stack Web Developer</h2>
      </Content>
      <DownArrow onClick={() => scrollTo('#nav')}>
        <h4>Learn More</h4>
        <img alt="down arrow" src={arrowDown} />
      </DownArrow>
      
    </Container>
  )
}