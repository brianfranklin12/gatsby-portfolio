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
      <p>I'm baby vice four loko try-hard meh +1 before they sold out street art bicycle rights gastropub keffiyeh banh mi drinking vinegar jean shorts. Fam poutine cornhole, sustainable gochujang pok pok raclette. Pinterest bicycle rights tumblr raclette, tousled photo booth shabby chic meditation street art hoodie farm-to-table pitchfork. Tilde chartreuse cloud bread everyday carry kickstarter paleo keffiyeh hoodie typewriter kogi before they sold out.</p>
      </Content>
      <h3>Technologies I Use</h3>
      <List>
        {technologies.map (t => {
          return <li key={t}><img alt="icon" src={t} /></li>
        })}
      </List>
    </Container>
  )
}