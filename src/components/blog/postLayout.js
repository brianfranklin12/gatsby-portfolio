import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  width: 85%;
  max-width: 1000px;
  margin: 0 auto;
`

const Title = styled.h1`
  letter-spacing: 0.2rem;
  font-size: 3rem;
  border-bottom: 2px solid var(--primary-color);
`

const Text = styled.div`
font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
line-height: 1.4em;
font-size: 2rem;
`

const postLayout = ({ data }) => {
  const { markdownRemark } = data
  return (
    <Container>
      <Title>{markdownRemark.frontmatter.title}</Title>
      <Text dangerouslySetInnerHTML={{
        __html: markdownRemark.html
      }}/>
    </Container>
  )
}


export const query = graphql`
query PostQuery($slug: String!) {
  markdownRemark(frontmatter: {
    slug: {
      eq: $slug
    }
  }) {
    html
    frontmatter {
			title
      date
      slug	
  }
}
}
`
export default postLayout;