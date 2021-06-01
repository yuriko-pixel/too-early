import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import layoutstyle from '../styles/layoutstyle.module.scss'
import Header from "./header"
import FooterNav from './footernav'

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
    <div>
      <Header/>
        <main className={layoutstyle.blogcontainer}>{children}</main>
        <FooterNav/>
        <footer className={layoutstyle.footer}>
          © {new Date().getFullYear()}, Created By TooEarly?
        </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
