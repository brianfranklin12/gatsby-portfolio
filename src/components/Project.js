import React from 'react';
import styled from 'styled-components';

const ProjectDetails = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  @media (max-width: 500px) {
    display: block;
  }
`

const Screen = styled.div`
  width: 85%;
  margin: 2rem auto;
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.4);
  }
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  h4 {
    margin: 0;
  }
  p {
    margin: 1rem;
  }
  h6 {
    margin: 0;
    margin-bottom: 1rem;
  }
  img {
    padding: .3rem;
    border-radius: 50%;
  }
`

const TechStack = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0;
  img {
    width: 60px;
    height: 60px;
    padding: .6rem;
    // background-color: var(--bg-color);
    border-radius: 0;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.4);
  }
`

export default function Project ({ project }) {

  return (
      <ProjectDetails>
        <Screen>
          <img 
            alt={project.title} 
            src={project.img} 
          />
        </Screen>
        <Details>
          <h4>{project.title}</h4>
          {/* <a href={project.github}><img src={github} alt="github link"/></a> */}
          <p>{project.desc}</p>
          <h6>Tech Stack Used: </h6>
          <TechStack>
            {project.techStack.map(tech => <img key={tech} alt={tech} src={tech} />)}
          </TechStack>
        </Details>
      </ProjectDetails>
  )
}