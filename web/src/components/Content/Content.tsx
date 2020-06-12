import React from "react"

import { Container, Row, Typography } from "../ui"
import { ImageWithMask } from ".."
import { SanityWork } from "../../types/index"

interface ContentProps {
  data: SanityWork
}

const Content = ({ data }: ContentProps) => {
  console.log("data: ", data)
  return (
    <>
      <Row
        alignItems="center"
        className="relative"
        direction="col"
        element="section"
        height="hero"
        justifyContent="center"
      >
        <ImageWithMask
          className="w-full h-full"
          fadeIn={true}
          fluid={data.mainImage.asset.fluid}
        />
        <div className="absolute">
          <Container>
            <Typography
              textAlign="center"
              className="text-white"
              component="h1"
              type="pageTitle"
            >
              {data.title}
            </Typography>
            <Typography
              textAlign="center"
              className="text-white"
              component="h1"
              type="subheading"
              weight="light"
            >
              {data.subtitle}
            </Typography>
          </Container>
        </div>
      </Row>
      <Row
        alignItems="center"
        className="bg-black py-24"
        direction="col"
        element="section"
        height="auto"
        justifyContent="center"
        withContainer={true}
      >
        <Typography
          textAlign="center"
          className="text-white"
          component="h6"
          gutterBottom="md"
          type="paragraph"
        >
          TL:DR
        </Typography>
        <Typography
          textAlign="center"
          className="text-white mx-auto w-2/3"
          component="h3"
          type="subheading"
        >
          {data.tagline}
        </Typography>
      </Row>
    </>
  )
}

export default Content
