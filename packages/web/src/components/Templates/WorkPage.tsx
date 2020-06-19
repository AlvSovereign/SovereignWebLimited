import React from "react"
import { graphql } from "gatsby"

import Content from "../Content/Content"
import LandingLayout from "../Layouts/LandingLayout"
import { SanityWork } from "../../types/index"

interface WorkPageProps {
  data: {
    sanityWork: SanityWork
  }
  pageContext: {
    _id: string
  }
}

const WorkPage = ({ data }: WorkPageProps) => {
  return (
    <LandingLayout>
      <Content data={data.sanityWork} />
    </LandingLayout>
  )
}

export default WorkPage

export const WorkQuery = graphql`
  query WorkData($queryId: String) {
    sanityWork(_id: { eq: $queryId }) {
      name
      _id
      _rawBody(resolveReferences: { maxDepth: 5 })
      backgroundImage {
        altText
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid_withWebp_noBase64
            }
          }
        }
      }
      href
      mainImages {
        altText
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid_withWebp_noBase64
            }
          }
        }
      }
      slug {
        current
      }
      subtitle
      tagline
      title
    }
  }
`
