const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postLayout = path.resolve('./src/components/postLayout.js')
  const result = await graphql(`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
          }
        }
      }
    }
  }
  
  `)

  result.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: `posts${edge.node.frontmatter.slug}`,
      component: postLayout,
      context: {
        slug: edge.node.frontmatter.slug
      }
    });
  })
}