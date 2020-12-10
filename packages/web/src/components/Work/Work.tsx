import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { Container, Row, Text } from "../ui"
import { SanityWork } from "../../types"

const Work = ({ data }: WorkProps) => {
  return (
    <Row
      alignItems="start"
      className="py-24"
      direction="col"
      element="section"
      height="auto"
      id="our-work"
      justifyContent="start"
    >
      <Container>
        <Text
          as="h2"
          gutterBottom="sm"
          align="center"
          type="heading"
          weight="semibold"
        >
          Our Work
        </Text>
        <Text
          as="h3"
          gutterBottom="md"
          align="center"
          type="subheading"
          weight="light"
        >
          Amazing clients have allowed us to produce work we are proud of.
        </Text>
        <div className="flex flex-col ">
          {data.map(({ node: work }, index: number) => (
            <Row
              key={work._id}
              alignItems="center"
              className="py-8"
              direction={{
                xs: "col",
                md: index % 2 === 0 ? "row" : "row-reverse",
              }}
              element="article"
              height="auto"
              justifyContent="between"
            >
              <Row
                alignItems="inherit"
                alignSelf={{ xs: "start", md: "center" }}
                className={`flex-1 mb-8 md:mb-0 mt-4 md:mt-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
                direction="col"
                height="auto"
                justifyContent="inherit"
              >
                <Text as="h3" gutterBottom="sm" type="subheading">
                  {work.title}
                </Text>
                <Text as="h4" gutterBottom="sm" type="paragraph" weight="light">
                  {work.subtitle}
                </Text>
                <Link
                  className="inline underline"
                  to={`/work/${work.slug.current}`}
                >
                  Learn More
                </Link>
              </Row>
              <div className="flex-1 w-full h-full">
                <Img
                  className="shadow-2xl"
                  fluid={work.thumbnail.image.asset.fluid}
                />
              </div>
            </Row>
          ))}
        </div>
      </Container>
    </Row>
  )
}

export default Work

interface WorkProps {
  data: Array<{
    node: SanityWork
  }>
}
