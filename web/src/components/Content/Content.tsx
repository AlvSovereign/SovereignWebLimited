import React from "react"

import { Container, Row, Typography } from "../ui"
import { ImageWithMask } from ".."
import { SanityWork } from "../../types/index"
import ContentBlock from "../ContentBlock/ContentBlock"

interface ContentProps {
  data: SanityWork
}

const Content = ({ data }: ContentProps) => {
  const { mainImage, title, subtitle, url } = data

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
          alt={mainImage.altText}
          className="w-full h-full"
          fadeIn={true}
          fluid={mainImage.image.asset.fluid}
        />
        <div className="absolute">
          <Container>
            <Typography
              textAlign="center"
              className="text-white"
              component="h1"
              type="pageTitle"
            >
              {title}
            </Typography>
            <Typography
              textAlign="center"
              className="text-white"
              component="h1"
              type="subheading"
              weight="light"
            >
              {subtitle}
            </Typography>
            <Typography
              textAlign="center"
              className="text-white"
              component="h1"
              type="subheading"
              weight="light"
            >
              {url}
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
      <Row
        alignItems="start"
        className="py-24"
        direction="col"
        element="section"
        height="auto"
        justifyContent="start"
        withContainer={true}
      >
        <div className="w-auto lg:w-2/3 mx-auto">
          <ContentBlock blocks={data._rawBody} />
        </div>
      </Row>
    </>
  )
}

export default Content
