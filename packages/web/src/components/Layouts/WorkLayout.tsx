import React, { ReactNode } from "react"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const WorkLayout = ({ children }: WorkLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default WorkLayout

interface WorkLayoutProps {
  children: ReactNode
}
