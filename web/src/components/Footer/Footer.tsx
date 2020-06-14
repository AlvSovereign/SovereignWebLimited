import React from "react"
import { Container, Typography, Row } from "../ui"

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
      <Typography component="h3" type="subheading" weight="semibold">
        {"Sovereign Web Limited, inc 2019"}
      </Typography>
    </Row>
  )
}

export default Footer

interface FooterProps {}
