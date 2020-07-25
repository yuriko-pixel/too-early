import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import topimg from '../images/topimg.png'
import headerstyle from '../styles/headerstyle.module.scss'
import Nav from './nav.js'
const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Nav />
      <Link to="/">
        <img src={topimg} className={headerstyle.img}/>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
