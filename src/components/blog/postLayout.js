import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const Title = styled.h1`
  letter-spacing: 0.1rem;
`

const Text = styled.div`
font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
line-height: 1.6rem;
font-size: 1.2rem;
`

const postLayout = ({ data }) => {
  const { markdownRemark } = data
  return (
    <>
      <Title>{markdownRemark.frontmatter.title}</Title>
      <Text dangerouslySetInnerHTML={{
        __html: markdownRemark.html
      }}/>
    </>
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