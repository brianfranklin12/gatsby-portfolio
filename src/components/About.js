import React from 'react';
import styled from 'styled-components';
import { technologies } from '../data/technologies';
import Avatar from '../images/avatar.png';

const Container = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 2rem auto;
  text-align: center;
  font-size: 2rem;
  line-height: 1.4em;
  h3 {
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 50%;
    width: 10em;
    height: 10em;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.4);
  }
  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
    p {
      width: 70%;
    }
  }
`

const List = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  li {
    padding: 1rem;
    img {
      width: 60px;
      height: 60px;
      padding: .6rem;
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.4);
      transition: all 200ms;
    }
    img:hover {
      transform: translateY(-5px);
    }
  }  
`
export default function About() {
  return (
    <Container>
      <h3>Hi, I'm Brian</h3>
      <Content>
      <img alt="avatar" src={Avatar} />
      <p>Full stack web developer with experience in Ruby on Rails and JavaScript. Background in the music and the specialty coffee industries.  Robust management experience including team leadership roles. When not coding, you can find me brewing a cup of single origin coffee, cooking, or writing music.</p>
      </Content>
      <h4>Technologies I Use</h4>
      <List>
        {technologies.map (t => {
          return <li key={t}><img alt="icon" src={t} /></li>
        })}
      </List>
    </Container>
  )
}