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
      height="screen"
    >
      <Container>
        <div className="flex flex-col justify-center">
          <div className="mb-12 w-3/4">
            <Typography
              className="text-white"
              component="h1"
              type="hero"
              textAlign="left"
            >
              {"We help you realise your web and mobile applications"}
            </Typography>
          </div>
          <Typography
            className="text-white"
            component="h2"
            type="heading"
            textAlign="left"
            weight="light"
          >
            {"We specialise in accessible, standards based, data driven"}
          </Typography>
          <Typography
            className="text-white"
            component="h3"
            type="heading"
            textAlign="left"
            weight="light"
          >
            {"user interface development, focused on great user experience."}
          </Typography>
        </div>
      </Container>
    </Row>
  )
}

export default Hero

interface HeroProps {}
