import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import "../../styles/index.css"

const LandingLayout = ({ children }: LayoutProps) => {
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
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default LandingLayout

interface LayoutProps {
  children: ReactNode
}
