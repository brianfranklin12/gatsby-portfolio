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
  position: relative; 
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
    @media (max-width: 500px) {
      margin: 2rem 0;
    }
  }
`

const TextBlock = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;  
  width: 100%;
  height: 100%;
  background-color: #000;
  color: #fff;
  opacity: 0;
  text-transform: uppercase;
  transition: all 400ms;
  :hover {
    opacity: 0.8;
    letter-spacing: 0.2em;
  }
`;

export default function Project ({ project }) {

  return (
      <ProjectDetails>
        <Screen>
          <a href={project.github}>
            <img 
              alt={project.title} 
              src={project.img} 
            />
            <TextBlock>
              <h4>View Repo</h4>
            </TextBlock>
          </a>

        </Screen>
        <Details>
          <h4>{project.title}</h4>
          <p>{project.desc}</p>
          <h6>Tech Stack Used: </h6>
          <TechStack>
            {project.techStack.map(tech => <img key={tech} alt={tech} src={tech} />)}
          </TechStack>
        </Details>
      </ProjectDetails>
  )
}