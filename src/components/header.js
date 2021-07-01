import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: #2D4739;
  margin-bottom: 1.45rem;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: .75rem;
  h1 {
    margin: 0;
  }
  a {
    color: #D7DEDC;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: .2rem;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1>
        <Link to="/">
          Brian Franklin
        </Link>
      </h1>
      </HeaderContainer>
    </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
