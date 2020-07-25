import React from 'react'
import navstyle from '../styles/navstyle.module.scss'
import { Link } from 'gatsby'

const Nav = ()=> {
  return (
    <ol className={navstyle.nav}>
      <div className={navstyle.flex}>
        <Link to="/about"><li className={navstyle.navlink}>About</li></Link>
        <Link to="/contact"><li className={navstyle.navlink}>Contact</li></Link>
        <Link to="https://twitter.com/2E_media" target="_blank"><i class="fa fa-twitter fa-2x"></i></Link>
      </div>
    </ol>
  )
}

export default Nav