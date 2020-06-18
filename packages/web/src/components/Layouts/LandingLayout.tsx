import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

import "../../styles/index.css"

const LandingLayout = ({ children }: LayoutProps) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header />
      <main>{children}</main>
      <Contact />
      <Footer />
    </>
  )
}

export default LandingLayout

interface LayoutProps {
  children: ReactNode
}
