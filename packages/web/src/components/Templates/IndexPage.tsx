import React from "react"
import { Features, LandingLayout, Hero, Work } from ".."

const IndexPage = ({ pageContext }) => {
  const { allWork } = pageContext

  return (
    <LandingLayout>
      <Hero />
      <Features />
      <Work data={allWork} />
    </LandingLayout>
  )
}

export default IndexPage
