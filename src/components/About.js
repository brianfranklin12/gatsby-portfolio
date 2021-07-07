import React from 'react';
import styled from 'styled-components';
import { technologies } from '../data/technologies';

const Container = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  font-size: 2rem;
  line-height: 1.4em;
`

const List = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  li {
    padding: 0 1rem;
    cursor: pointer;
    img {
      width: 50px;

    }
  }  
`
export default function About() {
  return (
    <Container>
      <h3>About</h3>
      <p>I'm baby vice four loko try-hard meh +1 before they sold out street art bicycle rights gastropub keffiyeh banh mi drinking vinegar jean shorts. Fam poutine cornhole, sustainable gochujang pok pok raclette. Pinterest bicycle rights tumblr raclette, tousled photo booth shabby chic meditation street art hoodie farm-to-table pitchfork. Tilde chartreuse cloud bread everyday carry kickstarter paleo keffiyeh hoodie typewriter kogi before they sold out.</p>
      <h3>Technologies I Use</h3>
      <List>
        {technologies.map (t => {
          return <li key={t}><img alt="icon" src={t} /></li>
        })}
      </List>
    </Container>
  )
}