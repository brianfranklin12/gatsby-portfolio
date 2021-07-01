import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components";

const POST_ARCHIVE_QUERY = graphql`
query BlogPostArchive {
  allMarkdownRemark(limit: 5, sort: {
		order: DESC,
    fields: frontmatter___date
  }) {
    edges {
      node {
        frontmatter {
          slug
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  }
}
`;

const Archive = ({ children }) => {
const data = useStaticQuery
(POST_ARCHIVE_QUERY)

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 1rem;
    text-decoration: underline;
    color: #856084;
  }
`

return (
  <>
    <aside>
      <h3>Archive</h3>
      <ArchiveList>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`/posts${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          )
        })}
      </ArchiveList>
    </aside>
  </>
)
}

export default Archive
