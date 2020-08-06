import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <p style={{fontWeight: "bold"}} >
        <Link
          to="/">
          João Marçal
        </Link>
      </p>
    </div>
  </header>
)

export default Header
