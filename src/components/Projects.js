import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import { projects } from '../data/projects';


const Section = styled.section`
  background-color: var(--secondary-color);
  color: var(--grey);
  padding: 1rem;
`

const Container = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 2rem auto;
  text-align: center;
  font-size: 2rem;
  line-height: 1.4em;
`

export default function Projects() {
  return (
    <Section>
      <Container>
        <h3>Projects</h3>
        {projects.map (project => {
          return <Project project={project} />
        })}
      </Container>
    </Section>
  )
}