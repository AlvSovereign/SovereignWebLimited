import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import Img, { FluidObject } from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"

import { Typography, Row } from "../ui"
import MasonryImages from "../MasonryImages/MasonryImages"

interface ContentBlockProps {
  blocks: any
}

interface ListItemSerializerProps {
  children: string[]
  index: number
  key: string
  node: any
}

const config = {
  projectId: "o7kebdt4",
  dataset: "production",
}

const mapToElement = {
  normal: "p",
  h1: "h1",
  h2: "h2",
  h3: "h3",
}

const mapToType = {
  normal: "paragraph",
  h2: "heading",
}

const mapToWeight = {
  normal: "medium",
  h2: "semi-bold",
}

const serializers = {
  list: ({ children }) => {
    return <ul className="pl-6">{children}</ul>
  },
  listItem: ({ children, node }: ListItemSerializerProps) => {
    const { style } = node

    return (
      <Row
        alignItems="start"
        className="list-disc"
        direction="row"
        element="li"
        justifyContent="start"
      >
        <Typography
          component={mapToElement[style]}
          className="mr-2"
          gutterBottom="md"
          type={mapToType[style]}
        >
          {"⋅"}
        </Typography>
        <Typography
          component={mapToElement[style]}
          gutterBottom="md"
          type={mapToType[style]}
        >
          {children}
        </Typography>
      </Row>
    )
  },
  types: {
    block: ({ children, node }) => {
      const { style } = node

      if (children.includes("")) {
        return <br />
      }

      return (
        <Typography
          component={mapToElement[style]}
          gutterBottom="md"
          textAlign={style === "h2" ? "center" : "left"}
          type={mapToType[style]}
          weight={mapToWeight[style]}
        >
          {children}
        </Typography>
      )
    },
    image: ({ node }) => {
      const fluid = getFluidGatsbyImage(
        node.asset.id,
        { maxWidth: 800 },
        config
      )

      return <Img className="w-full h-full" fadeIn={true} fluid={fluid} />
    },
    imageWithAlt: ({ node }) => {
      const { altText, image } = node

      return (
        <Img
          alt={altText}
          className="w-full h-full shadow-2xl"
          fadeIn={true}
          fluid={getFluidGatsbyImage(image.asset.id, { maxWidth: 800 }, config)}
        />
      )
    },
    masonryImages: ({ node }) => {
      const { masonryImage } = node

      return (
        <Row
          alignItems="start"
          direction="row"
          justifyContent="center"
          wrap={true}
        >
          <MasonryImages>
            {masonryImage.map(image => (
              <BlockContent
                blocks={image}
                key={image._key}
                serializers={serializers}
              />
            ))}
          </MasonryImages>
        </Row>
      )
    },
    projectIntro: ({ node }) => {
      const { body, image } = node

      return (
        <Row
          alignItems="center"
          direction={{ xs: "col", sm: "col", md: "col", lg: "row", xl: "row" }}
          element="div"
          justifyContent="start"
        >
          <div className="flex-1 pb-4 lg:pr-6">
            <BlockContent blocks={body} serializers={serializers} />
          </div>
          <div className="flex-1 pb-4 lg:pl-6">
            <BlockContent blocks={image} serializers={serializers} />
          </div>
        </Row>
      )
    },
  },
}

const ContentBlock = ({ blocks }: ContentBlockProps) => {
  return <BlockContent blocks={blocks} serializers={serializers} />
}

export default ContentBlock
