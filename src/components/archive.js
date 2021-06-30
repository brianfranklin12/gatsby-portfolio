import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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
const data = useStaticQuery(POST_ARCHIVE_QUERY)

return (
  <>
    <aside>
      <h3>Archive</h3>
      <ul>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`/posts${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </aside>
  </>
)
}

export default Archive
