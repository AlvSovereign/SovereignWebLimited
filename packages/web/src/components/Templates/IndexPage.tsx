import React from "react"
import { Link } from "gatsby"

import { Contact, LandingLayout, Hero, Work } from ".."

const IndexPage = ({ pageContext }) => {
  const { allWork } = pageContext

  return (
    <LandingLayout>
      <Hero />
      <Work data={allWork} />
    </LandingLayout>
  )
}

export default IndexPage
