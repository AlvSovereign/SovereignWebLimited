import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { Container, Row, Typography } from "../ui"
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
        <Typography
          component="h2"
          gutterBottom="sm"
          textAlign="center"
          type="heading"
          weight="semibold"
        >
          Our Work
        </Typography>
        <Typography
          component="h3"
          gutterBottom="md"
          textAlign="center"
          type="subheading"
          weight="light"
        >
          Amazing clients have allowed us to produce work we are proud of.
        </Typography>
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
              <div className="flex-1 p-2">
                <Img
                  className="shadow-2xl"
                  fluid={work.thumbnail.image.asset.fluid}
                />
              </div>
              <Row
                alignItems="inherit"
                className={`flex-1 mt-4 md:mt-0 ${
                  index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                }`}
                direction="col"
                height="auto"
                justifyContent="inherit"
              >
                <Typography component="h3" gutterBottom="sm" type="subheading">
                  {work.title}
                </Typography>
                <Typography
                  component="h4"
                  gutterBottom="sm"
                  type="paragraph"
                  weight="light"
                >
                  {work.subtitle}
                </Typography>
                <Link
                  className="inline underline"
                  to={`/work/${work.slug.current}`}
                >
                  Learn More
                </Link>
              </Row>
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
