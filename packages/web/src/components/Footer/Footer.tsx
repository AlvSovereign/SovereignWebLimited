import React from "react"
import { Container, Text, Row } from "../ui"

const Footer = () => {
  return (
    <Row
      alignItems="start"
      className="py-4"
      direction="col"
      element="footer"
      justifyContent="center"
      height="auto"
      withContainer={true}
    >
      <Text as="p" type="subheading" weight="semibold">
        {"Sovereign Web Limited, inc 2019"}
      </Text>
    </Row>
  )
}

export default Footer

interface FooterProps {}
