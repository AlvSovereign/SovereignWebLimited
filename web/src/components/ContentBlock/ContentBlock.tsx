import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import { Typography, Row } from "../ui"

interface ContentBlockProps {
  blocks: any
}

interface ListItemSerializerProps {
  children: string[]
  index: number
  key: string
  node: any
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
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    block: ({ children, node }) => {
      const { style } = node
      return (
        <Typography
          component={mapToElement[style]}
          gutterBottom="md"
          textAlign={style === "h2" ? "center" : "left"}
          type={mapToType[style]}
        >
          {children}
        </Typography>
      )
    },
  },
}

const ContentBlock = ({ blocks }: ContentBlockProps) => {
  console.log("blocks: ", blocks)
  return <BlockContent blocks={blocks} serializers={serializers} />
}

export default ContentBlock
