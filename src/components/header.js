import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div>
        <Link to="/" activeClassName="active"   activeStyle={{color: "#57CB66"}}>João Marçal </Link>
        <Link to="/books-editions" activeClassName="active" activeStyle={{color: "#EA483D"}}>Books/Editions</Link>
        <Link to="/texts-press" activeClassName="active" activeStyle={{color: "#3496FA"}}>Texts/Press</Link>
        <Link to="/info" activeClassName="active" activeStyle={{color: "#ffe601"}}>Info</Link>
    </div>
    <div>
        <Link to="/marçal-dos-campos" activeClassName="active" activeStyle={{color: "#A348F8"}}>Marçal dos Campos</Link>
      
    </div>
  </header>
)

export default Header
