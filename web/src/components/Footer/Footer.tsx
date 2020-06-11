import React from "react"
import { Container, Typography, Row } from "../ui"

const Footer = () => {
  return (
    <Row
      alignItems="start"
      direction="col"
      element="footer"
      justifyContent="center"
      height="auto"
    >
      <Container className="py-4">
        <Typography component="h3" type="subheading">
          {"Sovereign Web Limited, inc 2019"}
        </Typography>
      </Container>
    </Row>
  )
}

export default Footer

interface FooterProps {}
