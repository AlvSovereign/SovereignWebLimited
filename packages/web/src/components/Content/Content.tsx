import React from "react"
import Img from "gatsby-image"

import { Container, Row, Text } from "../ui"
import { ImageWithMask, WorkHeroImages } from ".."
import { SanityWork } from "../../types/index"
import ContentBlock from "../ContentBlock/ContentBlock"
import { Link } from "gatsby"

interface ContentProps {
  data: SanityWork
}

const Content = ({ data }: ContentProps) => {
  const { backgroundImage, href, mainImages, title, subtitle } = data

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
          alt={backgroundImage.altText}
          className="w-full h-full"
          fadeIn={true}
          fluid={backgroundImage.image.asset.fluid}
        />
        <Row
          alignItems="center"
          className="absolute w-full"
          direction="col"
          justifyContent="center"
          withContainer={true}
        >
          <Row
            alignItems="center"
            className="flex-1"
            direction={{ xs: "col", lg: "row" }}
            justifyContent="center"
          >
            <div className="flex-1 mb-12 lg:mb-0">
              <Text
                align="center"
                className="text-white mb-4"
                as="h1"
                type="pageTitle"
              >
                {title}
              </Text>
              <Text
                align="center"
                className="text-white mb-4"
                as="h1"
                gutterBottom="sm"
                type="subheading"
                weight="light"
              >
                {subtitle}
              </Text>
              <Text
                className="text-white underline"
                as="a"
                href={href}
                target="_blank"
                align="center"
                type="subheading"
                weight="light"
              >
                Visit website
              </Text>
            </div>
          </Row>
        </Row>
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
        <Text
          align="center"
          className="text-white"
          as="h6"
          gutterBottom="md"
          type="paragraph"
        >
          TL:DR
        </Text>
        <Text
          align="center"
          className="text-white mx-auto w-2/3"
          as="h3"
          type="subheading"
        >
          {data.tagline}
        </Text>
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
