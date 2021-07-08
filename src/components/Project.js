import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem;
  align-items: center;
  margin: 1rem;
  a {
    text-decoration-color: var(--primary-color);
    color: inherit;
  }
  img {
    display: block;
    width: auto;
    height: auto;
    max-width: 100%;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.4);
  }
`

const Projects = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  img {
    margin: 0 auto;
    height: 60px;
    width: 60px;
    padding: 0.6rem;
    background-color: var(--bg-color);
  }
`

export default function Project ({ project }) {
  return (
    <Card>
      <img src={project.img} />
      <div>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <a href={project.github}>Link to Repository</a>
        <h5>Tech Stack: </h5>
        <Projects>
          {project.techStack && project.techStack.map(tech => {
            return <img alt={tech} src={tech} />
          })}
        </Projects>
      </div>
    </Card>
  )
}