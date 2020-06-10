import React from "react"
import { Link } from "gatsby"

import { Contact, LandingLayout, Hero, Work } from "../components"

const IndexPage = () => (
  <LandingLayout>
    <Hero />
    <Work />
    <Contact />
  </LandingLayout>
)

export default IndexPage
