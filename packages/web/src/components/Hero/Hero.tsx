import React from "react"
import { Container, Row, Typography } from "../ui"

const Hero = () => {
  return (
    <Row
      alignItems="center"
      className="bg-black"
      direction="col"
      element="section"
      justifyContent="around"
    >
      <Container>
        <div className="flex flex-col justify-center py-12 md:py-32 w-full md:w-3/4">
          <div className="mb-12">
            <Typography
              className="text-white"
              component="h1"
              type="hero"
              weight="semibold"
            >
              {"We help you realise your web and mobile applications"}
            </Typography>
          </div>
          <Typography
            className="text-white"
            component="h2"
            type="subheading"
            weight="light"
          >
            {
              "We specialise in accessible, standards based, data driven user interface development, focused on great user experience."
            }
          </Typography>
        </div>
      </Container>
    </Row>
  )
}

export default Hero

interface HeroProps {}
