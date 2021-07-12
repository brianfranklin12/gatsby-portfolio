import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'

const LISTING_QUERY = graphql`
query BlogPostListing {
  allMarkdownRemark(limit: 10, sort: {
		order: DESC,
    fields: frontmatter___date
  }) {
    edges {
      node {
        excerpt
        frontmatter {
          slug
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  }
}`

const Header = styled.header`
  padding: 1rem 3rem;
  text-align: center;
  background-color: var(--primary-color);
  color: var(--bg-color);
  font-size: 2rem;    
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  width: 80%;
  max-width: 1000px;
`

const Post = styled.article`
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  a {
    color: #333;
    text-decoration: none;
  }
  h2 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 2rem;  
  }
  p {
    font-size: 1.3rem;
  }
  .read-more {
    font-size: 1.3rem;
    text-decoration: underline;
    color: var(--primary-color);
  }
`
const Listing = () => {
  const data = useStaticQuery(LISTING_QUERY);
  
  return (
    <>
      <Header>
        <h1>Brian Franklin's Blog</h1>
      </Header>
      <Container>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <Post key={node.frontmatter.slug}>
            <Link to={`/posts${node.frontmatter.slug}`}><h2>{node.frontmatter.title}</h2>
            </Link>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
            <Link 
              to={`/posts${node.frontmatter.slug}`}
              class="read-more"
            >
              Read More
            </Link>
          </Post>
          
        ))}
      </Container>
    </>
  )
}

export default Listing;