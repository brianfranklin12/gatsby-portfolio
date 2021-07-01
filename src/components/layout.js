/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Archive from "./archive"
import "./layout.css"
import styled from "styled-components";


const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`

const MainLayout = styled.main`
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`
const Footer = styled.footer`
  background: #2D4739;
  padding: 1rem 2rem;
  color: #D7DEDC;
  a {
    color: #D7DEDC;
  }
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <MainLayout>
        <div>
          {children}
        </div>
        <Archive />
      </MainLayout>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </Footer>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
