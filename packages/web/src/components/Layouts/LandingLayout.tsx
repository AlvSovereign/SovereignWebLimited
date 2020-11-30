import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Contact, Footer, Navigation } from ".."

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
      <Navigation />
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
